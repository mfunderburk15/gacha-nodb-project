const express = require('express')
const lootCtrl = require('./controllers/lootController')
const bagCtrl = require('./controllers/bagController')


const app = express()
const SERVER_PORT = 4000

app.use(express.json())

//loot endpoints
app.get('/api/loot', lootCtrl.getLoot)

//bag endpoints
app.get('/api/bag', bagCtrl.getBag)
app.post('/api/bag', bagCtrl.addToBag)
app.put('/api/bag/:bag_id', bagCtrl.useItem)
app.delete('/api/bag/:bag_id', bagCtrl.sellItem)


app.listen(SERVER_PORT, () => { console.log(`This app is using server port: ${SERVER_PORT}`) })