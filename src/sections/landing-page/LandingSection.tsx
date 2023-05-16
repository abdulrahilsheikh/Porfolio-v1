import { Samurai } from "../../components/samurai/Samurai";
import styles from "./LandingSection.module.scss";
type Props = {};

const AnimatedWind = () => {
  return (
    <div
      className={` absolute top-0 h-screen w-screen z-50 right-0 ${styles.svgContainer}`}
    >
      <svg
        width="442"
        height="342"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 442 342"
      >
        <path
          fill="none"
          stroke="#fff"
          d="M442 58c0 0-82-45-160-57-62-10-108 55-164 39C86 31 65 1 34 8 3 15 0 55 0 55"
        />

        <path
          id="svg_1"
          d="m442 75c0 0-65-39-120-33-110 8-214 83-259 82-33 0-55-18-52-45 3-21 27-37 53-34 21 2 36 18 34 35-2 14-17 24-34 22-13-1-23-11-21-22 1-9 11-15 22-14 9 1 15 7 14 14-1 6-7 10-14 9-5 0-9-5-9-9"
          stroke="#fff"
          fill="none"
        />

        <path
          id="svg_3"
          d="m442 101c0 0-38-23-124-25-85-2-132 21-136 39s4 27 13 31c7 3 16 0 18-6 2-5-1-12-6-14-5-2-10 0-12 4-1 4 0 8 4 9 3 1 6 0 8-3 1-2 0-5-3-6-2-1-4 0-5 2-1 1 0 3 2 4"
          stroke="#fff"
          fill="none"
        />

        <path
          id="svg_4"
          d="m442 165c0 0-103-62-131-52-28 10 23 43-3 59-26 16-144-4-144-4l-165-36"
          stroke="#fff"
          fill="none"
        />

        <path
          id="svg_5"
          d="m442 228c0 0-40-43-63-50-22-7-23 41-56 45-122 11-323-53-323-53"
          stroke="#fff"
          fill="none"
        />

        <path
          id="svg_6"
          d="m442 278c0 0-22-3-89-18-68-16-127 34-195 35-68 1-157-70-157-70"
          stroke="#fff"
          fill="none"
        />
      </svg>
    </div>
  );
};

const LandingSection = ({}: Props) => {
  return (
    <div className="flex items-center bg-[#fff3b0]">
      <div className="flex-1 flex flex-col items-center justify-center ">
        <AnimatedWind />
        <div className=" p-6 rounded-lg shadow-lg max-w-xl bg-[#fdfcdc] backdrop-blur-2xl">
          <h1 className="font-bold text-6xl text-[#4a4e69] w-fit">
            <span>Hi STRANGER</span>
            {/* <div className={styles.alphabetAnimation}>E</div> */}
            {/* <span>R ✋</span> */}
            <div className={styles.alphabetAnimation}>✋</div>
          </h1>
          <div className={"font-bold text-3xl mt-2 text-[#c9ada7]"}>
            My self Rahil Sheikh
          </div>
          <div className={"font-bold italic text-3xl mt-2 text-[#c9ada7]"}>
            Im a front-end developer. Specialized in{" "}
            <div
              data-underline-color={"#4a4e69"}
              className={styles.nameJumpAnimation}
            >
              React.Js
            </div>{" "}
            and <div className={styles.nameJumpAnimation}>Next.Js</div>
          </div>
          <div className={"font-bold italic text-3xl mt-2 text-[#c9ada7]"}>
            Currently working as a Associate Software Developer
          </div>
        </div>
      </div>
      <div
        className={
          "relative w-[50%] h-screen pt-10 flex items-start justify-center"
        }
      >
        <Samurai />
        <div className="w-[50%] rounded-full aspect-square bg-red-600"></div>
      </div>
    </div>
  );
};

export default LandingSection;
