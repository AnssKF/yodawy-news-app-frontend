import React from 'react';
import './App.scss';

// Generics
import { RouteProps } from 'react-router-dom';
import { RouterModule } from './core/components/Router/RouterModule';

// Components
import { NewsPageContainer } from './pages/NewsPage/NewsPageContainer';
import { AuthPageContainer } from './pages/AuthPage/AuthPageContainer';
import { FOFPageContainer } from './pages/FOFPage/FOFContainer';
import { LayoutComponent } from './core/components/Layout/LayoutComponent';

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
    <LayoutComponent>
      <RouterModule routes={ROUTES} />
    </LayoutComponent>
  );
}

export default App;
