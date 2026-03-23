
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ProjectsPage from '@/pages/ProjectsPage';
import BookYourPlotPage from '@/pages/BookYourPlotPage';
import SpecialtyPage from '@/pages/SpecialtyPage';
import EnquiryPage from '@/pages/EnquiryPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Header rendered at the top of all pages */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/book-your-plot" element={<BookYourPlotPage />} />
        <Route path="/specialty" element={<SpecialtyPage />} />
        <Route path="/enquiry" element={<EnquiryPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
