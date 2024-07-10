import About from "@/components/About";
import Cta from "@/components/Cta";
import Details from "@/components/Details";
import Footer from "@/components/Footer";
import Futuro from "@/components/Futuro";
import Grow from "@/components/Grow";
import Header2 from "@/components/Header2";
import Hero from "@/components/Hero";
import Landing from "@/components/Landing";
import Serve from "@/components/Serve";
import Tail from "@/components/Tail";
import Image from "next/image";

export default function Home() {
  return (
    <main >
    <div className="max-w-8xl"> 
    {/* <section className='snap-center'>
      <Header2 />
    </section> */}
 
    <section className='snap-center'>
        <Landing />
    </section>
  
    <section className='snap-center'>
        <Details />
    </section>
 
    <section className='snap-center'>
      <Futuro />
    </section>
  
    <section className='snap-center'>
      <Hero />
    </section>
    <section className='snap-center'>
        <Serve />
    </section>
  
    
    <section className='snap-center'>
      <Grow />
    </section>
    {/* <section className='snap-center'>
      <About />
    </section> */}
    <section className='snap-center'>
      <Tail />
    </section>
    <section className='snap-center'>
      <Cta />
    </section>
{/* 
    <section className='snap-center'>
      <Footer />
    </section> */}
    </div>
    
    </main>
  );
}
