import styles from "./AboutSection.module.scss";

type Props = {};

const AboutSection = ({}: Props) => {
  return (
    <div className=" flex flex-col gap-4 p-4">
      <div className=" m-auto font-bold text-6xl text-[#4a4e69] w-fit">
        <div className={`text-red-400 ${styles.nameJumpAnimation}`}>.</div>
        /about-me
      </div>
      <div className="w-full flex-1 ">
        <div
          className={`w-[50%] h-fit bg-yellow-100  ${styles.timelineContainer}`}
        >
          <div className="bg-yellow-100">
            <div>
              <div></div>
            </div>
          </div>
          <div className="bg-yellow-100">
            <div>
              <div></div>
            </div>
          </div>

          <div className="bg-yellow-100">
            <div>
              <div></div>
            </div>
          </div>
          <div className="bg-yellow-100">
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
