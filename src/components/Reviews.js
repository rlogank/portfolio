import { FaStar } from "react-icons/fa";
import SectionWrapper from "../wrappers/SectionWrapper";
import NextSectionButton from "./NextSectionButton";
import SectionHeader from "./SectionHeader";

const Reviews = () => {
  const reviewData = [
    {
      body: "Logan is a hard working and dedicated individual I hired to create a front end interface.  Being a coder myself I can  tell that Logan's revisions and initial commits are of high quality and well thought-out. Will hire again.",
      name: "Teddy M.",
      details: "Backend Developer, Private Client",
    },

    {
      body: `Logan was very helpful, patient and tried every route to fix my
      website issue. He successfully fixed the problem with me on the phone, and
      with his guidance I was able to see and learn from him. Would hire
      him again and recommend him.`,
      name: "Raymond K.",
      details: "Web Developer, Upwork Client",
    },
    {
      body: `I hired Logan to give my website a "facelift." He came back with a beautiful and clean fully new design that looked better than all of the other 10 designs that I was evaluating at the time. And he implemented it in a day. Logan's skills are impressive, and I would highly recommend him!`,
      name: "Michael K.",
      details: "Web Developer, Hollowverse.com",
    },
  ];

  return (
    <div className="bg-gradient-to-tl from-blue-600 to-blue-500  text-white">
      <SectionWrapper
        id="reviews"
        nextId="contact"
        title="What my"
        span="clients are saying"
        body="I strive to perform the highest quality of work to ensure my clients' 100% satisfaction. These are verifiable testimonials that I have recieved."
      >
        <section
          data-aos="fade"
          className="mx-auto grid w-full max-w-screen-lg gap-5 sm:gap-5 lg:grid-cols-2"
        >
          {reviewData.map((r, i) => {
            return (
              <article key={i} data-aos="fade">
                <div className="mx-auto flex w-full rounded-[4px] bg-white p-5 text-neutral-600 shadow-md dark:border-[#111216] dark:bg-bgDarkest dark:text-light">
                  <div className="flex flex-col justify-center gap-2.5">
                    <div className="flex justify-between">
                      <div className="w-full">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{r.name}</h4>
                          <div className="ml-auto flex gap-1 self-center text-blue-500 dark:text-blue-400">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                          </div>
                        </div>
                        <h5 className="text-left text-xs text-neutral-500 dark:text-gray-300">
                          {r.details}
                        </h5>
                      </div>
                    </div>
                    <p className="text-left text-sm">{r.body}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </SectionWrapper>
    </div>
  );
};

export default Reviews;
