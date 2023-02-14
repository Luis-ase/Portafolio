import NavBar from "../NavBar/NavBar"
import HTML from "../../public/html-1.svg";
import CSS from "../../public/css-3.svg";
import JAVASCRIPT from "../../public/javascript-1.svg";
import Express from "../../public/express-109.svg";
import Nodejs from "../../public/nodejs-2.svg";
import PostgresSql from "../../public/postgresql.svg";
import Redux from "../../public/redux.svg";
import Talwind from "../../public/tailwind-css-2.svg";
import Reactjs from "../../public/react-2.svg";
import styles from "../Styles/Styles";

const SkillTecnologi = [
  {
    title: "HTML",
    image: HTML,
    sky:"hover:shadow-orange-700"
  },
  {
    title: "CSS",
    image: CSS,
    sky:"hover:shadow-sky-500"
  },
  {
    title: "Javascript",
    image: JAVASCRIPT,
    sky:"hover:shadow-yellow-400"
  },
  {
    title: "Express",
    image: Express,
    sky:"hover:shadow-gray-100"
  },
  {
    title: "Nodejs",
    image: Nodejs,
    sky:"hover:shadow-green-900"
  },
  {
    title: "Postgresql",
    image: PostgresSql,
    sky:"hover:shadow-cyan-400"
  },
  {
    title: "Redux",
    image: Redux,
    sky:"hover:shadow-violet-900"
  },
  {
    title: "Talwind",
    image: Talwind,
    sky:"hover:shadow-sky-500"
  },
  {
    title: "Reactjs",
    image: Reactjs,
    sky:"hover:shadow-blue-300"
  },
]


export default function Skill() {
  return (
    <div className="bg-gradient-to-b from-zinc-800  to-black   min-h-screen">
      <NavBar />
      <div className="flex flex-col justify-center py-5">
        <div>
          <h2 className={`${styles.heading2} font-bold text-4xl border-b-4 p-2 inline text-white border-gray-500`}>Tecnologias</h2>
          <p className={`${styles.padding} ${styles.paragraph} text-white`}>Estas son todas la tecnologias con las que tengo experiencia</p>
        </div>

        <div className={`${styles.padding} w-full grid grid-cols-2  sm:grid-cols-3 gap-8 text-center `}>
          {SkillTecnologi?.map((tec, index) => {
            return (
              <div key={index} className={`${styles.flexCenter} ${styles.hoverBox} ${tec.sky}`}>
                <picture key={index} className="">
                  <img key={index} src={tec.image} alt={tec.title} className="w-20 m-auto" />
                  <span key={index} className="text-white pt-4">
                    {tec.title}
                  </span>
                </picture>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}