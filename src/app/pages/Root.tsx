import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050A14]">
      <ScrollToTop />
      <Header />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
