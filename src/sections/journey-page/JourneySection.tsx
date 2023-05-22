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
			className=" flex flex-col gap-4 p-4 border-t-[1px]  md:pt-20 relative"
			ref={mainContainerRef}>
			<div
				className={`md:hidden text-center font-bold text-3xl md:text-6xl text-[#4a4e69] w-full `}>
				<div className={`text-red-400 ${styles.nameJumpAnimation}`}>
					.
				</div>
				/my-journey
			</div>
			{!unmountTitle && (
				<Controller>
					<div className="hidden md:block w-full absolute top-0 left-0 right-0 h-fit">
						<Scene
							duration={0}
							pin={{ pushFollowers: true }}
							triggerHook={0}
							offset={0}>
							{(data: any) => {
								return (
									<div className="w-full">
										<div
											className={`transition-all ${
												data > 0
													? "relative left-full right-0 -translate-x-full"
													: "relative left-1/2 -translate-x-1/2"
											}  font-bold text-6xl text-[#4a4e69] w-fit `}>
											<div
												className={`text-red-400 ${styles.nameJumpAnimation}`}>
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
				<div
					className={`md:w-[50%] h-fit   ${styles.timelineContainer}`}>
					<div className="bg-yellow-100 relative ">
						<img
							src={japanHomeImg}
							className={
								"absolute w-24 right-[1.2rem] top-0 translate-x-1/2 -translate-y-1/2"
							}
						/>
						<div className={styles.borderConatainer}>
							<div className={styles.contentContainer}>
								<div className="py-4 pr-2">
									<div className=" font-bold underline underline-offset-2">
										High School
									</div>
									<div>2015-2016</div>
									<p>
										Completed my high school from SFS High
										School, Nagpur Maharashtra. It was the
										first time when i encounter coding bt
										didnt really emphasize on learning it.
									</p>
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
						<div className={styles.borderConatainer}>
							<div className={styles.contentContainer}>
								<div className="py-4 pl-12">
									<div className=" font-bold underline underline-offset-2">
										Dipoma in Mechanical Engineering
									</div>
									<div>2016-2019</div>
									<p>
										Completed my Diploma in Mechanical
										Engineering Anjuman Polytechnic, Nagpur
										Maharashtra. It was the Second time when
										i encounter coding but this time i fell
										in love coding. We had made a CNC
										Embroidery Machine for our final year
										project. And it took a lot of coding.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-yellow-100 relative">
						<img
							src={japanGateImg}
							className={
								"absolute w-24 right-[1.2rem] top-8 translate-x-1/2 translate-y-1/2"
							}
						/>
						<div className={styles.borderConatainer}>
							<div className={styles.contentContainer}>
								<div className="py-4 pr-2">
									<div className=" font-bold underline underline-offset-2">
										Bachelor in Mechanical Engineering
									</div>
									<div>2019-2021</div>
									<p>
										Completed my Bachelor in Mechanical
										Engineering from Abha Gaikwad Patil
										College of Engineering, Nagpur
										Maharashtra. At this time i was playing
										a lot with Arduino UNO and Arduino Mega.
										Which requires programming in C/C++. Ive
										made may stuffs like a Mini Drum Machine
										using Arduino UNO, a CNC Router, a CNC
										Plasma Cutter etc.
									</p>
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
						<div className={styles.borderConatainer}>
							<div className={styles.contentContainer}>
								<div className="py-4 pl-12">
									<div className=" font-bold underline underline-offset-2">
										First Tech Job - Coditas
									</div>
									<div>2021-Present</div>
									<p>
										Altough i am a Mechanical Enginner by
										heart but my love for coding and skills
										helped me to get into Tech as a
										front-end developer in React.JS and
										Next.JS
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="relative w-[50%] hidden md:block ">
					<Controller>
						<div className={`h-full ${styles.scrollMagicDefault}`}>
							<Scene
								duration={600}
								pin={{ pushFollowers: false }}
								triggerHook={0}
								offset={-100}>
								{(data: any) => {
									if (!unmountTitle && data == 1) {
										setUnmountTitle(true);
									}
									if (unmountTitle && data < 1) {
										setUnmountTitle(false);
									}
									return (
										<div
											className={`${styles.mask1} w-full`}>
											<img
												src={samurai}
												className="w-full"
											/>
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
