import React from "react";
import styled from "styled-components";
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom';


export default function Header({history}) {

    function changeRoute() {
        if (history.location.pathname === '/favorites') return "/";
        return '/favorites'
    }


    return (<HeaderStyled>
            <header className="navbar navbar-light">
                <span>The Better Weather</span>
                <div>
                    <Link to={changeRoute()}>
                        <Button variant="primary">{history.location.pathname === '/' ? 'Favorites' : 'Home'}</Button>
                    </Link>
                </div>
            </header>
        </HeaderStyled>
    )
}


const HeaderStyled = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Francois+One&display=swap');

* {
  font-family: 'Francois One', sans-serif;
  color: #ffffff;
}

.navbar {
  height: 50px;
  background-color: #5A7BA8;
  box-shadow: 0 0 12px rgba(0,0,0,0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
}
`;

