import {FC, useContext} from "react"
import { StyleContext } from "../../providers/StyleProvider"

type TextProps = {
    content: string
}

export const Text:FC<TextProps> = ({content}) => {
    const bgColor = "pink";
    const {color: fgColor} = useContext(StyleContext);
    return (
        <>
            <p style={{color: fgColor, backgroundColor: bgColor}}>{content}</p>
        </>
    );
}

export default Text;