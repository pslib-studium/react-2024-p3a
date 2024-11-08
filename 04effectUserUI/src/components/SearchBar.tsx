import React, { useEffect, useState, FC } from 'react';

type SearchBarProps = {
    onSearch: (term: string) => void;
}

const SearchBar:FC<SearchBarProps> = ({onSearch}) => {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [data, setData] = useState<any>(null);

    const doSearch = async (term: string) => {
        setError(null);
        if(!term) {setData(null); return;}
        setLoading(true);
        try {
            let result = await fetch("http://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + term);
            if(result.ok) {
                let data = await result.json();
                setData(data);
            }
            else {
                setError(new Error("Failed to fetch data"));
            }
        }
        catch (error) {
            if(error instanceof Error)
                setError(error);
            else
                setError(new Error("An unknown error occurred"));
        }
        finally {
            setLoading(false);
        }
    } 

    useEffect(() => {
        if(search && search.length > 4) {
            doSearch(search);
        }
    }, [search]);

    return(
        <div>
            <input type="text" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            onKeyDown={(e) => {
                if(e.key === 'Enter') {
                    doSearch(search);
            }}}
            />
            <button onClick={e => doSearch(search)}>Search</button>
            {loading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            {data && data.drinks && data.drinks.map((drink: any) => (
                <div key={drink.idDrink}>
                    <pre>{JSON.stringify(drink)}</pre>
                </div>
            ))}
        </div>
    )
}

export default SearchBar;