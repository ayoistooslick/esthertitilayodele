import { useState, Suspense } from 'react';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { AnimatePresence } from 'framer-motion';

import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { AnimatedCursor } from './components/AnimatedCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { ThreeCanvas } from './components/ThreeCanvas';

import Home from './pages/Home';
import SalesPortfolio from './pages/SalesPortfolio';
import MarketingPortfolio from './pages/MarketingPortfolio';
import CV from './pages/CV';
import About from './pages/About';
import Contact from './pages/Contact';

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Switch location={location} key={location}>
        <Route path="/" component={Home} />
        <Route path="/sales" component={SalesPortfolio} />
        <Route path="/marketing" component={MarketingPortfolio} />
        <Route path="/cv" component={CV} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route>
          <div className="min-h-[80vh] flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-black text-primary mb-4">404</h1>
              <p className="text-muted-foreground">Page not found.</p>
            </div>
          </div>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

function AppInner() {
  const [loading, setLoading] = useState(true);
  const { isDark } = useTheme();

  return (
    <>
      <AnimatedCursor />
      <ScrollProgress />

      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen flex flex-col relative w-full overflow-hidden">
          {isDark && (
            <Suspense fallback={null}>
              <ThreeCanvas />
            </Suspense>
          )}

          <Navbar />

          <main className="flex-grow w-full z-10 relative">
            <Router />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <AppInner />
      </WouterRouter>
    </ThemeProvider>
  );
}

export default App;
