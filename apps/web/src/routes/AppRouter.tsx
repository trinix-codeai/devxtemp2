import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "../layouts/AppLayout";
import { AboutPage } from "../pages/AboutPage";
import { AuthPage } from "../pages/AuthPage";
import { BlogPage } from "../pages/BlogPage";
import { BlogPostPage } from "../pages/BlogPostPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { ContactPage } from "../pages/ContactPage";
import { DashboardPage } from "../pages/DashboardPage";
import { DestinationDetailPage } from "../pages/DestinationDetailPage";
import { DestinationsPage } from "../pages/DestinationsPage";
import { HomePage } from "../pages/HomePage";
import { PackageDetailPage } from "../pages/PackageDetailPage";
import { PackagesPage } from "../pages/PackagesPage";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />} path="/">
        <Route element={<HomePage />} index />
        <Route element={<DestinationsPage />} path="destinations" />
        <Route element={<DestinationDetailPage />} path="destinations/:slug" />
        <Route element={<PackagesPage />} path="packages" />
        <Route element={<PackageDetailPage />} path="packages/:slug" />
        <Route element={<BlogPage />} path="blog" />
        <Route element={<BlogPostPage />} path="blog/:slug" />
        <Route element={<AboutPage />} path="about" />
        <Route element={<ContactPage />} path="contact" />
        <Route element={<DashboardPage />} path="dashboard" />
        <Route element={<CheckoutPage />} path="checkout" />
        <Route element={<AuthPage />} path="auth" />
      </Route>
      <Route element={<Navigate replace to="/" />} path="*" />
    </Routes>
  );
}
