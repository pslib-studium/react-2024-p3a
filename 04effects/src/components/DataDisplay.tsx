import React, {FC, useState, useEffect} from "react"
//import {Joke} from "../types/Data";
import {Joke} from "../types";


type SubDisplayProps = {
    value: string;
}

const SubDisplay: FC<SubDisplayProps> = ({value}) => {
    useEffect(() => {
        console.log("Sub Mounted");
        return () => {
            console.log("Sub Unmounted");
        }
    }, []);
    console.log("SubDisplay Render");
    return <p>{value}</p>;
}

const DataDisplay: FC = () => {
    const [data, setData] = useState<Joke | null>(null);
    const [count, setCount] = useState(0);
    console.log("Render");
    useEffect(() => {
        console.log("Effect 0");
    });
    useEffect(() => {
        console.log("Effect 1");
    }, []);
    useEffect(() => {
        console.log("Effect 2");
    }, [data]);
    useEffect(() => {
        const promise = fetch("https://api.chucknorris.io/jokes/random");
        const res = promise.then(response => response.json());
        console.log(res);
        const x = res.then(
            data => {
                console.log(data);
                setData(data);
            }
            );
    }, [count]);
    console.log("Render 2");
    return (
        <>
            <p>{JSON.stringify(data)}</p>
            <button onClick={() => setData(null)}>Clear</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            {data !== null && <SubDisplay value={data.value}/>}
        </>
        
    );
}

export default DataDisplay;