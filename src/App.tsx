import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Header } from './components/ui/Header';
import { Footer } from './components/ui/Footer';
import { AppRoutes } from './router/AppRoutes';
import { PageTransitionWrapper } from './components/ui/PageTransitionWrapper';

export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <PageTransitionWrapper>
        <AppRoutes />
      </PageTransitionWrapper>
      <Footer />
    </Router>
  );
};

export default App;
