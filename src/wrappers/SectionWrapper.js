import NextSectionButton from "../elements/NextSectionButton";
import SectionHeader from "../elements/SectionHeader";

const SectionWrapper = (props) => {
  return (
    <section
      id={props.id}
      className="w-full border-b px-5 dark:border-borderDark"
    >
      <div className="relative mx-auto flex w-full max-w-screen-lg flex-col gap-10 py-20 sm:transition-all lg:justify-center">
        <SectionHeader
          title={props.title}
          body={props.body}
          span={props.span}
        />
        {props.children}
        {props.next || (
          <NextSectionButton
            nextId={props.nextId}
            id={props.id}
            white={props.white}
          />
        )}
      </div>
    </section>
  );
};

export default SectionWrapper;
