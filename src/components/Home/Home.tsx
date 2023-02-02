import React from 'react';
import { useTheme } from 'styled-components';
// Components
import * as S from './Home.styles';
import { Text } from '../shared';

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <S.HomeView id="home">
      <p>
        <Text size="x-large">Hi,</Text>
        <br />

        <Text size="2x-large">I&apos;m </Text>
        <Text size="2x-large" weight="bold">
          Miguel Angel
        </Text>
        <br />

        <Text size="2x-large" weight="bold" color={theme.colors.main}>
          Software Engineer
          <br /> & Product Designer
        </Text>
      </p>
    </S.HomeView>
  );
};

export default Home;
