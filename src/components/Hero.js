export const Hero = () => {
    return (
        <div id="container-hero">
            <div id="desc">
                <p className="hi">Hello Everyone! I am</p>
                <p className="name">patricio denari</p>
                <p className="hi">Frontend Web Developer</p>
                <a href="#about-me-container">More About Me</a>
            </div>
        </div>
    )

}
export const AboutMe = () => {
    return(
        <div data-aos="fade-up" id="about-me-container">
            <div data-aos="fade-up" data-aos-duration="500" id="about-me">
                <h2>About Me</h2>
                <div>
                    <div id="me-desc">
                        <p>                
                            Tengo 21 años, estoy recibido en la carrera de Desarrollo Frontend React y me gusta estar en constante aprendizaje sobre nuevas herramientas y funciones en el mundo del Desarrollo.<br></br>
                            Busco sumar mi primer experiencia laboral, en donde pueda plasmar mis conocimientos y responsabilidad, para potenciarme y potenciar al equipo de trabajo.
                        </p>
                    </div>
                    <div id="me-photo">
                        <img src='./img/copia-profile-photo.jpg' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}