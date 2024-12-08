import Product from "@/components/Product";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Image from "next/image";
import Features2 from "@/components/Features2";
import Email from "@/components/Email";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
     <Hero/>
     <Features/>
     <Product/>
     <Features2/>
     <Email/>
    </main>
  );
}
