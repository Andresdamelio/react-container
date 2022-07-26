import { useTranslation } from 'react-i18next';

import { Header } from './style';

const HeaderPage = () => {
  const { i18n, t } = useTranslation();

  return (
    <Header>
      <Header.Body>
        <Header.Brand>
          <Header.Image
            data-testid='header-image'
            src={require('../../assets/img/logo-n5.svg').default}
            alt='logo'
          />
          <Header.Title data-testid='header-title'>{t('title')}</Header.Title>
        </Header.Brand>
        <Header.Selector
          data-testid='header-selector'
          value={i18n.language}
          onChange={(e: React.MouseEvent<HTMLElement>) =>
            i18n.changeLanguage((e.target as any).value)
          }
        >
          <option value='es'>🇪🇸 {t('es')}</option>
          <option value='en'>🇺🇸 {t('en')}</option>
        </Header.Selector>
      </Header.Body>
    </Header>
  );
};

export default HeaderPage;
