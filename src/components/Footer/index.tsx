import { FooterBody, FooterContainer, FooterText } from './style';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBody>
        <FooterText>
          Todos los derechos reservados &copy; {new Date().getFullYear()}
        </FooterText>
      </FooterBody>
    </FooterContainer>
  );
};

export default Footer;
