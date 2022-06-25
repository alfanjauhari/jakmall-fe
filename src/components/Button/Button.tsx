import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  block?: boolean;
};

export const Button = styled.button<ButtonProps>`
  padding: ${({ theme }) => theme.sizes.base} ${({ theme }) => theme.sizes.lg};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.orange};
  transition: opacity 1s ease;
  font-size: ${({ theme }) => theme.sizes.base};
  width: ${({ block = false }) => (block ? '100%' : 'auto')};

  &:hover {
    opacity: 0.8;
  }
`;
