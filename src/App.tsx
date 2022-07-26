import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from './layout';
import { Container } from './style';
import Loader from './components/Loader';

const Movies = React.lazy(() => import('movies/Movies'));
const ShowList = React.lazy(() => import('tv/ShowList'));

const App = () => {
  const [type, setType] = useState<'movies' | 'tv' | undefined>(undefined);
  const { i18n } = useTranslation();
  return (
    <Layout>
      <Container>
        <Container.Group>
          <Container.Button
            active={type === 'movies'}
            mright
            onClick={() => setType('movies')}
          >
            Listado de peliculas
          </Container.Button>

          <Container.Button
            active={type === 'tv'}
            onClick={() => setType('tv')}
          >
            Listado de shows de tv
          </Container.Button>
        </Container.Group>
        {type !== undefined ? (
          <Container.Button onClick={() => setType(undefined)}>
            Limpiar
          </Container.Button>
        ) : null}
      </Container>

      <React.Suspense fallback={<Loader />}>
        {type === 'movies' ? <Movies lang={i18n.language} /> : null}
        {type === 'tv' ? <ShowList lang={i18n.language} /> : null}
      </React.Suspense>
    </Layout>
  );
};

export default App;
