import NavBar from "../NavBar/NavBar"
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import styles from "../Styles/Styles"

const LinksService = [
  
]

export default function Contac() {
  return (
    <div className="bg-gradient-to-b from-zinc-800  to-black  text-white min-h-screen">
      <NavBar />
      <div className={` `}>
        <h2 className={`${styles.heading2} font-bold text-4xl border-b-4 p-2 inline text-white border-gray-500`}>Contactame</h2>

      <div className={`flex items-center `}>
        {/* redes */}
        <div className={` `}>
          <h4 className={`text-xl text-center my-2`}>Redes sociales</h4>
          <div className={`flex flex-col`}>
            

            <a href="https://www.linkedin.com/in/michael-condori-2a0394251/" target={"_blank"} className={ `${styles.flexCenter} `} >
            <AiFillLinkedin className={`text-4xl mx-2`} />
            <span>Linkedin</span>
            </a>
            
            
            
            <a href="https://github.com/Luis-ase" target={"_blank"} className={ `${styles.flexCenter}`}>
            <AiFillGithub className={`text-4xl mx-2`} />
            <span>GitHub</span>
            </a>
            
          
            <a href="luis2003nb@gmai.com" target={"_blank"} className={ `${styles.flexCenter}`}>
            <AiFillMail className={`text-4xl mx-2`} />
            <span>Luis2003nb@gmail.com</span>
            </a>
            
          </div>
        </div>
        {/* Formulario */}

        <div>
          <h2>Contactame por mensaje</h2>
          <div>
            <form action="" className={`${styles.flexCenter} flex-col`}>
              <label>Coloca tu nombre hermoso/a</label>
              <input className={`bg-transparent border-2 border-stone-50 rounded-md border-solid`} type="text" placeholder="ej.Linda" />

              <label>Introduce tu email </label>
              <input className={`bg-transparent border-2 border-stone-50 rounded-md border-solid`} type="email" placeholder="ej.Linda@gmail.com" />

              <label>Coloca tu nombre hermoso/a</label>
              <textarea  className={`bg-transparent border-2 border-stone-50 rounded-md border-solid`} type="text" placeholder="ej.Linda" />
              <button >Enviar</button>
            </form>
          </div>

        </div>
      </div>
      
      </div>
    </div>
  )
}



