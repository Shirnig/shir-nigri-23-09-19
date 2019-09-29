import React from "react";
import styled from "styled-components";
import Search from "../search/search";
import CityCard from "../city-card/cityCard";

export default function Home(){
    return (<HomeStyled className="container home">
                <Search/>
                <CityCard className="p-0"/>
        </HomeStyled>
    )
}



const HomeStyled = styled.div`

display: flex;
flex-direction: column;
align-items: center;
padding: 0;


@media only screen and (max-width: 600px) {
  .home {
    margin-top: 3vh;
  }
}
`;

