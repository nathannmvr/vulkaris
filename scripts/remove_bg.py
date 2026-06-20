from PIL import Image, ImageDraw
import sys

def remove_background(input_path, output_png_path, output_ico_path):
    img = Image.open(input_path).convert("RGBA")
    
    # We will do a flood fill from the top-left corner
    # to find all the background pixels and make them transparent.
    # Since it's a JPEG, the background might not be perfectly white (e.g. 255, 255, 255).
    # We can use a tolerance.
    
    width, height = img.size
    pixels = img.load()
    
    # Seed points for flood fill: 4 corners
    seeds = [(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)]
    
    # Target color is the color of the top-left pixel
    target_color = pixels[0, 0]
    
    # visited set
    visited = set()
    queue = list(seeds)
    
    def color_distance(c1, c2):
        # c1 and c2 are (r, g, b, a)
        return sum(abs(a - b) for a, b in zip(c1[:3], c2[:3]))

    # Tolerance for JPEG artifacts in the white background
    tolerance = 80
    
    while queue:
        x, y = queue.pop()
        if (x, y) in visited:
            continue
        visited.add((x, y))
        
        if color_distance(pixels[x, y], target_color) <= tolerance:
            # Make transparent
            pixels[x, y] = (255, 255, 255, 0)
            
            # Add neighbors
            if x > 0: queue.append((x - 1, y))
            if x < width - 1: queue.append((x + 1, y))
            if y > 0: queue.append((x, y - 1))
            if y < height - 1: queue.append((x, y + 1))
            
    # Save the full size PNG
    img.save(output_png_path, "PNG")
    print(f"Saved {output_png_path}")
    
    # Save the favicon.ico
    icon_sizes = [(16,16), (32, 32), (48, 48), (64,64)]
    img.save(output_ico_path, format="ICO", sizes=icon_sizes)
    print(f"Saved {output_ico_path}")

if __name__ == "__main__":
    remove_background("public/vulkaris_logo.jpeg", "public/vulkaris_logo.png", "public/favicon.ico")
