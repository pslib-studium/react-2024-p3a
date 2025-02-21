import styled from 'styled-components';
import { FC } from 'react';
import { StyledBox, BoxProps } from './Box';
import { PropsWithChildren } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, BoxProps {
    p: string;
}

export const StyledButton = styled(StyledBox)
.attrs<ButtonProps>((props) => ({
    as: "button",
}))
.withConfig({
    shouldForwardProp: (prop) => ![/*'c',"bg",*/"p"].includes(prop),
})<ButtonProps>`
    padding: ${(props) => props.p};
`;

const Button: FC<PropsWithChildren<ButtonProps>> = ({ p, children, ...props }) => {
    return (
        <StyledButton p={p} {...props}>{children}</StyledButton>
    );
}

export default Button;
