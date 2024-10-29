import Banner from "@/components/Banner";
import CTA from "@/components/CTA";
import DeveloperSection from "@/components/DeveloperSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LogoSection from "@/components/LogoSection";
import ProductManagement from "@/components/ProductManagement";
import ProductTeam from "@/components/ProductTeam";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="bg-[#1f1f1f]">
        <Banner />
        {/* <LogoSection /> */}
        <ProductTeam />
      </div>
      <ProductManagement />
      <div className="bg-[#1f1f1f]">
        <DeveloperSection />
      </div>
      <CTA />
      <Footer />
    </div>
  );
}
