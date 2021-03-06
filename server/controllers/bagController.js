const loot = require('../data.json')
const { request } = require('express')
let bagId = 0

const bag = { gold: 0, inventory: [] }

const updateTotalGold = (num) => {
    bag.gold += num
}

module.exports = {
    getBag: (request, response) => {
        response.status(200).send(bag)
    },
    addToBag: (request, response) => {
        const { id } = request.body

        if (bag.inventory.length > 8) {
            return response.status(200).send({
                bag: bag, message: "bag is full"
            })
        } else {
            const treasure = loot.find((element) => element.id === id)

            const { name, rating, durability, price, img, max } = treasure

            treasure.BagId = bagId

            bag.inventory.push({ id, name, rating, durability, price, img, max })

        }
        bag.inventory.forEach((element, index) => {
            element.bagId = index
        })

        response.status(200).send(bag)
    },
    useItem: (request, response) => {
        const { bag_id } = request.params
        const index = bag.inventory.findIndex((element) => element.bagId === (+bag_id))
        console.log(bag.inventory.bagId)
        if (index === -1) {
            return response.status(404).send('Item is not in bag')
        }

        if (bag.inventory[index].durability > 1) {
            bag.inventory[index].durability -= 1
        } else {
            bag.inventory.splice(index, 1)
        }


        response.status(200).send(bag)

    },
    sellItem: (request, response) => {
        const { bag_id } = request.params
        const index = bag.inventory.findIndex((element) => element.bagId === (+bag_id))

        if (index === -1) {
            return response.status(404).send('Item is not in bag')
        }
        updateTotalGold(bag.inventory[index].price)
        bag.inventory.splice(index, 1)


        response.status(200).send(bag)
    },

    sendToBank: (request, response) => {
        bag.gold = 0
        bag.inventory = []

        response.status(200).send(bag)
    }
}