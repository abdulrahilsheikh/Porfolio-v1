import styles from "./SkillsSection.module.scss";
import { Controller, Scene } from "react-scrollmagic";
import CSS from "../../assets/images/css.png";
import FIREBASE from "../../assets/images/firebase.png";
import GITLAB from "../../assets/images/gitlab.png";
import HTML from "../../assets/images/html5.png";
import JS from "../../assets/images/javascript.png";
import MONGO from "../../assets/images/mongodb.png";
import NEXTJS from "../../assets/images/nextjs.png";
import svg from "../../assets/images/ninjaStart.svg";
import svgYellow from "../../assets/images/ninjaStartYellow.svg";
import NODE from "../../assets/images/node-js.png";
import REACT from "../../assets/images/react.png";
import SASS from "../../assets/images/sass.png";
import TAILWIND from "../../assets/images/tailwind.png";
import TS from "../../assets/images/typescript.png";
import { Sword } from "../../components/sword/Sword";
import { useState } from "react";
type Props = {};

const SkillCard = ({ img, title, rating }: any) => {
	return (
		<div className={`h-48 w-36  rounded  group `}>
			<div className="h-[33%] bg-[#fdfcdc] flex items-end justify-center  overflow-hidden relative group-hover:translate-x-2 transition-all rounded-t-md  shadow ">
				<img src={img} className="h-20 relative translate-y-1/2" />
			</div>
			<div className="h-[34%] bg-[#fdfcdc] flex items-start justify-center overflow-hidden relative group-hover:-translate-x-2 transition-all   shadow ">
				<img src={img} className="h-20 relative -translate-y-1/2" />
			</div>
			<div className="h-[33%] bg-[#fdfcdc] flex  flex-col gap-2 w-full items-center justify-center overflow-hidden relative group-hover:translate-x-2 transition-all rounded-b-md shadow ">
				<div className="font-bold">{title}</div>
				<div className={`flex gap-1`}>
					{"8"
						.repeat(5)
						.split("")
						.map((_: any, idx: number) => (
							<img
								src={idx + 1 <= rating ? svg : svgYellow}
								className="h-4"
							/>
						))}
				</div>
			</div>
		</div>
	);
};

const SkillsSection = ({}: Props) => {
	const [unmountTitle, setUnmountTitle] = useState(false);
	return (
		<div className={`relative min-h-screen bg-[#fff3b0] pt-4 md:pt-24 `}>
			<div className="w-full md:hidden flex justify-center">
				<div
					className={`transition-all  font-bold  text-3xl text-[#4a4e69] w-fit `}>
					<div className={`text-red-400 ${styles.nameJumpAnimation}`}>
						.
					</div>
					/my-skills
				</div>
			</div>
			{!unmountTitle && (
				<Controller>
					<div
						className={`hidden md:block absolute top-0 left-0 right-0 h-fit ${styles.scrollMagicRemovePadding}`}>
						<Scene
							duration={500}
							pin={{ pushFollowers: false }}
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
											/my-skills
										</div>
									</div>
								);
							}}
						</Scene>
					</div>
				</Controller>
			)}

			<div className={`flex gap-4 ${styles.fontSection}`}>
				<div className={`md:w-1/2 `}>
					<div
						className={`pt-4 md:pt-0 w-full text-center text-[#4a4e69]  text-2xl`}>
						MY CODING ARSENAL
					</div>
					<div
						className={`w-full  flex items-center gap-6 justify-around p-4 md:py-8 md:pl-10   flex-wrap`}>
						<SkillCard rating={4} img={HTML} title={"Html-5"} />
						<SkillCard rating={4} img={CSS} title={"Css"} />
						<SkillCard rating={5} img={JS} title={"Javascript"} />
						<SkillCard rating={4} img={TS} title={"Typescript"} />
						<SkillCard rating={5} img={REACT} title={"React.Js"} />
						<SkillCard rating={4} img={NEXTJS} title={"Next.Js"} />
						<SkillCard
							rating={3}
							img={TAILWIND}
							title={"Tailwind CSS"}
						/>
						<SkillCard rating={4} img={SASS} title={"SCSS"} />
						<SkillCard rating={4} img={NODE} title={"Node.JS"} />
						<SkillCard rating={4} img={GITLAB} title={"Gitlab"} />
						<SkillCard
							rating={3}
							img={FIREBASE}
							title={"Firbase"}
						/>
						<SkillCard rating={2} img={MONGO} title={"Mongodb"} />
					</div>
				</div>
				<div
					className={
						"hidden md:block  relative w-[50%] h-screen pt-10 "
					}>
					<Controller>
						<div
							className={` w-full h-full ${styles.scrollMagicDefault}`}>
							<Scene
								duration={500}
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
											className={` w-[48vw_!important] flex items-start justify-center h-screen`}>
											<Sword />
											<div className="w-[50%] rounded-full aspect-square bg-red-600"></div>
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

export default SkillsSection;
