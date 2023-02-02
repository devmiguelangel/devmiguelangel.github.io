import React from 'react';
import { useTheme } from 'styled-components';
// Components
import * as S from './Contact.styles';
import { Text, Button } from '../shared';

const Contact: React.FC = () => {
  const theme = useTheme();

  return (
    <S.ContactView id="contact">
      <Text size="2x-large" weight="semibold" color={theme.colors.main}>
        Contact
      </Text>

      <S.Form action="#" name="contact">
        <S.Input type="text" name="name" placeholder="Your name" aria-label="name" />
        <S.Input type="email" name="email" placeholder="Your email" aria-label="email" />
        <S.Input type="text" name="subjects" placeholder="Subjects" aria-label="subjects" />
        <S.TextArea name="message" placeholder="Your message"></S.TextArea>

        <Button type="button" aria-label="send">
          Send message
        </Button>
      </S.Form>

      <S.MailLink href="mailto:me@miguelangeldev.com">
        <Text size="medium" weight="semibold">
          me@miguelangeldev.com
        </Text>
      </S.MailLink>

      <S.IconBox>
        <S.Icon href="https://github.com/devmiguelangel" target="_blank" rel="noreferrer">
          <i className="ri-github-fill"></i>
        </S.Icon>
        <S.Icon href="https://www.linkedin.com/in/miguelangeldev" target="_blank" rel="noreferrer">
          <i className="ri-linkedin-box-fill"></i>
        </S.Icon>
        <S.Icon href="mailto:me@miguelangeldev.com">
          <i className="ri-mail-fill"></i>
        </S.Icon>
      </S.IconBox>

      <Text>
        Powered by {` `}
        <a
          href="https://twitter.com/devmiguelangel"
          target="_blank"
          rel="noreferrer"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          @miguelangeldev
        </a>
      </Text>

      <br />
      <br />
    </S.ContactView>
  );
};

export default Contact;
