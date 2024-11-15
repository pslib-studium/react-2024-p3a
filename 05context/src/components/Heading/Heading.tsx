import {FC, useContext} from "react"
import { StyleContext } from "../../providers/StyleProvider"

type HeadingProps = {
    content: string
}

export const Heading:FC<HeadingProps> = ({content}) => {
    const {color: fgColor} = useContext(StyleContext);
    return (
        <h1 style={{color: fgColor}}>{content}</h1>
    );
}

export default Heading;