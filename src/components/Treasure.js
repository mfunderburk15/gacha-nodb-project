import React, { Component } from 'react'
class Treasure extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    handleAddToBag() {
        this.props.addToBag(this.props.loot.id)

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
                    <img src="https://pngimg.com/uploads/treasure_chest/treasure_chest_PNG63.png" className="treasure-box" onClick={() => { this.props.getLoot(); this.handleAddToBag(); }} />
                </section>
            </div >
        )
    }
}

export default Treasure