import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/view/Navbar";
import { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <HelmetProvider>
      <Suspense
        fallback={
          <span className="loading loading-ring loading-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"></span>
        }
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Suspense>
    </HelmetProvider>
  );
}
