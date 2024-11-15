import {FC, PropsWithChildren} from "react"

type PanelProps = {
}

export const Panel:FC<PropsWithChildren<PanelProps>> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default Panel;