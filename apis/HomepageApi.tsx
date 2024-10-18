import { apiCore } from "./APICore";

export const footerApi = async () => {
    const response = await apiCore("/api/homepage/footer/", {}, "POST");
    return response;
  };