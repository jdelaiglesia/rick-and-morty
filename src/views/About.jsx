import aboutMe from '../assets/aboutMe.png';

const styles = {
    container: {
        width: '15%'
    }
}

const About = () => {
    return (
        <div>
            <h1>About - Joaquín de la Iglesia</h1>
            <img src={aboutMe} alt="" srcset="" style={styles.container}/>
            <p>Joaquín de la Iglesia es un humano nacido en Neuquén, Argentina, Planeta Tierra C-137.</p>
            <p>Incursionó en la programación desde joven, y ama la computación desde que tenía 6 años.</p>
            <p>Actualmente, Joaquín estudia en SoyHenry la carrera de Full Stack Developer.</p>
        </div>
    )
}

export default About;