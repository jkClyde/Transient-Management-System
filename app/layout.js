import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthProvider from "@/components/AuthProvider";
import Hero from "@/components/Hero";



export const metadata = {
  title: "Transient Management System",
  keywords: "Rental Property, Real Estate",
  description: "Find The Perfect Rental Propery",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={`antialiased`}>

          <div className="relative bg-[url('/images/bg-hero.png')] bg-cover bg-center bg-no-repeat">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10">
              <Navbar />
              <Hero />
            </div>
          </div>

          {children}
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
