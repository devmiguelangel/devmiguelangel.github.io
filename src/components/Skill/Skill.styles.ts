import styled from 'styled-components';
// Styles
import { devices } from '../styles/devices';

export const View = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 50px;
`;

export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${devices.tablet} {
    width: 90%;
  }

  @media ${devices.laptop} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    gap: 10px 10px;
    width: 100%;
  }
`;

export const SkillView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  padding: 20px 10px;
  background-color: ${({ theme }) => (theme.mode === 'light' ? '#f4f4f9' : 'rgba(54, 66, 89, 0.2)')};
  border-radius: 5px;
  margin-bottom: 10px;
  box-sizing: border-box;

  &:last-child {
    margin-bottom: 0;
  }

  @media ${devices.laptop} {
    flex: 0 0 300px;
    width: fit-content;
    margin-bottom: 0;
  }
`;

export const SkillBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 30px 40px;
  width: 100%;
  margin-top: 15px;
  font-size: 3.75rem;
  color: ${({ theme }) => (theme.mode === 'light' ? theme.colors.mainSecondary : theme.colors.whiteSecondary)};

  @media ${devices.laptop} {
    gap: 30px 20px;
    font-size: 3.5rem;
  }

  @media ${devices.laptopL} {
    gap: 30px 40px;
    font-size: 3.75rem;
  }
`;
