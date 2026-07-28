import '../styles/Donate.css';
import { useState } from 'react';
import {
  IconHeart,
  IconPix,
  IconCopy,
  IconCheck,
  IconQr,
  IconGift,
  IconSparkles,
  IconX,
  IconMail
} from './Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Donate() {
  const headerRef = useScrollReveal({ threshold: 0.2 });
  const contentRef = useScrollReveal({ threshold: 0.15 });

  const [copiedKey, setCopiedKey] = useState(false);
  const [copiedPayload, setCopiedPayload] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);

  const pixKey = 'vulkarisroboticsteam@gmail.com';
  const pixPayload = '00020126520014BR.GOV.BCB.PIX0130vulkarisroboticsteam@gmail.com5204000053039865802BR5917VULKARIS ROBOTICS6011BELO JARDIM62070503***630463A4';

  const copyPixKey = () => {
    navigator.clipboard.writeText(pixKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2400);
  };

  const copyPixPayload = () => {
    navigator.clipboard.writeText(pixPayload);
    setCopiedPayload(true);
    setTimeout(() => setCopiedPayload(false), 2400);
  };

  return (
    <section id="doacao" className="section donate" aria-labelledby="donate-title">
      <div className="section-divider" ref={useScrollReveal({ threshold: 0.5 })} />
      <div className="container">
        
        {/* Cabeçalho da Seção */}
        <div className="reveal-up" ref={headerRef}>
          <div className="donate__badge">
            <IconSparkles size={16} />
            <span>Faça Acontecer</span>
          </div>
          <h2 id="donate-title" className="section-title">Apoie a Vulkaris</h2>
          <p className="section-subtitle">
            Sua contribuição impulsiona nossos alunos a construir robôs inovadores, competir em alto nível e levar a ciência e tecnologia mais longe.
          </p>
          <div className="divider" />
        </div>

        {/* Painel Principal de Métodos de Doação */}
        <div className="donate__main-card glass-card reveal-up" ref={contentRef}>
          <div className="donate__glow-overlay" aria-hidden="true" />
          
          <div className="donate__content-grid">
            
            {/* Coluna 1: PIX e QR Code */}
            <div className="donate__pix-panel">
              <div className="donate__pix-header">
                <div className="donate__pix-brand">
                  <div className="donate__pix-logo-icon">
                    <IconPix size={24} />
                  </div>
                  <div>
                    <h3 className="donate__pix-title">Doação Rápida via PIX</h3>
                    <span className="donate__pix-sub">Qualquer valor ajuda nossa equipe</span>
                  </div>
                </div>
              </div>

              {/* Chave PIX Copiável */}
              <div className="donate__pix-box">
                <span className="donate__pix-label">Chave PIX (E-mail):</span>
                <div className="donate__pix-input-group">
                  <input
                    type="text"
                    readOnly
                    value={pixKey}
                    className="donate__pix-input"
                    aria-label="Chave PIX e-mail"
                  />
                  <button
                    onClick={copyPixKey}
                    className={`donate__copy-btn ${copiedKey ? 'donate__copy-btn--copied' : ''}`}
                    aria-label={copiedKey ? 'Chave PIX copiada!' : 'Copiar chave PIX'}
                  >
                    {copiedKey ? (
                      <>
                        <IconCheck size={18} />
                        <span>Copiado!</span>
                      </>
                    ) : (
                      <>
                        <IconCopy size={18} />
                        <span>Copiar E-mail</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* PIX Copia e Cola */}
              <div className="donate__pix-box">
                <span className="donate__pix-label">PIX Copia e Cola (Código do Banco):</span>
                <div className="donate__pix-input-group">
                  <input
                    type="text"
                    readOnly
                    value={pixPayload}
                    className="donate__pix-input donate__pix-input--small"
                    aria-label="Código PIX Copia e Cola"
                  />
                  <button
                    onClick={copyPixPayload}
                    className={`donate__copy-btn donate__copy-btn--secondary ${copiedPayload ? 'donate__copy-btn--copied' : ''}`}
                    aria-label={copiedPayload ? 'Código PIX copiado!' : 'Copiar PIX Copia e Cola'}
                  >
                    {copiedPayload ? (
                      <>
                        <IconCheck size={18} />
                        <span>Copiado!</span>
                      </>
                    ) : (
                      <>
                        <IconCopy size={18} />
                        <span>Copia e Cola</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* QR Code Real Escaneável */}
              <div className="donate__qr-container">
                <div
                  className="donate__qr-wrapper"
                  onClick={() => setShowQrModal(true)}
                  title="Clique para ampliar o QR Code PIX"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setShowQrModal(true)}
                >
                  <div className="donate__qr-img-placeholder">
                    <img src="/pix_qr.png" alt="QR Code PIX Vulkaris Robotics" className="donate__qr-real-img" />
                    <div className="donate__qr-badge">
                      <IconPix size={14} />
                      <span>PIX QR</span>
                    </div>
                  </div>
                  <span className="donate__qr-hint">
                    <IconQr size={16} /> Clique para ampliar o QR Code
                  </span>
                </div>
              </div>

            </div>

            {/* Coluna 2: Doação de Materiais e Apoio Institucional */}
            <div className="donate__materials-panel">
              <div className="donate__materials-header">
                <div className="donate__materials-icon">
                  <IconGift size={26} />
                </div>
                <div>
                  <h3 className="donate__materials-title">Doação de Materiais & Peças</h3>
                  <p className="donate__materials-sub">Tem componentes parados no seu laboratório ou empresa?</p>
                </div>
              </div>

              <div className="donate__materials-list">
                <div className="donate__material-item">
                  <span className="donate__material-bullet">⚡</span>
                  <div>
                    <strong>Placas & Eletrônica:</strong> Arduino, ESP32, Raspberry Pi, drivers L298N/BTS7960, sensores diversos.
                  </div>
                </div>
                <div className="donate__material-item">
                  <span className="donate__material-bullet">⚙️</span>
                  <div>
                    <strong>Mecânica & Motores:</strong> Motores DC, servomotores, rodas de robótica, rolamentos, parafusos M3/M4.
                  </div>
                </div>
                <div className="donate__material-item">
                  <span className="donate__material-bullet">🧵</span>
                  <div>
                    <strong>Insumos 3D:</strong> Filamentos PLA, PETG, ABS ou TPU (1.75mm) para impressão de estruturas.
                  </div>
                </div>
                <div className="donate__material-item">
                  <span className="donate__material-bullet">🛠️</span>
                  <div>
                    <strong>Ferramentas de Bancada:</strong> Ferro de soldar, multímetro, alicates, organizadores de componentes.
                  </div>
                </div>
              </div>

              <div className="donate__materials-action">
                <p className="donate__materials-cta-text">
                  Quer apoiar com material ou patrocínio institucional?
                </p>
                <a
                  href="mailto:vulkarisroboticsteam@gmail.com?subject=Doa%C3%A7%C3%A3o%20de%20Materiais%20-%20Vulkaris"
                  className="donate__cta-btn"
                >
                  <IconMail size={18} />
                  <span>Falar sobre Doação de Peças</span>
                </a>
              </div>
            </div>

          </div>

          <div className="donate__footer-note">
            <IconHeart size={16} style={{ color: '#FF6B1A' }} />
            <span>Toda contribuição, independentemente do valor, impulsiona nossos estudantes e projetos. Muito obrigado!</span>
          </div>

        </div>

      </div>

      {/* Modal do QR Code Ampliado */}
      {showQrModal && (
        <div className="donate__modal-overlay" onClick={() => setShowQrModal(false)} role="dialog" aria-modal="true">
          <div className="donate__modal-card glass-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="donate__modal-close"
              onClick={() => setShowQrModal(false)}
              aria-label="Fechar modal"
            >
              <IconX size={20} />
            </button>
            <div className="donate__modal-header">
              <IconPix size={32} style={{ color: '#32BCAD' }} />
              <h3>Doação via QR Code PIX</h3>
              <p>Escaneie pelo aplicativo do seu banco</p>
            </div>

            <div className="donate__modal-qr">
              <div className="donate__modal-qr-box">
                <img src="/pix_qr.png" alt="QR Code PIX Escaneável" className="donate__modal-qr-img" />
              </div>
              <p className="donate__modal-key">Chave: <strong>{pixKey}</strong></p>
            </div>

            <div className="donate__modal-actions" style={{ gap: '10px', flexWrap: 'wrap' }}>
              <button onClick={copyPixKey} className="donate__copy-btn">
                {copiedKey ? <IconCheck size={18} /> : <IconCopy size={18} />}
                <span>{copiedKey ? 'Chave Copiada!' : 'Copiar E-mail'}</span>
              </button>
              <button onClick={copyPixPayload} className="donate__copy-btn donate__copy-btn--secondary">
                {copiedPayload ? <IconCheck size={18} /> : <IconCopy size={18} />}
                <span>{copiedPayload ? 'Código Copiado!' : 'Copiar Copia e Cola'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
