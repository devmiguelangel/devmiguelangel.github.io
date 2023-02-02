import React from 'react';
import { useTheme } from 'styled-components';
import { useWindowSize } from '../../hooks';
// Components
import * as S from './Home.styles';
import { Text } from '../shared';
// Styles
import { sizes } from '../styles/devices';

const Home: React.FC = () => {
  const theme = useTheme();
  const { width } = useWindowSize();

  const tSize = width && width >= sizes.tablet ? '4x-large' : '2x-large';

  return (
    <S.HomeView id="home">
      <p>
        <Text size="x-large">Hi,</Text>
        <br />

        <Text size={tSize}>I&apos;m </Text>
        <Text size={tSize} weight="bold">
          Miguel Angel
        </Text>
        <br />

        <Text size={tSize} weight="bold" color={theme.colors.main}>
          Software Engineer
          <br /> & Product Designer
        </Text>
      </p>
    </S.HomeView>
  );
};

export default Home;
