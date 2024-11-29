import {Link, useParams, useNavigate} from 'react-router-dom';
import {useState} from 'react';

const About = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const [count, setCount] = useState<number>(id ? parseInt(id) : 0);
    console.log(id);
    return(
        <>
        <h1>About {id}</h1>
        <h2>{count}</h2>
        <button onClick={
            () => {setCount((x) => (x + 1));
            if (count > 5) {
                navigate("/");
            }
            }}>Increment</button>
        <Link to="/">Main</Link>
        </>
    );
    };
export default About;