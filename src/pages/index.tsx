import React from "react";
import {Wrapper, Header, Main, Footer, Cards} from "components";
import GlobalStyle from "styles/globalStyles";
import {} from "types/classes"

const Home: React.FC = () => {

    return (
        <Wrapper>
            <GlobalStyle/>
            <Header/>
            <Main/>
            <Cards/>
            <Footer/>
        </Wrapper>
    );
};
export default Home;
