import React, {Fragment} from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import icons from "../../assets/icons-map";
import CityCardHeader from "../city-card-header/cityCardHeader";
import ConditionCard from "../condition-card/conditionCard";
import {addFavorite, removeFavorite} from "../../actions";
import {ToastsStore} from "react-toasts";

const _ = require('lodash');

class CityCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityAdded: false
        }
    }


    findIcon(iconId) {
        return `./assets/pictures/${icons[iconId]}`;
    }

    addToFavorites() {
        const {cityMetadata, currentWeather} = this.props;
        this.props.addFavorite({cityMetadata, currentWeather});
        this.setState({
            cityAdded: true
        });
        ToastsStore.success("City Added Successfully");
    }

    removeFromFavorites() {
        const {cityMetadata} = this.props;
        this.props.removeFavorite(cityMetadata.id);
        this.setState({
            cityAdded: false
        });
        ToastsStore.error("City Removed Successfully");

    }

    cityInFavorites() {
        return _.find(this.props.favorites, (c => c.cityMetadata.id === this.props.cityMetadata.id))
    }


    handleFavorites() {
        if (!this.cityInFavorites()) {
            this.addToFavorites()
        } else {
            this.removeFromFavorites()
        }
    }


    render() {
        const {cityMetadata, currentWeather, forecastWeather} = this.props;
        return (<CityCardStyled className="container city-card">
                {!_.isEmpty(cityMetadata) ?
                    <Fragment>
                        <CityCardHeader icon={this.findIcon(currentWeather.WeatherIcon)} cityMetadata={cityMetadata}
                                        currentWeather={currentWeather} handleFavorites={() => this.handleFavorites()}
                                        inFavorites={this.cityInFavorites()}/>
                        <div className="forecastBox col-12">
                            {forecastWeather.map((day, idx) =>
                                <ConditionCard className="condition-card" key={idx} day={day}
                                               icon={this.findIcon(day.Day.Icon)}/>
                            )}

                        </div>
                    </Fragment> : null
                }
            </CityCardStyled>
        )
    }


}

const mapDispatchToProps = dispatch => {
    return {
        addFavorite: (city) => dispatch(addFavorite(city)),
        removeFavorite: (id) => dispatch(removeFavorite(id)),
    }
};

const mapStateToProps = state => {
    const {cityMetadata, currentWeather, forecastWeather} = state.cityWeatherData;
    const {favorites} = state;
    return {cityMetadata, currentWeather, forecastWeather, favorites}
};

export default connect(mapStateToProps, mapDispatchToProps)(CityCard);


const CityCardStyled = styled.div`
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

background-image: url("./assets/pictures/background2.jpg");
background-size: cover;
margin-top: 3vh;
display: flex;
flex-direction: column;
justify-content: space-around;
box-shadow: 0 0 12px rgba(0,0,0,0.4);
min-height: 500px;

@media only screen and (max-width: 600px) {

  .container{
    margin-top: 1vh;
  }

  .btn{
    width: 100px;
  }
}

.btn {
  color: dodgerblue;
}

.name {
  white-space:nowrap;
}

.forecastBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  @media only screen and (max-width: 991px) {
  .forecastBox {
    justify-content: flex-start;
    padding: 20px;
  }
}
`;

