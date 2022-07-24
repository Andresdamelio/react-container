import React from 'react';

const Example = React.lazy(() => import('movies/Example'));

const App = () => {
  return (
    <div>
      Container App
      <React.Suspense fallback={'Cargando'}>
        <Example />
      </React.Suspense>
    </div>
  );
};

export default App;
