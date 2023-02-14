import styles from "../Styles/Styles"
import { Link } from "react-router-dom";
import { listaNav } from "./lista";
import { AiOutlineMenu } from 'react-icons/ai';
import { BsMoonStarsFill, BsMoonStars } from "react-icons/bs"
import { useState } from "react";

export default function NavBar({ blackOrwhite }) {
    const [open, setOpen] = useState(false)

    const hadleMenu = () => {
        setOpen(!open)
    }

    return (
        <div className={`${styles.paddingX}  text-white ${styles.flexCenter}`} >
            <div className={`${styles.boxWidth} sticky`}>
                <nav className="w-full flex py-6 justify-between items-center ">
                    <Link to={"/"}>
                        <picture className="flex gap-1">
                            <span>L</span>
                            <span>C</span>
                        </picture>
                    </Link>
                    <ul className="list-none sm:flex hidden justify-end items-center flex-i ">
                        <li className="mr-4">{blackOrwhite ? <BsMoonStarsFill /> : <BsMoonStars />}</li>
                        {listaNav?.map((e, index) => {
                            return (
                                <>
                                    <li key={index}>
                                        <Link key={index} to={`/${e.id}`} className={`${styles.lista} ${styles.movimientosexy} ${index === listaNav.length - 1 ? "mr-0" : "mr-8"} `}>
                                            <span className={`${styles.movimientosexy}`}>
                                                {e.title}
                                            </span>

                                        </Link>
                                    </li>
                                </>
                            )
                        })}
                    </ul>
                    <div className="sm:hidden   flex   flex-1 justify-end items-center">
                        <AiOutlineMenu onClick={() => hadleMenu()} />
                        <div className={`${open ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[9rem] rounded-xl sidebar`}>
                            <ul className="list-none flex flex-col  justify-end items-center flex-i ">
                                <li className="text-center">{blackOrwhite ? <BsMoonStarsFill /> : <BsMoonStars />}</li>
                                {listaNav?.map((e, index) => {
                                    return (
                                        <>
                                            <li key={index}>
                                                <Link key={index} to={`/${e.id}`} className={`${styles.lista} ${index === listaNav.length - 1 ? "mb-1" : "mb-1"} `}>
                                                    <span className={`${styles.movimientosexy}`}>
                                                        {e.title}
                                                    </span>
                                                </Link>
                                            </li>
                                        </>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

