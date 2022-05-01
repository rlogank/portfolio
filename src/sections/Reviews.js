import { FaStar } from "react-icons/fa";
import client from "../images/not-raymond.jpg";
import client2 from "../images/not-joris.jpg";
import WrapperGray from "../wrappers/WrapperGray";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Reviews = () => {
  const reviewData = [
    {
      body: `Logan was very helpful, patient and tried every route to fix my
      website issue. He successfully fixed the problem with me on the phone, and
      with his guidance I was able to see and learn from him. Would hire
      him again and recommend him.`,
      name: "Raymond K.",
      details: "Web Developer, Upwork Client",
      image: client,
      id: 1,
    },
    {
      body: "Logan was well responsive and knowledgeable throughout the project. He exceeds expectations.",
      name: "Joris S.",
      details: "Real Estate Agent, Upwork Client",
      image: client2,
      id: 2,
    },
  ];

  return (
    <WrapperGray>
      <div className="mx-auto mb-10 flex flex-col justify-center gap-3 text-center lg:w-1/2">
        <div className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="mb-1 text-center text-base font-medium tracking-normal text-gray-400"
          >
            TESTIMONIALS
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            What <span className="text-blue-600"> my clients</span> say.
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="450"
          className="mx-auto w-5/6 pb-1.5 text-center text-lg"
        >
          I have recently started offering my services and acquiring clients. So
          far, so good.
        </div>
      </div>
      <div className="mx-auto flex w-full flex-col gap-5 lg:w-2/3 lg:gap-10">
        {reviewData.map((r) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-delay="550"
              className="mx-auto flex w-full max-w-[540px] gap-10 rounded-lg bg-white p-10 shadow-lg lg:max-w-full"
            >
              <img
              alt="portfolio"
                src={r.image}
                className="hidden aspect-square h-32 w-32 self-center rounded-full object-cover shadow-md lg:flex"
              />
              <div className="flex flex-col justify-center gap-5">
                <div className="flex justify-between">
                  <div className="flex w-full flex-col gap-5">
                    <img
                    alt="portfolio"
                      src={r.image}
                      className="flex aspect-square h-32 w-32 self-center rounded-full object-cover shadow-md lg:hidden"
                    />
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-medium">{r.name}</div>
                        <div className="ml-auto flex gap-1 self-center text-blue-600">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                      </div>
                      <div className="mt-0.5 text-xs text-neutral-500">
                        {r.details}
                      </div>
                    </div>
                  </div>
                </div>
                <div>{r.body}</div>
              </div>
            </div>
          );
        })}
      </div>
    </WrapperGray>
  );
};

export default Reviews;
