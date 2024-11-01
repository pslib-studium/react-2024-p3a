import React, {FC, useState, useEffect} from "react"
import {Joke} from "../types";

const DataDisplay2: FC = () => {
    const [data, setData] = useState<Joke | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                let response = await fetch("https://api.chucknorris.io/jokes/random");
                if (!response.ok) {
                    throw new Error("Chyba! " + response.status);
                }
                let encodedData = await response.json();
                setData(encodedData);
            }
            catch (error) {
                if (error instanceof Error) {
                    setError(error);
                }
                else {
                    setError(new Error("Neznámá chyba"));
                }
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    },[]);

    return (
        <>
            {loading && <p>Načítám data...</p>}
            {error && <p>CHYBA: {error.message}</p>}
            {data && 
                <>
                <p>{JSON.stringify(data)}</p>
                <p>{data.value}</p>
                </>
            }
        </>
    );
}

export default DataDisplay2;