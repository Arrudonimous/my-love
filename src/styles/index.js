import styled, { keyframes } from 'styled-components';

// Estilo do fundo
export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  height: 100vh;
  width: 100vw;
  background: repeating-linear-gradient(
    45deg,
    #365d4a,
    #365d4a 80px,
    #ffffff 80px,
    #ffffff 120px
  );
`;

// Título da página
export const PageTitle = styled.h1`
  color: #254133;
  font-size: 3.5rem;
  font-weight: 700;
  text-align: start;

  @media (max-width: 768px) {
    font-size: 2.5rem; // Tamanho do título em telas menores
  }

  @media (max-width: 480px) {
    font-size: 1.8rem; // Tamanho do título em dispositivos móveis
  }
`;

// Container principal
export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  width: 80%; // Ajustado para ocupar mais espaço em telas pequenas
  max-width: 600px; // Largura máxima
  height: auto; // Ajuste automático de altura
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 20px; // Reduzido o padding
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 15px; // Padding em telas menores
  }

  @media (max-width: 480px) {
    padding: 10px; // Padding em dispositivos móveis
  }
`;

export const Footer = styled.div`
  width: 90%;
  padding: 20px;
  background-color: #365d4a;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    padding: 15px; // Ajuste de padding em telas menores
  }

  @media (max-width: 480px) {
    padding: 10px; // Ajuste de padding em dispositivos móveis
  }
`;

// Imagem do coração
export const HeartImage = styled.img`
  width: 11rem; // Imagem responsiva
  max-width: 11rem; // Largura máxima
  height: 11rem; // Mantém a proporção
  object-fit: cover;
  clip-path: path('M 100 30 Q 40 0 20 60 Q 0 100 100 150 Q 200 100 180 60 Q 160 0 100 30 Z');
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

// Container para textos
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Subtitle = styled.text`
  font-size: .7rem;
`

// Texto de tempo juntos
export const TogetherTimeText = styled.p`
  color: black;
  font-size: .8rem;
  text-align: center;
`;

// Título do container
export const ContainerTitle = styled.h2`
  color: #365d4a;
  font-size: 32px;

  @media (max-width: 768px) {
    font-size: 24px; // Tamanho em telas menores
  }

  @media (max-width: 480px) {
    font-size: 20px; // Tamanho em dispositivos móveis
  }
`;

// Container do contador

export const CountDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  gap: 8px;

  @media (min-width: 768px) {  /* Ajuste o valor conforme necessário */
    flex-direction: row;
  }
`;

// Número do contador
export const CountdownNumber = styled.span`
  color: #365d4a;
  font-weight: 700;
`;

// Título do rodapé
export const FooterTitle = styled.p`
  color: white;
  font-style: italic;
  font-size: 14px;
`;
