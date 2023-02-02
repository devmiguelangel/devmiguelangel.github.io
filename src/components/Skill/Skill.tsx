import React from 'react';
import { useTheme } from 'styled-components';
// Components
import * as S from './Skill.styles';
import { Text } from '../shared';
// Styles
import 'devicon/devicon.min.css';

const Skill: React.FC = () => {
  const theme = useTheme();

  const colorTitleSkill = theme.mode === 'light' ? 'inherit' : theme.colors.mainSecondary;

  return (
    <S.View>
      <Text size="2x-large" weight="semibold" color={theme.colors.main}>
        Skills
      </Text>
      <br />

      <S.SkillView>
        <Text size="medium" weight="semibold" color={colorTitleSkill}>
          Software Development
        </Text>
        <S.SkillBox>
          <i className="devicon-javascript-plain"></i>
          <i className="devicon-react-original"></i>
          <i className="devicon-graphql-plain"></i>
          <i className="devicon-python-plain"></i>
          <i className="devicon-nodejs-plain"></i>
        </S.SkillBox>
      </S.SkillView>

      <S.SkillView>
        <Text size="medium" weight="semibold" color={colorTitleSkill}>
          Databases
        </Text>
        <S.SkillBox>
          <i className="devicon-mysql-plain"></i>
          <i className="devicon-postgresql-plain"></i>
          <i className="devicon-mongodb-plain"></i>
          <i className="devicon-apachekafka-original"></i>
        </S.SkillBox>
      </S.SkillView>

      <S.SkillView>
        <Text size="medium" weight="semibold" color={colorTitleSkill}>
          CI / CD
        </Text>
        <S.SkillBox>
          <i className="devicon-docker-plain"></i>
          <i className="devicon-github-original"></i>
          <i className="devicon-argocd-plain"></i>
          <i className="devicon-kubernetes-plain"></i>
          <i className="devicon-amazonwebservices-original"></i>
        </S.SkillBox>
      </S.SkillView>

      <S.SkillView>
        <Text size="medium" weight="semibold" color={colorTitleSkill}>
          Mobile
        </Text>
        <S.SkillBox>
          <i className="devicon-react-original"></i>
          <i className="devicon-swift-plain"></i>
        </S.SkillBox>
      </S.SkillView>
    </S.View>
  );
};

export default Skill;
