import React, { Component } from 'react'
import Bag from './bag'
import Loot from './Loot'

import Axios from 'axios'

class Display extends Component {
    constructor() {
        super()
        this.state = {
            loot: {},
            bag: { gold: 0, inventory: [] },
            full: false,
        }
        this.getLoot = this.getLoot.bind(this)
        this.addToBag = this.addToBag.bind(this)
        this.sellItem = this.sellItem.bind(this)
        this.useItem = this.useItem.bind(this)
        this.sendToBank = this.sendToBank.bind(this)
        this.fullBag = this.fullBag.bind(this)
    }

    componentDidMount() {
        Axios.get('/api/bag').then((response) => {
            this.setState({
                bag: response.data,
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    getLoot() {
        Axios.get('/api/loot').then((response) => {
            this.addToBag(response.data.id)
            this.setState({
                loot: response.data,
            })
        })
    }

    addToBag(id) {
        Axios.post('/api/bag', { id }).then((response) => {
            if (response.data.message && response.data.message === "bag is full") {
                this.fullBag()
                this.setState({
                    bag: response.data.bag
                })

            }
            else {
                this.setState({
                    bag: response.data,
                })
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    sellItem(bagId) {
        Axios.delete(`/api/bag/${bagId}`).then((response) => {
            this.setState({
                bag: response.data,
            })
        })
    }

    useItem(bagId) {
        Axios.put(`/api/bag/${bagId}`).then((response) => {
            this.setState({
                bag: response.data,
            })
        })
    }

    sendToBank() {
        Axios.delete('/api/bag').then((response) => {
            this.setState({
                bag: response.data
            })
        })
    }

    fullBag() {
        this.setState({
            full: !this.state.full
        })
    }

    render() {
        console.log(document.body)
        return (
            <div className="display">
                <Loot
                    loot={this.state.loot}
                    getLoot={this.getLoot}
                    addToBag={this.addToBag}
                    full={this.state.full}
                    fullBag={this.fullBag}
                />
                <Bag
                    bag={this.state.bag}
                    sellItem={this.sellItem}
                    useItem={this.useItem}
                    sendToBank={this.sendToBank}
                />
            </div>
        )
    }
}

export default Display