import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { HomePage } from '@/pages/home';
import { CoinsPage } from '@/pages/coins';
import { CoinDetailPage } from '@/pages/coin-detail';
import { ComparePage } from '@/pages/compare';
import { CompareDetailPage } from '@/pages/compare-detail';
import { CategoriesPage } from '@/pages/categories';
import { CategoryDetailPage } from '@/pages/category-detail';
import { InsightsPage } from '@/pages/insights';
import { InsightDetailPage } from '@/pages/insight-detail';
import { BlogPage } from '@/pages/blog';
import { BlogPostPage } from '@/pages/blog-post';
import { AboutPage } from '@/pages/about';
import { PrivacyPage } from '@/pages/privacy';
import { TermsPage } from '@/pages/terms';
import { ContactPage } from '@/pages/contact';
import { DisclaimerPage } from '@/pages/disclaimer';
import { EditorialPolicyPage } from '@/pages/editorial-policy';

const queryClient = new QueryClient();

function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-foreground">404</h1>
      <p className="text-muted-foreground">Page not found.</p>
      <a href="/" className="text-sm font-medium text-primary hover:underline">
        Go home →
      </a>
    </div>
  );
}

function Router() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/coins" component={CoinsPage} />
          <Route path="/coin/:id" component={CoinDetailPage} />
          <Route path="/compare" component={ComparePage} />
          <Route path="/compare/:slug" component={CompareDetailPage} />
          <Route path="/categories" component={CategoriesPage} />
          <Route path="/category/:id" component={CategoryDetailPage} />
          <Route path="/insights" component={InsightsPage} />
          <Route path="/insights/:slug" component={InsightDetailPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/blog/:slug" component={BlogPostPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/terms" component={TermsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/disclaimer" component={DisclaimerPage} />
          <Route path="/editorial-policy" component={EditorialPolicyPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <SiteFooter />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
