import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=d895d34637d9439eaeabe59b6b360597&units=metric';

  function getTemp(location)
{


    let requestUrl = OPEN_WEATHER_MAP_URL+'&q='+location;

    return axios.get(requestUrl).then(
        function (res) {
            if (res.data.cod !== 200) {
                throw new Error('error2');
            } else {
                return res;
            }
        },
        function (res) {
            throw new Error('error1');
        });
}


export {getTemp};