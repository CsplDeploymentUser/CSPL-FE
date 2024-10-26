import { TestimonialsApi } from "@/apis/HomepageApi";
import TestimonialsCartCompanent from "./TestimonialsCartComponent";

const Testimonials = async () => {
  const response = await TestimonialsApi();
  return (
    <section className="mx-auto py-12">
      <div className="flex justify-center items-center gap-2 mb-12">
        <div className="border-b-[1px] w-[100px] border-black"></div>
        <h2 className="text-4xl font-bold text-center">
          {response?.heading?.title}
        </h2>
        <div className="border-b-[1px] w-[100px] border-black"></div>
      </div>
      <TestimonialsCartCompanent response={response} />
    </section>
  );
};

export default Testimonials;
