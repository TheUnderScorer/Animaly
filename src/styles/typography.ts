import styled from 'styled-components/native';
import { Text } from '@ui-kitten/components';

export interface AProps {
  variant?: 'light' | 'dark';
}

export const A = styled(Text)<AProps>`
  color: ${({ variant }) => (variant === 'light' ? '#0fc9e2' : 'blue')};
  text-decoration: underline;
`;
