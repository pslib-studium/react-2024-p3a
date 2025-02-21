import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

export interface BoxProps {
    c?: string;
    bg?: string;
}

export const StyledBox = styled.div.withConfig({
    shouldForwardProp: (prop) => !['c',"bg"].includes(prop),
})<BoxProps>`
    color: ${(props) => props.c ?? 'black'};
    background-color: ${(props) => props.bg ?? 'white'};
    border: 1px solid black;
`;

const Box: FC<PropsWithChildren<BoxProps>> = ({ c, children, ...props }) => {
    return (
        <StyledBox c={c} {...props}>
            {children}
        </StyledBox>
    );
}

export default Box;