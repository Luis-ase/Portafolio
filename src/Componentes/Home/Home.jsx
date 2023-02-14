import { useState } from "react"
import NavBar from "../NavBar/NavBar"
import styles from "../Styles/Styles"
//Import >
import Luis from "../../public/Luis-Condori.jpg"
//Componente
export default function Home() {
    const [black, white] = useState(true)

    return (
        <>
            <div className="bg-gradient-to-b from-zinc-800  to-black  min-h-screen">
                        <NavBar blackOrwhite={()=>white()} />
                <div className={`flex-col ${styles.flexCenter} ${styles.padding} `}>
                    <div className='text-center p-10 '>
                        <h2 className='text-4xl py-3 text-yellow-600 font-media md:text-6xl lg:text-7xl'>
                            Michael Luis Condori Paye
                        </h2>
                        <h3 className='text-3xl  text-gray-500 font-media md:text-4xl lg:text-5xl'>
                            Desarrollador Full Stack
                        </h3>
                        
                    </div>
                    <div className={`${styles.flexCenter}`}>
                        <img src={Luis} className={"rounded-full "} alt="Luis" />
                    </div>
                </div>
            </div>
        </>
    )
}
