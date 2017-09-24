import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {getTemp} from './api/openweathermap';
import IronImage from './IronImage';
import './App.css';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            showcity: false,
            temp: 0,
            link: 'https://i.pinimg.com/originals/c9/31/30/c93130ca4f4bbd955f0cd220f47126a0.jpg',
            linkupdate:false
        }
        ;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }




    handleChange(event) {
        this.setState({city: event.target.value});
    }

    handleSubmit(event) {
        this.setState({linkupdate:false});
        let snow_link ='http://dreamatico.com/data_images/winter/winter-4.jpg';
        let beach_link = 'https://wallpaperscraft.com/image/beach_tropics_sand_white_palm_trees_relax_48305_1920x1080.jpg';
        let rain_link ='https://i.pinimg.com/originals/a7/a4/4f/a7a44f37df0f7f058287e3f2ee32e375.jpg';
        event.preventDefault();
        this.setState({showcity: true});
        console.log("setstate city"+this.state.city +"  ");
        let a = this.state.city;
        getTemp(a).then((res)=>{
            this.setState({temp: res.data.main.temp, city: res.data.name},()=>{
                let tempy  = this.state.temp;
                console.log(tempy);
                if (tempy >22)
                    this.setState({link: beach_link,linkupdate:true})
                else if (tempy>10 && tempy <22)
                    this.setState({link: rain_link,linkupdate:true})
                else
                    this.setState({link: snow_link,linkupdate:true})
            });
            console.log("setstate temp");
        }).catch(function(err){
            alert(err)
        })



    }
    render() {
        return (
            <div>

                <h1>Weather App!</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input placeholder="city" type="text" value={this.state.city} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                {this.state.showcity &&
                <h2 >
                     the city you chose is {this.state.city} and the temp is {this.state.temp} degrees
                </h2>
                }
                {!this.state.linkupdate && <IronImage srcLoaded={this.state.link}/>}
                {this.state.showcity && this.state.linkupdate &&
                <IronImage srcLoaded={this.state.link}/>
                }




            </div>

        );
    }
}

ReactDOM.render(
    <Weather />,
    document.getElementById('root')
);

export default Weather;