import React from 'react';
import './App.scss';

// Generics
import { RouteProps } from 'react-router-dom';
import { RouterModule } from './core/components/Router/RouterModule';

// Components
import { NewsPageContainer } from './pages/NewsPage/NewsPageContainer';
import { AuthPageContainer } from './pages/AuthPage/AuthPageContainer';
import { FOFPageContainer } from './pages/FOFPage/FOFContainer';

const ROUTES: RouteProps[] = [
  {
    path: '/',
    component: NewsPageContainer,
    exact: true
  },
  {
    path: '/auth',
    component: AuthPageContainer
  },
  {
    path: '',
    component: FOFPageContainer
  }
]

function App() {
  return (
    <RouterModule routes={ROUTES} />
  );
}

export default App;
