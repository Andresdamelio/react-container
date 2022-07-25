import React from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from './layout';

import Loader from './components/Loader';
const Movies = React.lazy(() => import('movies/Movies'));

const App = () => {
  const { i18n } = useTranslation();
  return (
    <Layout>
      <React.Suspense fallback={<Loader />}>
        <Movies lang={i18n.language} />
      </React.Suspense>
    </Layout>
  );
};

export default App;
