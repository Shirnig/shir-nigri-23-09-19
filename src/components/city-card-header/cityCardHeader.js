import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";


export default function CityCardHeader({icon, currentWeather, cityMetadata, handleFavorites, inFavorites}) {


    return (<Header className="header">
            <div className="currentBox">
                <img className="img" src={icon}
                     alt={currentWeather.WeatherText}/>
                <div className="text">
                    <span className="name">{cityMetadata.name}</span>
                    <br/>
                    <span>{currentWeather.Temperature.Metric.Value}°C</span>
                </div>
            </div>
            <Button type="button" className="btn btn-light"
                    onClick={() => handleFavorites()}>{inFavorites ? 'Remove From Favorites' : 'Add To Favorites'}</Button>
        </Header>
    )
}


const Header = styled.div`

margin-top: 2%;
display: flex;
justify-content: space-between;

.currentBox {
  display: flex;
  font-size: 20px;
  text-align: center;
  align-items: center;
  color: white;
  font-family: 'Raleway', sans-serif;
}


`;

