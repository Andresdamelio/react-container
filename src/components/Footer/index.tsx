import { FooterBody, FooterContainer, FooterText } from './style';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterBody>
        <FooterText>
          {t('rights')} &copy; {new Date().getFullYear()}
        </FooterText>
      </FooterBody>
    </FooterContainer>
  );
};

export default Footer;
