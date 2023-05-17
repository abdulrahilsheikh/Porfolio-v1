import samurai from "../../assets/samurai.jpg";
import styles from "./AboutMe.module.scss";

type Props = {};
const codeBox = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM4 5V19H20V5H4ZM20 12L16.4645 15.5355L15.0503 14.1213L17.1716 12L15.0503 9.87868L16.4645 8.46447L20 12ZM6.82843 12L8.94975 14.1213L7.53553 15.5355L4 12L7.53553 8.46447L8.94975 9.87868L6.82843 12ZM11.2443 17H9.11597L12.7557 7H14.884L11.2443 17Z"></path>
  </svg>
);
const codeBracket = (
  <svg
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
    ></path>
  </svg>
);
const gamePad = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M17 4C20.3137 4 23 6.68629 23 10V14C23 17.3137 20.3137 20 17 20H7C3.68629 20 1 17.3137 1 14V10C1 6.68629 3.68629 4 7 4H17ZM17 6H7C4.8578 6 3.10892 7.68397 3.0049 9.80036L3 10V14C3 16.1422 4.68397 17.8911 6.80036 17.9951L7 18H17C19.1422 18 20.8911 16.316 20.9951 14.1996L21 14V10C21 7.8578 19.316 6.10892 17.1996 6.0049L17 6ZM10 9V11H12V13H9.999L10 15H8L7.999 13H6V11H8V9H10ZM18 13V15H16V13H18ZM16 9V11H14V9H16Z"></path>
  </svg>
);
const rings = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M18.3292 4.25604L16.9062 5.67921C13.7678 3.23734 9.22861 3.45865 6.34412 6.34315C3.97034 8.71692 3.40017 12.2113 4.63361 15.1234L7.0508 12.7061C6.83751 11.2027 7.30906 9.62085 8.46544 8.46447C10.1757 6.75423 12.8166 6.54193 14.7579 7.82757L13.2937 9.2919C12.1787 8.75967 10.8031 8.95526 9.87966 9.87868C8.95624 10.8021 8.76065 12.1777 9.29288 13.2927L2.8428 19.7424C2.80859 16.2426 2.25158 14.931 2.05494 13.0406C1.75392 10.1467 2.71224 7.1466 4.92991 4.92893C8.59624 1.2626 14.4012 1.03831 18.3292 4.25604ZM21.1592 4.25759C21.1934 7.75736 21.7504 9.06895 21.947 10.9594C22.248 13.8533 21.2897 16.8534 19.072 19.0711C15.4057 22.7374 9.60078 22.9617 5.67278 19.744L7.09575 18.3208C10.2342 20.7627 14.7733 20.5413 17.6578 17.6569C20.0316 15.2831 20.6018 11.7887 19.3683 8.87656L16.9512 11.2939C17.1644 12.7973 16.6929 14.3792 15.5365 15.5355C13.8263 17.2458 11.1853 17.4581 9.24404 16.1724L10.7083 14.7081C11.8233 15.2403 13.1989 15.0447 14.1223 14.1213C15.0457 13.1979 15.2413 11.8223 14.7091 10.7073L21.1592 4.25759Z"></path>
  </svg>
);
type AboutCardType = {
  icon: any;
  content: string;
  title: string;
  subTitle: string;
};
const AboutCard = ({ icon, content, title, subTitle }: AboutCardType) => {
  return (
    <div className="bg-white  w-80 shadow-lg  rounded-xl p-4 transition-all hover:shadow-2xl">
      <p className="text-gray-600  text-xl">
        <span className="text-xl font-bold text-indigo-500">“</span>
        {content}
        <span className="text-lg font-bold text-indigo-500">”</span>
      </p>
      <div className="flex items-center mt-4 gap-2">
        <div className="w-10 shadow p-1 bg-yellow-100 rounded-full aspect-square">
          {icon}
        </div>
        <div className="flex flex-col justify-between ml-2">
          <span className=" text-2xl font-semibold text-[#4a4e69]">
            {title}
          </span>
          <span className="flex items-center text-lg dark:text-gray-400">
            {subTitle}
          </span>
        </div>
      </div>
    </div>
  );
};
const AboutMe = ({}: Props) => {
  return (
    <div className={`min-h-screen pt-4 pb-20`}>
      <div className={` text-center font-bold text-6xl text-[#4a4e69] w-full `}>
        <div className={`text-red-400 ${styles.nameJumpAnimation}`}>.</div>
        /about-me
      </div>
      <div className="h-full flex">
        <div className="w-1/2 h-full">
          <div className={`${styles.mask1} w-full h-full overflow-hidden`}>
            <img src={samurai} className="object-cover h-full relative top-0" />
          </div>
        </div>
        {/* cards containers */}
        <div
          className={`w-1/2 flex flex-col pt-8 px-8 gap-4 ${styles.cardsContainer}`}
        >
          <AboutCard
            icon={codeBox}
            content={
              "Mechanical Engineer by chance and a software devloper by choice."
            }
            title={"Software Engineer"}
            subTitle={"JS devloper"}
          />
          <AboutCard
            icon={codeBracket}
            content={
              "A passionate coder having love for coding and is very keen to learn new stuffs in web devlopment and programming"
            }
            title={"Passionate Coder"}
            subTitle={"Coding enthusiast"}
          />
          <AboutCard
            icon={gamePad}
            content={
              "A hardcore video gamer. Like to play games like Call Of Duty , Battlefield, PUBG etc.."
            }
            title={"Hadrcore Gamer"}
            subTitle={"FPS Game lover"}
          />
          <AboutCard
            icon={rings}
            content={
              "An altrenate believer. Who believe that there is always more than one solution for a problem."
            }
            title={"Alternate Believer"}
            subTitle={"Believe in multiple solutions"}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
