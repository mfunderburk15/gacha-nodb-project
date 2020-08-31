import React, { Component } from 'react'
class Treasure extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    handleAddToBag() {
        this.props.addToBag(this.props.loot.id)
        console.log("hit addToBAg")

    }


    render() {
        return (
            <div className='treasure'>
                <section className='treasure-top'>
                    <div className='treasure-div'>
                        <img className='treasure-img' src={this.props.loot.img} />
                        <div className="treasure-info">
                            <p className='treasure-name'>{this.props.loot.name}</p>
                            <p className='treasure-price'>Gold: {this.props.loot.price}</p>
                        </div>
                    </div>
                </section>
                <section className='treasure-bottom'>
                    <img src="https://pngimg.com/uploads/treasure_chest/treasure_chest_PNG63.png" className="treasure-box" onClick={() => this.props.getLoot()} />
                </section>
            </div >
        )
    }
}

export default Treasure