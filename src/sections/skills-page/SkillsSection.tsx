import { Sword } from "../../components/sword/Sword";
import styles from "./SkillsSection.module.scss";
import CSS from "../../assets/images/css.png";
import FIREBASE from "../../assets/images/firebase.png";
import GITLAB from "../../assets/images/gitlab.png";
import JS from "../../assets/images/javascript.png";
import HTML from "../../assets/images/html5.png";
import TS from "../../assets/images/typescript.png";
import MONGO from "../../assets/images/mongodb.png";
import NEXTJS from "../../assets/images/nextjs.png";
import NODE from "../../assets/images/node-js.png";
import REACT from "../../assets/images/react.png";
import SASS from "../../assets/images/sass.png";
import TAILWIND from "../../assets/images/tailwind.png";
import { Controller, Scene } from "react-scrollmagic";
import svg from "../../assets/images/ninjaStart.svg";
import svgYellow from "../../assets/images/ninjaStartYellow.svg";
type Props = {};

const SkillCard = ({ img, title }: any) => {
	return (
		<div className={`h-48 w-36  rounded  group`}>
			<div className="h-[33%] bg-[#fdfcdc] flex items-end justify-center  overflow-hidden relative group-hover:translate-x-2 transition-all rounded-t-md  shadow ">
				<img src={img} className="h-20 relative translate-y-1/2" />
			</div>
			<div className="h-[34%] bg-[#fdfcdc] flex items-start justify-center overflow-hidden relative group-hover:-translate-x-2 transition-all   shadow ">
				<img src={img} className="h-20 relative -translate-y-1/2" />
			</div>
			<div className="h-[33%] bg-[#fdfcdc] flex  flex-col gap-2 w-full items-center justify-center overflow-hidden relative group-hover:translate-x-2 transition-all rounded-b-md shadow ">
				<div className="font-bold">{title}</div>
				<div className={`flex gap-1`}>
					<img src={svgYellow} className="h-4" />
					<img src={svgYellow} className="h-4" />
					<img src={svgYellow} className="h-4" />
					<img src={svg} className="h-4" />
					<img src={svg} className="h-4" />
				</div>
			</div>
		</div>
	);
};

const SkillsSection = ({}: Props) => {
	return (
		<div className="min-h-screen bg-[#fff3b0] ">
			<div
				className={` text-center font-bold text-6xl text-[#4a4e69] w-full pb-10`}>
				<div className={`text-red-400 ${styles.nameJumpAnimation}`}>
					.
				</div>
				/my-skills
			</div>
			<div className={`flex gap-4 ${styles.fontSection}`}>
				<div className={`w-1/2 `}>
					<div
						className={`w-full text-center text-[#4a4e69]  text-3xl`}>
						MY CODING ARSENAL
					</div>
					<div
						className={`w-full  flex items-center gap-6 justify-around py-8 pl-10 pr-4  flex-wrap`}>
						<SkillCard img={TAILWIND} title={"Tailwind CSS"} />
						<SkillCard img={SASS} title={"SCSS"} />
						<SkillCard img={REACT} title={"React.Js"} />
						<SkillCard img={NODE} title={"Node.JS"} />
						<SkillCard img={CSS} title={"Css"} />
						<SkillCard img={HTML} title={"Html-5"} />
						<SkillCard img={JS} title={"Javascript"} />
						<SkillCard img={TS} title={"Typescript"} />
						<SkillCard img={GITLAB} title={"Gitlab"} />
						<SkillCard img={FIREBASE} title={"Firbase"} />
						<SkillCard img={MONGO} title={"Mongodb"} />
						<SkillCard img={NEXTJS} title={"Next.Js"} />
					</div>
				</div>
				<div className={"relative w-[50%] h-screen pt-10 "}>
					<Controller>
						<div
							className={`w-full h-full ${styles.scrollMagicDefault}`}>
							<Scene
								duration={500}
								pin={{ pushFollowers: false }}
								triggerHook={0}
								offset={-100}>
								<div
									className={` w-[48vw_!important] flex items-start justify-center h-screen`}>
									<Sword />
									<div className="w-[50%] rounded-full aspect-square bg-red-600"></div>
								</div>
							</Scene>
						</div>
					</Controller>
				</div>
			</div>
		</div>
	);
};

export default SkillsSection;
