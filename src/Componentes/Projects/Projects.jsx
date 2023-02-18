import NavBar from "../NavBar/NavBar"
import styles from "../Styles/Styles"
import ImageDefault from "../../public/Project.jpg"
import StarWars from "../../public/Starwars.jpg";
import Countries from "../../public/Countries.jpg";

let Projectos = [
  {
    titulo: "App Countries",
    linkGit: "https://github.com/Luis-ase/PI-Countries",
    linkDeploy: "",
    image: Countries
  },
  {
    titulo: "Star Wars VS",
    linkGit: "https://github.com/Luis-ase/Star-wars-VS",
    linkDeploy: "",
    image: StarWars
  },
  {
    titulo: "Prueba tecnica",
    linkGit: "https://github.com/Luis-ase/Prueba-Tecnica",
    linkDeploy: "",
    image: ImageDefault
  },
  {
    titulo: "Prueba tecnica",
    linkGit: "https://github.com/Luis-ase/Prueba-Tecnica",
    linkDeploy: "",
    image: ImageDefault
  },
  {
    titulo: "Prueba tecnica",
    linkGit: "https://github.com/Luis-ase/Prueba-Tecnica",
    linkDeploy: "",
    image: ImageDefault
  },
  {
    titulo: "Prueba tecnica",
    linkGit: "https://github.com/Luis-ase/Prueba-Tecnica",
    linkDeploy: "",
    image: ImageDefault
  },
]

export default function Project() {


  return (
    <div className="bg-gradient-to-b from-zinc-800  to-black   min-h-screen">
      <NavBar />
      <div className={`flex justify-center flex-col py-5 `}>
      
        <div>
          <h2 className={`${styles.heading2} font-bold text-4xl border-b-4 p-2 inline text-white border-gray-500`}>Portafolio</h2>
          <p className={`${styles.padding} ${styles.paragraph} text-white`}>Mira unos de mis proyectos</p>
        </div>
        
        <div className={`grid sm:grid-cols-1 w-full  min-w-screen md:grid-cols-3 gap-8 sm:px-12 px-0 `}>
         {Projectos?.map((projectos, index)=>{
          return (
            <>
            <div className={`${styles.BoxBorder} ${styles.padding} py-10 sm:py-1 my-5 sm:my-1 border-t-0 border-l-none`}>
            <img src={projectos.image} alt="" className="rounded-md w-auto" />
                <h3 className="text-xl text-center text-white">{projectos.titulo}</h3>
            <div className={`${styles.flexCenter}`}>
              <div>
                    <a href="" target={"_blank"}>
                      <button className={`${styles.flexCenter} bg-sky-800 rounded-xl border-none  w-2 px-6 py-3 m-4 `}>
                        Deploy
                      </button>
                    </a>
              </div>
              <div>
                    <a href={`${projectos.linkGit}`} target={"_blank"}>
                      <button className={`${styles.flexCenter} bg-sky-800 rounded-xl border-none  w-2 px-6 py-3 m-4 `}>
                        Code
                      </button>
                    </a>
              </div>
                  </div>
          </div>
            </>
          )
        })}
          
          
          
        </div>
      </div>


    </div>

  )
}

{/* {Projectos?.map((project, index) => {
            return (
              <>
                <div key={index} className={`${styles.BoxBorder} w-30 ${styles.padding}`}>
                  <img src={project.image} alt={project.titulo} className="w-100% m-auto " />
                  <h2 className={`text-center text-2xl `}>{project.titulo}</h2>
                  <div className={`${styles.flexCenter} `}>
                    <a href={project.linkDeploy} target={"_blank"}>
                      <button className={`${styles.flexCenter} bg-sky-700  rounded-xl w-25% p-3 m-4`}>
                        <span className="text-white">
                          Deploy
                        </span>
                        <picture className="pl-2">
                          <GrDeploy className=" text-2xl" />
                        </picture>
                      </button>
                    </a>
                    <a href={project.linkGit} target={"_blank"}>
                      <button className={`${styles.flexCenter} bg-sky-700  rounded-xl w-25% p-3 m-4 `}>
                        <span>
                          Codigo
                        </span>
                        <picture className="pl-2">
                          <GrGithub className="text-2xl" />
                        </picture>
                      </button>
                    </a>
                  </div>
                </div>
              </>
            )
          })} */}