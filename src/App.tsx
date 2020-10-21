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
import { AuthLoginCardComponent } from './pages/AuthPage/components/AuthLoginCard';
import { AuthRegisterCardComponent } from './pages/AuthPage/components/AuthRegisterCard';

const ROUTES: RouteProps[] = [
  {
    path: '/',
    render: () => (<Redirect to={`/headlines`} />),
    exact: true
  },
  {
    path: '/headlines',
    component: NewsPageContainer
  },
  {
    path: '/auth/login',
    render: () => (<AuthPageContainer> 
                    <AuthLoginCardComponent />
                  </AuthPageContainer>),
  },
  {
    path: '/auth/signup',
    render: () => (<AuthPageContainer> 
                    <AuthRegisterCardComponent />
                  </AuthPageContainer>),
  },
  {
    path: '*',
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
