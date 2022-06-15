import React from "react";
import {Container} from "./styled";

type Props = {
    children?: React.ReactNode
};
export const Wrapper: React.FC<Props> = ({children}) => {
    return <Container>{children}</Container>;
};
