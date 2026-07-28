import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../app/context/themecontext";
import Header from "../app/components/header";
import Navbar from "../app/components/navbar";
import Footer from "../app/components/footer";
import "@/app/globals.css";

// Configure readable, accessible system typography layout rules
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RSS to LMS Portal - Assessment 1",
  description: "Usability-focused frontend prototype for RSS Server and LMS application integration.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex min-h-screen flex-col antialiased transition-colors duration-300`}>
        {/* Global Application Configuration State Provider */}
        <ThemeProvider>
          {/* Assessment Heading Component Area */}
          <Header />
          
          {/* Responsive Navigation Component Block */}
          <Navbar />
          
          {/* Fluid Core Viewport Wrapper with Accessible Landmark Tracking */}
          <main 
            id="main-content"
            className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 lg:px-8"
            role="main"
          >
            {children}
          </main>
          
          {/* Student Identity Metadata Wrapper */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
