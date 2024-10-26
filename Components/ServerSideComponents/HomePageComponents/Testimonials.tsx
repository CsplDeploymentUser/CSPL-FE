import { TestimonialsApi } from "@/apis/HomepageApi";
import TestimonialsCartCompanent from "./TestimonialsCartComponent";

const Testimonials = async () => {
  const response = await TestimonialsApi();
  return (
    <section className="max-w-7xl mx-auto py-6 flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-2 mb-12">
        <div className="border-b-[1px] w-[100px] border-black"></div>
        <h2 className="text-4xl font-bold text-center">
          {response?.heading?.title}
        </h2>
        <div className="border-b-[1px] w-[100px] border-black"></div>
      </div>
     <div className="">
     <TestimonialsCartCompanent response={response} />
     </div>
    </section>
  );
};

export default Testimonials;
