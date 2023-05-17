import styles from "./AboutSection.module.scss";
import japanHomeImg from "../../assets/c4316f2a68f195d1b9c7b929e11cd108(1).png";
import japanGateImg from "../../assets/4250475.png";
import samurai from "../../assets/the-last-samurai-minimal-5k-zz-1024x768.jpg";
type Props = {};

const AboutSection = ({}: Props) => {
	return (
		<div className=" flex flex-col gap-4 p-4">
			<div className=" m-auto font-bold text-6xl text-[#4a4e69] w-fit">
				<div className={`text-red-400 ${styles.nameJumpAnimation}`}>
					.
				</div>
				/about-me
			</div>
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
				<div className={`w-[50%] ${styles.mask1}`}>
					<img src={samurai} />
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
