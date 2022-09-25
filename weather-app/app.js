const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=30bafc6745bcf550e2ce0d458dd85abd&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
  //console.log(response.body.current)
  console.log(`${response.body.current.weather_descriptions[0]}. It is curently ${response.body.current.temperature} degrees out. There is a ${response.body.current.precip} % chance of rain.`)
})