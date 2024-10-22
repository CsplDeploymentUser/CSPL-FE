import { apiCore } from "./APICoreGet";
import { apiCores } from "./APICorePost";





export const HeaderApi = async () => {
  const response = await apiCore("/api/header", "GET");
  return response;
};
export const BannerApi = async () => {
  const response = await apiCore("/api/banner", "GET");
  return response;
};



export const AchivmentsApi = async () => {
  const response = await apiCore("/api/achivment", "GET");
  return response;
};
export const OurPartnarsApi = async () => {
  const response = await apiCore("/api/ourpartner", "GET");
  return response;
};


export const TestimonialsApi = async () => {
  const response = await apiCore("/api/testimonials", "GET");
  return response;
};


export const ContactUsFormApi = async (name: string, phone_number: string, email: string, service: string, brand_name: string, message: string) => {
  const response = await apiCores("/api/contactform/", { name: name, phone_number: phone_number, email: email, service: service, brand_name: brand_name, message: message }, "POST");
  return response;
};

export const NewsLatterpi = async (email: string) => {
  const response = await apiCores("/api/newsletter/", { email: email }, "POST");
  return response;
};