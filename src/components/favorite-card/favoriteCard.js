import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom';


export default function FavoriteCard({cityMetadata, currentWeather, icon, getCityData}) {
    return (
        <StyledCard className="col-xs-12 col-sm-6 col-md-4 col-lg-2 col-xl-2">
            <Link to={"/"} onClick={()=>getCityData()}>
            <Card.Body className="card-body">
                <Card.Title>{cityMetadata.name}</Card.Title>
                <Card.Text>
                    {currentWeather.Temperature.Metric.Value}°C
                </Card.Text>
                <Card.Title className="status">{currentWeather.WeatherText}</Card.Title>
            </Card.Body>
            <Card.Img className="img-fluid text-center" variant="bottom" src={icon} alt={currentWeather.WeatherText}/>
            </Link>
        </StyledCard>
    )
}


const StyledCard = styled(Card)`
display: inline !important;
padding: 20px;
font-family: 'Raleway', sans-serif;
height: 260px;
text-align: center;
cursor: pointer;
 
 .card-body {
    padding: 0;
 }
 
 .status {
  font-size: 18px;
 }
 
 img{
 width: 150px;
 } 
 
a:hover {
  text-decoration: none;
  color: #007bff;
}`;

