import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import icons from "../../assets/icons-map";
import FavoriteCard from "../favorite-card/favoriteCard";
import {getCityData} from "../../actions";
import Alert from "react-bootstrap/Alert";


class Favorites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    findIcon(iconId) {
        return `./assets/pictures/${icons[iconId]}`;
    }

    getCityData(cityMetadata) {
        this.props.getCityData(cityMetadata);
    }

    render() {
        const {favorites} = this.props;
        return (<StyledFavorites className="fav-container">
            {favorites.length ?
                favorites.map((city, idx) =>
                    <FavoriteCard key={idx} cityMetadata={city.cityMetadata}
                                  currentWeather={city.currentWeather}
                                  getCityData={() => this.getCityData(city.cityMetadata)}
                                  icon={this.findIcon(city.currentWeather.WeatherIcon)}/>)
                : <Alert className="alert" variant={'info'}> No Favorites To Show! </Alert>}
        </StyledFavorites>)
    }

}


const mapDispatchToProps = dispatch => {
    return {
        getCityData: (cityMetadata) => dispatch(getCityData(cityMetadata))
    }
};


const mapStateToProps = state => {
    return {
        favorites: state.favorites
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);


const StyledFavorites = styled.div`

display: flex;
flex-direction: row;
padding: 0;
flex-wrap: wrap;

.alert {
  width: 100%;
}
`;

