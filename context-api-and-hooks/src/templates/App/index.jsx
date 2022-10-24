import React, { Suspense, useState } from 'react';
// import LazyComponent from './lazy';
// CODE-SPLITTING

const loadComponent = () => import('./lazy');
const LazyComponent = React.lazy(loadComponent);

export const App = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button onMouseOver={loadComponent} onClick={() => setShow((s) => !s)}>
        {show ? 'HIDE' : 'SHOW'}
      </button>
      <Suspense fallback={<p>Loading...</p>}>
        {show && <LazyComponent />}
      </Suspense>
    </div>
  ) 
};
