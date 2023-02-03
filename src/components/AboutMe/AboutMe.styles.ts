import styled from 'styled-components';
// Styles
import { devices } from '../styles/devices';

export const View = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding-top: 95px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${devices.laptop} {
    flex-direction: row;
    width: 80%;
  }
`;

export const Picture = styled.picture`
  display: block;
  min-width: 280px;
  width: 280px;
  height: 280px;
  margin: 40px 0;
  filter: drop-shadow(3px 4px 10px rgba(26, 32, 44, 0.4));

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
`;

export const IntroduceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;

  @media ${devices.laptop} {
    align-items: flex-start;
    margin-left: 50px;
  }
`;

export const Introduce = styled.p`
  text-align: center;

  @media ${devices.laptop} {
    text-align: left;
  }
`;
