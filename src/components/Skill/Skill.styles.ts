import styled from 'styled-components';

export const View = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 50px;
`;

export const SkillView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  padding: 20px 30px;
  background-color: ${({ theme }) => (theme.mode === 'light' ? '#f4f4f9' : 'rgba(54, 66, 89, 0.2)')};
  border-radius: 5px;
  margin-bottom: 10px;
  box-sizing: border-box;

  &:last-child {
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
`;
