import { useTranslation } from 'react-i18next';

import {
  HeaderBody,
  HeaderContainer,
  LanguageSelector,
  Title,
  BrandContainer
} from './style';

const Header = () => {
  const { i18n, t } = useTranslation();

  return (
    <HeaderContainer>
      <HeaderBody>
        <BrandContainer>
          <img
            src={require('../../assets/img/logo-n5.svg').default}
            alt='logo'
          />
          <Title>{t('title')}</Title>
        </BrandContainer>
        <LanguageSelector
          value={i18n.language}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          <option value='es'>🇪🇸 {t('es')}</option>
          <option value='en'>🇺🇸 {t('en')}</option>
        </LanguageSelector>
      </HeaderBody>
    </HeaderContainer>
  );
};

export default Header;
