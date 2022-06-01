import { FaStar } from "react-icons/fa";

const Reviews = () => {
  const reviewData = [
    {
      body: `I hired Logan to give my website a "facelift." He came back with a beautiful and clean fully new design that looked better than all of the other 10 designs that I was evaluating at the time. And he implemented it in a day. Logan's skills are impressive, and I would highly recommend him!`,
      name: "Michael K.",
      details: "Web Developer, Private Client",
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
      body: "Logan is a hard working and dedicated individual I hired to create a front end interface.  Being a coder myself I can  tell that Logan's revisions and initial commits are of high quality and well thought-out. Will hire again.",
      name: "Teddy M.",
      details: "Backend Developer, Private Client",
    },
  ];

  return (
    <div className="mx-auto max-w-screen-lg py-10 px-2.5 sm:px-5 md:py-20 lg:py-40">
      <div className="mx-auto mb-10 flex max-w-screen-lg flex-col items-center">
        <div
          data-aos="fade"
          className="heading text-center text-4xl font-bold tracking-tight transition-all md:text-4xl lg:text-5xl"
        >
          Some testimonials
        </div>
        <div
          data-aos="fade"
          className="heading text-center text-4xl font-bold tracking-tight text-rose-500 transition-all dark:text-rose-400 md:text-4xl lg:text-5xl"
        >
          about my work
        </div>
        <div data-aos="fade" className="mt-2.5 max-w-[535px] text-center">
          I strive to perform high-quality work to ensure 100% satisfaction.
          These are real, verifiable testimonials that I have earned.
        </div>
      </div>
      <div data-aos="fade" className="mx-auto grid w-full gap-2.5 sm:gap-5">
        {reviewData.map((r) => {
          return (
            <div data-aos="fade">
              <button className="mx-auto flex w-full max-w-screen-sm cursor-pointer select-none rounded-[4px] border-l-4 border-rose-500 bg-white p-5 shadow-md transition-all lg:hover:scale-105 hover:shadow-lg lg:focus:!scale-100 focus:shadow-none active:shadow-none dark:border-rose-400 dark:bg-bgDark">
                <div className="flex flex-col justify-center gap-2.5">
                  <div className="flex justify-between">
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{r.name}</div>
                        <div className="ml-auto flex gap-1 self-center text-rose-500 dark:text-rose-400">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                      </div>
                      <div className="text-left text-xs text-neutral-500 dark:text-grayed">
                        {r.details}
                      </div>
                    </div>
                  </div>
                  <div className="text-left text-sm">{r.body}</div>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
