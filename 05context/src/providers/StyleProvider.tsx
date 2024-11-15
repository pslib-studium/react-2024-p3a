import {FC, PropsWithChildren, useState, createContext} from "react"

export type Color = "red" | "blue" | "green";
type TStyleContext = {color: Color, setColor: (col: Color) => void}

export const StyleContext = createContext<TStyleContext>(
    {
        color: "red",
        setColor: (col) => {}
    }
);

const StyleProvider:FC<PropsWithChildren> = ({children}) => {
    const [color, setColor] = useState<Color>("green");
    const switchColor = (c: Color) => setColor(c);
    return (
    <StyleContext.Provider value={{color: color, setColor: switchColor}}>
        {children}
    </StyleContext.Provider>
    )
}

export default StyleProvider;