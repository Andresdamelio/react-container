import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from './layout';
import { Container, List } from './style';
import Loader from './components/Loader';

const Movies = React.lazy(() => import('movies/Movies'));
const ShowList = React.lazy(() => import('tv/ShowList'));

const App = () => {
  const [type, setType] = useState<'movies' | 'tv' | undefined>(undefined);
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <Container>
        <Container.Group>
          <Container.Button
            mright
            active={type === 'movies'}
            data-testid='button-movies'
            onClick={() => setType('movies')}
          >
            {t('movies')}
          </Container.Button>

          <Container.Button
            active={type === 'tv'}
            data-testid='button-tv'
            onClick={() => setType('tv')}
          >
            {t('tv')}
          </Container.Button>
        </Container.Group>
        {type !== undefined ? (
          <Container.Button
            data-testid='button-clean'
            onClick={() => setType(undefined)}
          >
            {t('clean')}
          </Container.Button>
        ) : null}
      </Container>

      <React.Suspense fallback={<Loader />}>
        <List>
          {type !== undefined && (
            <List.Title data-testid='list-title'>
              {type === 'movies' ? t('moviesTitle') : t('tvTitles')}
            </List.Title>
          )}

          <List.Body>
            {type === 'tv' ? <ShowList lang={i18n.language} /> : null}
            {type === 'movies' ? <Movies lang={i18n.language} /> : null}
          </List.Body>
        </List>
      </React.Suspense>
    </Layout>
  );
};

export default App;
