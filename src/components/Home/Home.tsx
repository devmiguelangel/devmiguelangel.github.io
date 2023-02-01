import React from 'react';
import { useTheme } from 'styled-components';
// Components
import * as S from './Home.styles';
import Title from '../shared/Title';

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <S.HomeView id="home">
      <p>
        <Title>Hi,</Title>
        <br />

        <Title>I&apos;m </Title>
        <Title weight="bold">Miguel Angel</Title>

        <br />
        <Title weight="bold" color={theme.colors.main}>
          Software Engineer
          {/* <br /> & Product Designer */}
        </Title>
      </p>
    </S.HomeView>
  );
};

export default Home;
