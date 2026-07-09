from PIL import Image
import numpy as np
import cv2
import os

def remove_gif_background_opencv(input_path, output_path, tolerance=120):
    print(f"Lendo o GIF de entrada: {input_path}")
    img = Image.open(input_path)
    
    frames = []
    duration = img.info.get('duration', 100)
    
    width, height = img.size
    total_frames = getattr(img, 'n_frames', 1)
    print(f"Total de frames a processar: {total_frames}, tamanho: {width}x{height} (usando OpenCV + Paleta Global)")
    
    # Cor do fundo do site (dark gray/blue) em RGB: (15, 17, 23)
    # Em BGR (OpenCV) fica: (23, 17, 15)
    site_bg_rgb = (15, 17, 23)
    site_bg_bgr = (23, 17, 15)
    
    transparency_index = None
    
    for frame_idx in range(total_frames):
        img.seek(frame_idx)
        
        # Converter PIL para RGBA e depois para BGR (para o OpenCV)
        frame_rgba = img.convert('RGBA')
        bgr = cv2.cvtColor(np.array(frame_rgba), cv2.COLOR_RGBA2BGR)
        
        # Criar máscara para o floodFill (tamanho H+2, W+2 conforme exigido pelo OpenCV)
        h, w = bgr.shape[:2]
        mask = np.zeros((h + 2, w + 2), dtype=np.uint8)
        
        # Parâmetros para floodFill
        # Usamos FLOODFILL_FIXED_RANGE para comparar com a cor do seed point (branco)
        flags = 4 | cv2.FLOODFILL_FIXED_RANGE
        diff = (tolerance, tolerance, tolerance)
        
        # FloodFill a partir dos 4 cantos pintando o fundo com a cor do site (BGR: 23, 17, 15)
        cv2.floodFill(bgr, mask, (0, 0), site_bg_bgr, loDiff=diff, upDiff=diff, flags=flags)
        cv2.floodFill(bgr, mask, (w - 1, 0), site_bg_bgr, loDiff=diff, upDiff=diff, flags=flags)
        cv2.floodFill(bgr, mask, (0, h - 1), site_bg_bgr, loDiff=diff, upDiff=diff, flags=flags)
        cv2.floodFill(bgr, mask, (w - 1, h - 1), site_bg_bgr, loDiff=diff, upDiff=diff, flags=flags)
        
        # Criar imagem RGBA a partir do BGR
        rgba = cv2.cvtColor(bgr, cv2.COLOR_BGR2RGBA)
        
        # Identificar onde está a cor de fundo no BGR
        background_mask = (bgr[:, :, 0] == site_bg_bgr[0]) & (bgr[:, :, 1] == site_bg_bgr[1]) & (bgr[:, :, 2] == site_bg_bgr[2])
        
        # Definir canal Alpha como 0 para os pixels de fundo
        rgba[background_mask, 3] = 0
        
        # Converter NumPy de volta para PIL
        new_frame = Image.fromarray(rgba)
        
        # Colar a frame RGBA sobre o fundo sólido (15, 17, 23)
        background = Image.new('RGB', img.size, site_bg_rgb)
        background.paste(new_frame, mask=new_frame.split()[3])
        
        if frame_idx == 0:
            # Para a primeira frame, gera a paleta adaptativa e encontra o índice transparente
            frame_p = background.convert('P', palette=Image.ADAPTIVE, colors=255)
            transparency_index = frame_p.getpixel((0, 0))
            frame_p.info['transparency'] = transparency_index
            frames.append(frame_p)
        else:
            # Para as demais frames, força o uso da MESMA paleta da primeira frame (quantize)
            # Isso garante que o índice de transparência seja exatamente o mesmo em todas as frames,
            # evitando piscadas da cor de fundo (que agora é escura e imperceptível)
            frame_p = background.quantize(palette=frames[0])
            frame_p.info['transparency'] = transparency_index
            frames.append(frame_p)
            
        if (frame_idx + 1) % 20 == 0 or frame_idx == total_frames - 1:
            print(f"Processadas {frame_idx + 1}/{total_frames} frames...")
        
    print(f"Salvando o GIF otimizado em: {output_path}")
    frames[0].save(
        output_path,
        save_all=True,
        append_images=frames[1:],
        loop=0,
        duration=duration,
        transparency=transparency_index,
        disposal=2
    )
    print("Concluído com sucesso!")

if __name__ == "__main__":
    # Garantir que o backup original existe
    if not os.path.exists("public/vulkaris_backup.gif"):
        print("Criando backup do arquivo original...")
        import shutil
        shutil.copy2("public/vulkaris.gif", "public/vulkaris_backup.gif")
        
    # Vamos rodar com tolerância de 120 para pegar as bordas cinzas do GIF anti-aliased
    remove_gif_background_opencv("public/vulkaris_backup.gif", "public/vulkaris.gif", tolerance=120)
