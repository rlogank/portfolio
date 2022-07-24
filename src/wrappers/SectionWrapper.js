import NextSectionButton from "../components/NextSectionButton";
import SectionHeader from "../components/SectionHeader";

const SectionWrapper = (props) => {
  return (
    <section id={props.id} className="w-full border-b dark:border-borderDark px-5">
      <div className="relative mx-auto flex w-full max-w-screen-lg flex-col gap-10 py-20 sm:transition-all lg:justify-center">
        <SectionHeader
          title={props.title}
          body={props.body}
          span={props.span}
        />
        {props.children}
        {props.next || <NextSectionButton nextId={props.nextId} id={props.id} />}
      </div>
    </section>
  );
};

export default SectionWrapper;
