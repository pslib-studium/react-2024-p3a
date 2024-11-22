import {Link, useParams} from 'react-router-dom';

const About = () => {
    let { id } = useParams();
    console.log(id);
    return(
        <>
        <h1>About {id}</h1>
        <Link to="/">Main</Link>
        </>
    );
    };
export default About;