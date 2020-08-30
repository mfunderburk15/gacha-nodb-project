import React, { Component, cloneElement } from 'react'
import Loot from './Loot'

class Treasure extends Component {
    constructor() {
        super()
        this.state = {

        }
    }


    render() {
        return (
            <div className='treasure'>
                <section className='treasure-top'>
                    <img className='treasure-img' src={this.props.loot.img} />
                    <p className='treasure-name'>{this.props.loot.name}</p>
                    <p className='treasure-price'>{this.props.loot.price}</p>
                </section>
                <section className='treasure-bottom'>
                    <button onClick={() => this.props.getLoot()}>Get Loot</button>
                </section>
            </div >
        )
    }
}

export default Treasure