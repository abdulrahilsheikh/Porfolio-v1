import samurai2 from "../../assets/samurai2.jpg";
import CardContainer from "../../components/card-container/CardContainer";
import styles from "./Project.module.scss";
import * as ProjectList from "../../../public/projectsList.json";
import { useState } from "react";
type Props = {};

// const ProjectList = {
// 	projects: [
// 		{
// 			img: "../../../public/ReactAdminDashboard.png",
// 			title: "React Admin Dashboard",
// 			content: "This is a admin pannel made in React.Js and Tailwind CSS",
// 			tags: ["Tailwind CSS", "React.JS", "React Router Dom "],
// 		},
// 	],
// };

const Project = ({}: Props) => {
	const [topCard, setTopCard] = useState(ProjectList.projects[0]);
	const handleCardClick = (index: number) => {
		setTopCard(ProjectList.projects[index]);
	};
	return (
		<div className="min-h-screen py-8 md:py-20">
			<div
				className={` text-center font-bold text-3xl md:text-6xl text-[#4a4e69] w-full `}>
				<div className={`text-red-400 ${styles.nameJumpAnimation}`}>
					.
				</div>
				/my-projects
			</div>
			<div className={`w-full h-full flex  justify-center `}>
				<div className="hidden  md:w-1/2 md:flex flex-col items-center justify-center relative">
					<div
						className={`w-2/3 z-10 p-4   rounded flex flex-col  bg-white justify-center bg-opacity-60 gap-2 items-start ${styles.fadeIn}`}
						key={topCard.title}>
						<div className="font-bold">{topCard.title} </div>
						<div className="">{topCard.description}</div>

						<a
							href={topCard.linkToSite}
							target="_blank"
							type="button"
							className="self-start  py-2 px-4 flex justify-center items-center  bg-yellow-100 hover:bg-yellow-300 focus:bg-yellow-100 focus:ring-offset-yellow-200 text-[#4a4e69]  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
							<svg
								width="20"
								height="20"
								className="mr-2"
								fill="currentColor"
								viewBox="0 0 1792 1792"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"></path>
							</svg>
							Go to Site
						</a>
					</div>
					<div
						className={`${styles.mask1} -z-1 w-full absolute top-0 left-0 right-0 bottom-0`}>
						<img
							src={samurai2}
							className="w-full relative top-20 "
						/>
					</div>
				</div>
				<div className="w-full md:w-1/2 h-full m-0">
					<CardContainer limit={3} clickHandler={handleCardClick}>
						{ProjectList.projects.map((item) => (
							<div className="max-w-[15rem] md:max-w-xs rounded overflow-hidden  shadow-lg bg-white">
								<img
									className=" w-full md:h-44 object-contain border-b-[1px] md:border-b-0"
									src={`${
										import.meta.env.DEV
											? "../../../public/"
											: "../../../Portfolio-v1/"
									}${item.img}`}
									alt="Sunset in the mountains"
								/>
								<div className="px-6 py-4">
									<div className="font-bold md:text-xl mb-2">
										{item.title}
									</div>
									<p className="text-gray-700 md:text-base">
										{item.content}
									</p>
								</div>
								<a
									href={topCard.linkToSite}
									target="_blank"
									type="button"
									className="w-fit mx-4 md:hidden self-start  py-2 px-4 flex justify-center items-center  bg-yellow-100 hover:bg-yellow-300 focus:bg-yellow-100 focus:ring-offset-yellow-200 text-[#4a4e69]  transition ease-in duration-200 text-center text-sm md:text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
									<svg
										width="20"
										height="20"
										className="mr-2"
										fill="currentColor"
										viewBox="0 0 1792 1792"
										xmlns="http://www.w3.org/2000/svg">
										<path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"></path>
									</svg>
									Go to Site
								</a>
								<div className="px-6 pt-4 pb-2">
									{item.tags.map((tag: any) => (
										<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-gray-700 mr-2 mb-2">
											#{tag}
										</span>
									))}
								</div>
							</div>
						))}
					</CardContainer>
				</div>
			</div>
		</div>
	);
};

export default Project;
