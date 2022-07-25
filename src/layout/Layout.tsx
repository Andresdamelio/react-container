import React from 'react';

import { LayoutContainer, Main } from './style';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

const Layout = ({ children }: Props) => {
  return (
    <LayoutContainer>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
