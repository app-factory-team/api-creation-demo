const app = require('express')()

app.get('/car-info', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.send({
    registration: `ABCD${Math.floor(Math.random() * 100)}`,
    color: 'red',
    mileage: Math.floor(Math.random() * 10000),
    topSpeed: Math.floor(Math.random() * 100)
  })
})

app.listen(3000)

console.log('api stub listening on 3000')
