
import { Roboto } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/page";
import { Toaster } from "react-hot-toast";
import FloatingButtons from "@/components/FloatingButtons/FloatingButtons";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Ahsanul Digital | Advanced Digital Marketer & Shopify Expert",
  description: "Advanced Digital Marketer specializing in Shopify store growth, Facebook Ads, SEO, and conversion optimization. Check out my skills and services to grow your brand online.",
  icons: {
    // icon: "/assets/ahsanuldigital-logo.png",
    icon: "/assets/ahsanuldmlogo1.png",
  },
};

// className="min-h-full flex flex-col">
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={roboto.className} suppressHydrationWarning>
        <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
        <Navbar></Navbar>
        <main>
          {children}
        </main>
        <Footer></Footer>
        <FloatingButtons />
      </body>
    </html>
  );
}
