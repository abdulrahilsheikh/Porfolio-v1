import styles from "./Project.module.scss";

type Props = {};

const Project = ({}: Props) => {
  return (
    <div className="min-h-screen py-20">
      <div className={` text-center font-bold text-6xl text-[#4a4e69] w-full `}>
        <div className={`text-red-400 ${styles.nameJumpAnimation}`}>.</div>
        /my-projects
      </div>
    </div>
  );
};

export default Project;
