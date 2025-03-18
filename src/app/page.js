import Banner from "@/components/Banner";
import CTA from "@/components/CTA";
import DeveloperSection from "@/components/DeveloperSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LogoSection from "@/components/LogoSection";
import ProductManagement from "@/components/ProductManagement";
import ProductTeam from "@/components/ProductTeam";
import Stars from "@/assets/images/Stars.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black">
      <div className="absolute stars-container -z-2 overflow-hidden w-full">
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
        <Image src={Stars} alt="Stars background" />
      </div>

      <Header />
      <div className="bg-black">
        <Banner />
        {/* <LogoSection /> */}
        <ProductTeam />
      </div>
      <ProductManagement />
      <div className="bg-black">
        <DeveloperSection />
      </div>
      <CTA />
      <Footer />
    </div>
  );
}
