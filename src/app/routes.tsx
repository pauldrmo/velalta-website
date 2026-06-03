import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Product from "./pages/Product";
import HowItWorks from "./pages/HowItWorks";
import Security from "./pages/Security";
import ForRetailers from "./pages/ForRetailers";
import ForInvestors from "./pages/ForInvestors";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import Confidentialite from "./pages/Confidentialite";
import CGU from "./pages/CGU";
import RGPD from "./pages/RGPD";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "produit", Component: Product },
      { path: "comment-ca-marche", Component: HowItWorks },
      { path: "securite", Component: Security },
      { path: "pour-les-enseignes", Component: ForRetailers },
      { path: "pour-les-investisseurs", Component: ForInvestors },
      { path: "tarifs", Component: Pricing },
      { path: "faq", Component: FAQ },
      { path: "contact", Component: Contact },
      { path: "mentions-legales", Component: MentionsLegales },
      { path: "confidentialite", Component: Confidentialite },
      { path: "cgu", Component: CGU },
      { path: "rgpd", Component: RGPD },
      { path: "*", Component: NotFound },
    ],
  },
]);
