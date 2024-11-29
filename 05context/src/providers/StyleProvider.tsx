import {FC, PropsWithChildren, useState, createContext, useEffect} from "react"

export type Color = "red" | "blue" | "green";
type TStyleContext = {color: Color, setColor: (col: Color) => void}

export const StyleContext = createContext<TStyleContext>(
    {
        color: "red",
        setColor: (col) => {}
    }
);

const StyleProvider:FC<PropsWithChildren> = ({children}) => {
    let localData = localStorage.getItem("color");
    console.log("localData: ", localData);
    let localColor = localData ? JSON.parse(localData).color as Color : "blue";
    const [color, setColor] = useState<Color>(localColor);
    /*
    useEffect(() => { // 1. přes useEffect se uloží do localStorage
        console.log("Color changed to: ", color);
        localStorage.setItem("color", JSON.stringify({color: c}));
    }, [color]);
    */
    const switchColor = (c: Color) => {
        setColor(c);
        localStorage.setItem("color", JSON.stringify({color: c})); // 2. při změně se uloží do localStorage přímo přes funkci
    };
    return (
    <StyleContext.Provider value={{color: color, setColor: switchColor}}>
        {children}
    </StyleContext.Provider>
    )
}

export default StyleProvider;