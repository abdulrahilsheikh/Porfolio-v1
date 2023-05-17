import { useRef, useState } from "react";
import { Controller, Scene } from "react-scrollmagic";
import japanGateImg from "../../assets/4250475.png";
import japanHomeImg from "../../assets/c4316f2a68f195d1b9c7b929e11cd108(1).png";
import samurai from "../../assets/the-last-samurai-minimal-5k-zz-1024x768.jpg";
import styles from "./JourneySection.module.scss";

type Props = {};

const JourneySection = ({}: Props) => {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const [unmountTitle, setUnmountTitle] = useState(false);
  return (
    <div
      className=" flex flex-col gap-4 p-4 pt-20 relative"
      ref={mainContainerRef}
    >
      {!unmountTitle && (
        <Controller>
          <div className="w-full absolute top-0 left-0 right-0 h-fit">
            <Scene
              duration={0}
              pin={{ pushFollowers: true }}
              triggerHook={0}
              offset={0}
            >
              {(data: any) => {
                return (
                  <div className="w-full">
                    <div
                      className={`transition-all ${
                        data > 0
                          ? "relative left-full right-0 -translate-x-full"
                          : "relative left-1/2 -translate-x-1/2"
                      }  font-bold text-6xl text-[#4a4e69] w-fit `}
                    >
                      <div
                        className={`text-red-400 ${styles.nameJumpAnimation}`}
                      >
                        .
                      </div>
                      /my-journey
                    </div>
                  </div>
                );
              }}
            </Scene>
          </div>
        </Controller>
      )}
      <div className="w-full flex-1 flex ">
        <div className={`w-[50%] h-fit   ${styles.timelineContainer}`}>
          <div className="bg-yellow-100 relative ">
            <img
              src={japanHomeImg}
              className={
                "absolute w-24 right-[1.2rem] top-0 translate-x-1/2 -translate-y-1/2"
              }
            />
            <div>
              <div className="max-w-full">
                <div className="font-bold underline underline-offset-2">
                  Origin
                </div>
              </div>
            </div>
          </div>
          <div className="bg-yellow-100 relative">
            <img
              src={japanGateImg}
              className={
                "absolute w-24 left-[1.2rem] top-8 -translate-x-1/2 translate-y-1/2"
              }
            />
            <div>
              <div></div>
            </div>
          </div>
          <div className="bg-yellow-100 relative">
            <img
              src={japanGateImg}
              className={
                "absolute w-24 right-[1.2rem] top-8 translate-x-1/2 translate-y-1/2"
              }
            />
            <div>
              <div></div>
            </div>
          </div>
          <div className="bg-yellow-100 relative">
            <img
              src={japanGateImg}
              className={
                "absolute w-24 left-[1.2rem] top-8 -translate-x-1/2 translate-y-1/2"
              }
            />
            <div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="relative w-[50%] ">
          <Controller>
            <div className={`h-full ${styles.scrollMagicDefault}`}>
              <Scene
                duration={600}
                pin={{ pushFollowers: false }}
                triggerHook={0}
                offset={-100}
              >
                {(data: any) => {
                  if (!unmountTitle && data == 1) {
                    setUnmountTitle(true);
                  }
                  if (unmountTitle && data < 1) {
                    setUnmountTitle(false);
                  }
                  return (
                    <div className={`${styles.mask1} w-full`}>
                      <img src={samurai} className="w-full" />
                    </div>
                  );
                }}
              </Scene>
            </div>
          </Controller>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;
