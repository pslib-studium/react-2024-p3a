import {FC} from "react"

type HeadingProps = {
    content: string
}

export const Heading:FC<HeadingProps> = ({content}) => {
    return (
        <h1>{content}</h1>
    );
}

export default Heading;