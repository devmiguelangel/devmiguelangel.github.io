import styled from 'styled-components';
// Styles
import { devices } from '../styles/devices';

export const Nav = styled.nav`
  /* position: absolute; */
  display: flex;
  width: 100%;

  @media ${devices.tablet} {
    width: auto;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 100vh; */
  margin: 0;
  padding: 0;
  list-style: none;

  & > li {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media ${devices.tablet} {
    flex-direction: row;
    width: auto;

    & > li {
      margin-bottom: 0;
    }
  }
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 220px;
  padding: 11px 0;
  font-size: 2rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;

  @media ${devices.tablet} {
    min-width: 180px;
    font-size: 1.25rem;
    color: inherit;

    &:hover {
      color: ${({ theme }) => theme.colors.main};
    }
  }
`;
