import BannerSlider from "@/Components/ClientSideComponents/BannerComponents/BannerSlider";
import AboutUsComponent from "@/Components/ServerSideComponents/HomePageComponents/AboutUsComponent";
import AchievementsSection from "@/Components/ServerSideComponents/HomePageComponents/AchievementsSection";
import ContactForm from "@/Components/ServerSideComponents/HomePageComponents/ContactUsComponent";
import SelectiveClients from "@/Components/ServerSideComponents/HomePageComponents/SelectedClientComponent";
import Testimonials from "@/Components/ServerSideComponents/HomePageComponents/Testimonials";
import WhatsNewSection from "@/Components/ServerSideComponents/HomePageComponents/WhataNewComponent";
import TechnologiesStackComponent from "@/Components/ServerSideComponents/HomePageComponents/TechnologiesStackComponent";
import WorkProcess from "@/Components/ServerSideComponents/HomePageComponents/WorkProcessComponent";
import SelectedWorkComponent from "@/Components/ServerSideComponents/HomePageComponents/SelectedWorkComponent";

export default async function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 lg:mt-[100px] mt-[70px]">
      <BannerSlider />
      <AboutUsComponent />
      <TechnologiesStackComponent />
      <WorkProcess />
      <SelectedWorkComponent />
      <AchievementsSection />
      <SelectiveClients />
      <ContactForm />
      <WhatsNewSection />
      <Testimonials />
    </div>
  );
}
