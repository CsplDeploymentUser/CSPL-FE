import Footer from "@/Components/ServerSideComponents/FooterComponents/FooterComponent";
import ContactForm from "@/Components/ServerSideComponents/HomePageComponents/ContactUsComponent";
import SelectiveClients from "@/Components/ServerSideComponents/HomePageComponents/SelectedClientComponent";
import Testimonials from "@/Components/ServerSideComponents/HomePageComponents/Testimonials";
import WhatsNewSection from "@/Components/ServerSideComponents/HomePageComponents/WhataNewComponent";
import { Image } from "lucide-react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoCallOutline, IoMailOpenOutline } from "react-icons/io5";


export default async function Home() {
  
  return (
   <div className="flex flex-col justify-center items-center gap-10">
    <SelectiveClients/>
    <ContactForm/>
    <WhatsNewSection/>
    <Testimonials/>
   </div>
  );
}
