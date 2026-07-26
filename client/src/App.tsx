import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useParams } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Attorney from "./pages/Attorney";
import PracticeAreas from "./pages/PracticeAreas";
import CriminalDefense from "./pages/CriminalDefense";
import PracticeAreaPage from "./pages/PracticeAreaPage";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import LocationPage from "./pages/LocationPage";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Sitemap from "./pages/Sitemap";

function PracticeAreaRoute() {
  const params = useParams<{ slug: string }>();
  return <PracticeAreaPage slug={params.slug} />;
}

function BlogPostRoute() {
  const params = useParams<{ slug: string }>();
  return <BlogPost slug={params.slug} />;
}

function LocationRoute() {
  const params = useParams<{ slug: string }>();
  const validSlugs = ["phoenix", "scottsdale", "mesa", "tempe"];
  if (validSlugs.includes(params.slug)) {
    return <LocationPage slug={params.slug} />;
  }
  return <NotFound />;
}

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/attorney" component={Attorney} />
        <Route path="/practice-areas" component={PracticeAreas} />
        <Route path="/criminal-defense" component={CriminalDefense} />
        <Route path="/criminal-defense/:slug" component={PracticeAreaRoute} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPostRoute} />
        <Route path="/contact" component={Contact} />
        <Route path="/disclaimer" component={Disclaimer} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/sitemap" component={Sitemap} />
        <Route path="/:slug" component={LocationRoute} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
