import NavBar from "../NavBar/NavBar"

export default function SobreMi() {
    return (
        <>
            <div className="bg-zinc-900  text-white min-h-screen">
                <NavBar/>
                {/* Aboute me---- 
        si ves esto apoyame con una recomendacion,o  mandame una prueba tecnica todo me sirve*/}
                <div className="min-w-100%">
                    <div>
                    <img />
                    </div>
                    <div>
                            <h2>!Hola ¡</h2>
                            <h3></h3>
                        <p>
                            It is a long established fact that a reader will be distracted by the 
                            readable content of a page when looking at its layout. The point of using 
                            Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                             as opposed to using 'Content here, content here', making it look like 
                             readable English. Many desktop publishing packages and web page editors 
                             now use Lorem Ipsum as their default model text, and a search for 'lorem
                              ipsum' will uncover many web sites still in their infancy. Various versions
                               have evolved over the years, sometimes by accident, sometimes on purpose 
                               .
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
