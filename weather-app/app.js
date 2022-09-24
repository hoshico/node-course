const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=30bafc6745bcf550e2ce0d458dd85abd&query=37.8267,-122.4233'

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body)
  console.log(data)
})