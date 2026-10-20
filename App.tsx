import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { ListingsPage } from './pages/ListingsPage';
import { ContractorDetailPage } from './pages/ContractorDetailPage';
import { ToolsMarketplacePage } from './pages/ToolsMarketplacePage';
import { ToolsCategoryPage } from './pages/ToolsCategoryPage';
import { GetFeaturedPage } from './pages/GetFeaturedPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-amber-400 selection:text-slate-950">
        <Navbar />
        <main className="flex-1">
          <Routes>
            {/* PAGE 1: Homepage */}
            <Route path="/" element={<HomePage />} />

            {/* PAGE 2: Listings */}
            <Route path="/contractors/:trade/:state/:city" element={<ListingsPage />} />
            <Route path="/contractors/:trade/:state" element={<ListingsPage />} />
            <Route path="/contractors/:trade" element={<ListingsPage />} />
            <Route path="/contractors" element={<Navigate to="/contractors/roofers/TX/Houston" replace />} />

            {/* PAGE 3: Individual Contractor */}
            <Route path="/contractor/:id" element={<ContractorDetailPage />} />

            {/* PAGE 4: Tools Marketplace */}
            <Route path="/tools" element={<ToolsMarketplacePage />} />

            {/* PAGE 5: Tools Category */}
            <Route path="/tools/:category" element={<ToolsCategoryPage />} />

            {/* PAGE 6: Get Featured */}
            <Route path="/get-featured" element={<GetFeaturedPage />} />

            {/* PAGE 7: Blog */}
            <Route path="/blog" element={<BlogPage />} />

            {/* PAGE 8: Blog Post */}
            <Route path="/blog/:slug" element={<BlogPostPage />} />

            {/* PAGE 9: About */}
            <Route path="/about" element={<AboutPage />} />

            {/* PAGE 10: Contact */}
            <Route path="/contact" element={<ContactPage />} />

            {/* PAGE 11: Privacy Policy */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

            {/* PAGE 12: Terms of Service */}
            <Route path="/terms" element={<TermsOfServicePage />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
