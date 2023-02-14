import { useRouteError } from "react-router-dom";
import styles from "../Styles/Styles";
import { useNavigate } from "react-router-dom";

export default function Error() {
    const error = useRouteError();
    const navigate = useNavigate();
    const back =()=>{
        navigate("/");
    }

    return (
        <div className="bg-red-400">
            <div id="error-page " className={`min-h-screen ${styles.flexCenter} flex-col gap-4`}>
                <h2 className="text-6xl ">Oops!</h2>
                <p>Sorry, an unexpected error has occurred.</p>
                <p> 
                    <i>{error.statusText || error.message}</i>
                </p>
                <div className={`gap-1 ${styles.flexCenter}`}>
                    <p>
                        Vuelve a la pagina principal:
                    </p>
                    <button onClick={back} className="bg-blue-500 h-10 w-10 rounded-lg">Ir</button>
                </div>
            </div>
        </div>
    );
}
