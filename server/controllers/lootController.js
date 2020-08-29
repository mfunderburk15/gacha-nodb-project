const loot = require('../data.json')

module.exports = {
    getLoot: (request, response) => {
        response.status(200)
            .send(loot[Math.floor(Math.random(loot.length - 1) * loot.length)])
    }
}