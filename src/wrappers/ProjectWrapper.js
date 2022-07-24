import NextSectionButton from "../components/NextSectionButton";
import ProjectHeader from "../components/ProjectHeader";
import { motion } from "framer-motion";

const ProjectWrapper = (props) => {
  return (
    <motion.section
      initial={{ x: 2000 }}
      animate={{ x: 0 }}
      transition={{ stiffness: 0 }}
      id={props.id}
      className="w-full border-b dark:border-borderDark"
    >
      <div className="relative mx-auto flex w-full flex-col sm:transition-all lg:justify-center">
        <ProjectHeader
          title={props.title}
          body={props.body}
          span={props.span}
          arrows={props.arrows}
        />
        {props.children}
        {props.next || (
          <NextSectionButton nextId={props.nextId} id={props.id} />
        )}
      </div>
    </motion.section>
  );
};

export default ProjectWrapper;
