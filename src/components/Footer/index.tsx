import { Footer } from './style';
import { useTranslation } from 'react-i18next';

const FooterPage = () => {
  const { t } = useTranslation();

  return (
    <Footer>
      <Footer.Body>
        <Footer.Text>
          {t('rights')} &copy; {new Date().getFullYear()}
        </Footer.Text>
      </Footer.Body>
    </Footer>
  );
};

export default FooterPage;
