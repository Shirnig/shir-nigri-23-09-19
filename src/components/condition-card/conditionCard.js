import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";

const moment = require('moment');


export default function ConditionCard({day, icon}) {
    return (
        <StyledCard className="col-xs-12 col-sm-6 col-md-4 col-lg-2 col-xl-2">
            <Card.Body className="card-body">
                <Card.Title>{moment(day.Date).format("dddd")}</Card.Title>
                <Card.Text>
                    {day.Temperature.Maximum.Value}°C / {day.Temperature.Minimum.Value}°C
                </Card.Text>
                <Card.Title className="status">{day.Day.IconPhrase}</Card.Title>
            </Card.Body>
            <Card.Img className="img-fluid text-center" variant="bottom" src={icon} alt={day.Day.IconPhrase}/>
        </StyledCard>
    )
}


const StyledCard = styled(Card)`
display: inline !important;
padding: 20px;
font-family: 'Raleway', sans-serif;
height: 260px;
text-align: center;
 
 .card-body {
    padding: 0;
 }
 
 .status {
  font-size: 18px;
 }
 
 img{
 width: 150px;
 }
 
`;

