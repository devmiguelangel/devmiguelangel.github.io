import React from 'react';
import { useTheme } from 'styled-components';
// Components
import * as S from './AboutMe.styles';
import { Link, Text } from '../shared';

const AboutMe: React.FC = () => {
  const theme = useTheme();

  return (
    <S.View id="about">
      <Text size="2x-large" weight="semibold" color={theme.colors.main}>
        About me
      </Text>

      <S.Wrapper>
        <S.Picture>
          <img src="/images/photo.jpg" alt="my snapshot" />
        </S.Picture>

        <S.IntroduceBox>
          <S.Introduce>
            <Text size="medium" weight="light">
              Passionate Software Engineer & Product Designer for 8+ years, working with Python / JavaScript / ReactJS,
              new technology and sports enthusiast
            </Text>
          </S.Introduce>

          <Link href="/files/MiguelResume.pdf" target="_blank" style={{ marginTop: '40px' }}>
            Download CV
          </Link>
        </S.IntroduceBox>
      </S.Wrapper>
    </S.View>
  );
};

export default AboutMe;
