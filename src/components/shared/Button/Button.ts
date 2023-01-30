import styled, { css } from 'styled-components';

const Style = css`
  display: flex;
  padding: 14px 18px;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 10px;
  border: 0 none;
  gap: 10px;
  font-size: 1.3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;

export const Button = styled.button`
  ${Style}
`;

export const Link = styled.a`
  ${Style}
  text-decoration: none;
`;
