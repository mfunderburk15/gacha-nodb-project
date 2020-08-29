const loot = require('../data.json')
const { request } = require('express')
let bagId = 0

const bag = { gold: 0, items: [] }

const updateTotalGold = (num) => {
    bag.gold += num
}

module.exports = {
    getBag: (request, response) => {
        response.status(200).send(bag)
    },
    addToBag: (request, response) => {
        const { id } = request.body

        if (bag.items.length > 8) {
            return alert('Bag is full')
        } else {
            const treasure = loot.find((element) => element.id === id)

            const { name, rating, durability, price, img } = treasure

            treasure.BagId = bagId

            bag.items.push({ id, name, rating, durability, price, img })

        }
        bag.items.forEach((element, index) => {
            element.bagId = index + 1
        })

        response.status(200).send(bag)
    },
    useItem: (request, response) => {
        const { bag_id } = request.params
        const index = bag.items.findIndex((element) => element.bagId === (+bag_id + 1))
        console.log(bag.items.bagId)
        if (index === -1) {
            return response.status(404).send('Item is not in bag')
        }

        if (bag.items[index].durability > 1) {
            bag.items[index].durability -= 1
        } else {
            bag.items.splice(index, 1)
        }


        response.status(200).send(bag)

    },
    sellItem: (request, response) => {
        const { bag_id } = request.params
        const index = bag.items.findIndex((element) => element.bagId === (+bag_id + 1))

        if (index === -1) {
            return response.status(404).send('Item is not in bag')
        }
        updateTotalGold(bag.items[index].price)
        bag.items.splice(index, 1)


        response.status(200).send(bag)
    },
}