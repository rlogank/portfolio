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
    <section className="mx-auto max-w-screen-lg py-10 px-2.5 sm:px-5 md:py-20 lg:py-40">
      <header className="mx-auto mb-10 flex max-w-screen-lg flex-col items-center">
        <h3
          data-aos="fade"
          className="heading text-center text-4xl font-bold tracking-tight sm:transition-all md:text-4xl lg:text-5xl"
        >
          Some testimonials
        </h3>
        <h3
          data-aos="fade"
          className="heading text-center text-4xl font-bold tracking-tight text-rose-600 sm:transition-all dark:text-rose-400 md:text-4xl lg:text-5xl"
        >
          about my work
        </h3>
        <p data-aos="fade" className="mt-2.5 max-w-[535px] text-center">
          I strive to perform high-quality work to ensure 100% satisfaction.
          These are real, verifiable testimonials that I have earned.
        </p>
      </header>
      <section data-aos="fade" className="mx-auto grid w-full gap-2.5 sm:gap-5">
        {reviewData.map((r) => {
          return (
            <article data-aos="fade">
              <button className="mx-auto flex w-full max-w-screen-sm cursor-pointer select-none rounded-[4px] border-l-4 border-rose-600 bg-white p-5 shadow-md sm:transition-all hover:shadow-lg active:shadow-none dark:border-rose-400 dark:bg-bgDark sm:active:scale-95">
                <div className="flex flex-col justify-center gap-2.5">
                  <div className="flex justify-between">
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{r.name}</h4>
                        <div className="ml-auto flex gap-1 self-center text-rose-600 dark:text-rose-400">
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
              </button>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default Reviews;
