type Props = { hidePopUp: () => void };

const PopUp = ({ hidePopUp }: Props) => {
	return (
		<div className="fixed z-50 bg-opacity-60  bg-slate-900  top-0 left-0 right-0 bottom-0 flex items-center justify-center p-4">
			<div className="flex justify-center flex-col bg-yellow-100 p-8 text-center rounded gap-4">
				<div className="text-[#4a4e69]">
					For better experience, please view on desktop 😉
				</div>
				<button
					onClick={hidePopUp}
					className="mx-auto w-fit md:hidden self-start  py-2 px-4 flex justify-center items-center  bg-yellow-100 hover:bg-yellow-300 focus:bg-yellow-100 focus:ring-offset-yellow-200 text-[#4a4e69]  transition ease-in duration-200 text-center text-sm md:text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
					<svg
						width="20"
						height="20"
						className="mr-2"
						fill="currentColor"
						viewBox="0 0 1792 1792"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"></path>
					</svg>
					View Mobile Version
				</button>
			</div>
		</div>
	);
};

export default PopUp;
