import {FC, PropsWithChildren} from "react"
import {Panel, Heading} from "../"

type CardProps = {
    title: string
}

export const Card:FC<PropsWithChildren<CardProps>> = ({title, children}) => {
    return (
        <Panel>
            <Heading content={title} />
            {children}
        </Panel>
    );
}

export default Card;