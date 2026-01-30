import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthProvider from "@/components/AuthProvider";
import LayoutContent from "@/components/LayoutContent";

export const metadata = {
  title: "Transient Management System",
  keywords: "Rental Property, Real Estate",
  description: "Find The Perfect Rental Property",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={`antialiased`}>
          <LayoutContent>{children}</LayoutContent>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}