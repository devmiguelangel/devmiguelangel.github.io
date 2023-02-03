import styled, { css } from 'styled-components';
import { devices } from '../styles/devices';

export const ContactView = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 95px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  @media ${devices.tablet} {
    width: 60%;
  }

  @media ${devices.laptop} {
    width: 40%;
  }
`;

const Field = css`
  display: block;
  width: 100%;
  margin-bottom: 20px;
  padding: 12px 10px;
  background-color: transparent;
  border: 0 none;
  border-bottom-width: thin;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.secondary};
  box-sizing: border-box;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.secondary};
  outline: none;

  @media ${devices.tablet} {
    font-size: 1.4rem;
  }

  @media ${devices.laptop} {
    font-size: 1.1rem;
  }
`;

export const Input = styled.input`
  ${Field}

  &:first-child {
    margin-top: 50px;
  }
`;

export const TextArea = styled.textarea`
  ${Field}
  height: 100px;
  resize: none;
`;

export const MailLink = styled.a`
  margin-top: 86px;
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 30px 0;

  @media ${devices.tablet} {
    justify-content: center;
  }
`;

export const Icon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  font-size: 2.25rem;
  color: inherit;
  text-decoration: none;

  @media ${devices.tablet} {
    margin-right: 50px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
