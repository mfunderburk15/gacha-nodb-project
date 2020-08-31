const loot = require('../data.json')

module.exports = {
    getLoot: (request, response) => {
        response.status(200)
            .send(loot[Math.floor(Math.random(loot.length - 1) * loot.length)])
    }

    // getLoot: (request, response) => {
    //     response.status(200)
    //         .send(function lootBox(){
    //             const total = loot.reduce((acc, ele) => {
    //                 return acc + ele.prob
    //             }, 0)

    //             const randVal = Math.floor(Math.random(1-1) * total)


    //         }
    //         )
    // }
}