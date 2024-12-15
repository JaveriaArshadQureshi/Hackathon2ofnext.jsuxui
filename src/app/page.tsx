import Product from "@/components/Product";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Features2 from "@/components/Features2";
import Email from "@/components/Email";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex  max-h-screen flex-col max-sm:max-w-sm">
     <Hero/>
     <Features/>
     <Product/>
     <Features2/>
     <Email/>
     <Footer/>
    </main>
  );
}
