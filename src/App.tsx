import React from 'react';
import './App.scss';

// Generics
import { RouteProps, Redirect } from 'react-router-dom';
import { RouterModule } from './core/components/Router/RouterModule';

// Components
import { NewsPageContainer } from './pages/NewsPage/NewsPageContainer';
import { AuthPageContainer } from './pages/AuthPage/AuthPageContainer';
import { FOFPageContainer } from './pages/FOFPage/FOFContainer';
import { AuthContextProvider } from './core/services/auth/store';
import { HeadlinesContextProvider } from './core/services/headlines/store';

const ROUTES: RouteProps[] = [
  {
    path: '/',
    render: () => (<Redirect to={`/headlines`} />),
    exact: true
  },
  {
    path: '/headlines',
    component: NewsPageContainer,
    exact: true
  },
  {
    path: '/auth',
    component: AuthPageContainer
  },
  {
    component: FOFPageContainer
  }
]

function App() {
  return (
    <AuthContextProvider>
      <HeadlinesContextProvider>
        <RouterModule routes={ROUTES} />
      </HeadlinesContextProvider>
    </AuthContextProvider>
  );
}

export default App;
