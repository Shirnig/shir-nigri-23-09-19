import React from "react";
import {getCityData, searchCity} from "../../actions";
import {connect} from "react-redux";
import styled from "styled-components";
import {Popover, OverlayTrigger} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const _ = require('lodash');

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            cities: [],
            currentCity: {}
        }
    }

    validateChar(value) {
        if (this.isAlpha(value)) {
            this.refs.myPopover.hide();
            this.props.searchCity(value);
        } else if (value === '') {
            this.refs.myPopover.hide();
        } else {
            this.refs.myPopover.show();
        }
    }

    isAlpha(str) {
        const regex = /^[a-zA-Z][a-zA-Z\s]*$/;
        return regex.test(str);
    }

    onChange(value) {
        this.setState({
            search: value
        });
        this.validateChar(value)
    }

    onClick(name, id) {
        this.props.getCityData({name, id});
        this.setState({
            search: '',
            currentCity: {name, id}
        });
    }

    getPlaceHolder = () => this.props.cityWeatherData.cityMetadata && this.props.cityWeatherData.cityMetadata.name;

    render() {
        const popover = (
            <Popover id="popover-basic">
                <Popover.Content>
                    <span style={{color: 'red'}}>Only English letters accepted</span>
                </Popover.Content>
            </Popover>
        );

        return (<SearchStyled>
            <OverlayTrigger ref='myPopover' trigger="manual" placement="right" overlay={popover}>
                <label>
                    <i className="fa fa-search" aria-hidden="true"/>
                    <input type="text" className="search" value={this.state.search}
                           placeholder={this.getPlaceHolder()}
                           onChange={({target}) => this.onChange(target.value)}/>
                    {this.isAlpha(this.state.search) && !_.isEmpty(this.props.cities) ?
                        <div className='div-ul'>
                            <ul className='ul'>
                                {this.props.cities.map((city, idx) =>
                                    <li onClick={() => this.onClick(city.LocalizedName, city.Key)} key={idx}>
                                        <b>{city.LocalizedName}</b>, {city.Country.LocalizedName}</li>
                                )}
                            </ul>
                        </div> : null
                    }
                </label>
            </OverlayTrigger>
        </SearchStyled>)
    }


    componentDidMount() {
        if (this.props.cityWeatherData.firstMount) {
            this.props.getCityData({name: 'Tel Aviv', id: '215854'});
        }
    }


}

const mapDispatchToProps = dispatch => {
    return {
        searchCity: (chars) => dispatch(searchCity(chars)),
        getCityData: (cityMetadata) => dispatch(getCityData(cityMetadata))
    }
};

const mapStateToProps = state => {
    return {
        cities: state.cities,
        cityWeatherData: state.cityWeatherData
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);


const SearchStyled = styled.div`
@import url('https://fonts.googleapis.com/css?family=Yrsa&display=swap');

display: flex;
justify-content: center;


 .search {
  width: 200px;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,.3);
  background-color: white;
  padding-left: 25px;
}

input::-webkit-calendar-picker-indicator {
  display: none;
}

.search:focus {
  outline: none;
  border: 1px solid #007bff;
}

.fa-search {
  position: relative;
  left: 8px;
  top: 26px;
}

.error {
  color: red;
  display: inline-block;
}

label {
  margin-bottom: 0;
  width: 200px;
}

.div-ul {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  width: 198px;
  z-index: 10;
  background-color: white;
  border-radius: 2%;
  border: 1px solid rgba(0,0,0,0.2);
  box-shadow: 0 0 3px rgba(0,0,0,0.5)
}

.ul {
  font-family: 'Yrsa', serif;
  list-style-type: none;
  margin-bottom: 0;
  padding: 0;
}

li {
  padding: 8px;
}

li:hover {
  background-color: lightgrey;
  cursor: pointer;
}
`;
