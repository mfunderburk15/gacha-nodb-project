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
        }
        this.getLoot = this.getLoot.bind(this)
        this.addToBag = this.addToBag.bind(this)
        this.sellItem = this.sellItem.bind(this)
        this.useItem = this.useItem.bind(this)
    }

    componentDidMount() {
        Axios.get('/api/bag').then((response) => {
            this.setState({
                bag: response.data,
            })
        })
    }

    getLoot() {
        Axios.get('/api/loot').then((response) => {
            this.setState({
                loot: response.data,
            })
        })
    }

    addToBag(id) {
        Axios.post('/api/bag', { id }).then((response) => {
            this.setState({
                bag: response.data,
            })
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



    render() {
        return (
            <div className="display">
                <Loot
                    loot={this.state.loot}
                    getLoot={this.getLoot}
                    addToBag={this.addToBag}
                />
                <Bag
                    bag={this.state.bag}
                    sellItem={this.sellItem}
                    useItem={this.useItem}
                />
            </div>
        )
    }
}

export default Display