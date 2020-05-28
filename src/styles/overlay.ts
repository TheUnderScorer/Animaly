import styled from 'styled-components/native';

export interface BackgroundOverlayProps {
  overlay?: string;
}

export const BackgroundOverlay = styled.View<BackgroundOverlayProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, ${({ overlay = '0.3' }) => overlay});
  z-index: 0;
`;
