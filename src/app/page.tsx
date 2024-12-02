import {Navbar} from "@/components/navbar";
import Hero from "@/components/hero";
import {Banner} from "@/components/bnner";
import Logos from "@/components/logos";
import Services from "@/components/services";
import Cta from "@/components/cta";
import Form from "@/components/form";
import Feature from "@/components/feature";
import Testimonial from "@/components/testimonial";
import Logos2 from "@/components/logos2";
import Faq from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
    <Banner/>
    <Navbar />
    <Hero />
    <Logos />
    <Services />
    <Cta />
    <Form />
    <Feature />
    <Testimonial />
     <Logos2/>
     <Faq/>
     <Footer />
    </>
  );
}
