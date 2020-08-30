import React from 'react'
import Inventory from './Inventory'

const Bag = (props) => {
    return (
        <section className="bag-container">
            <div className="bag">
                <h2>Inventory:</h2>
                {props.bag.inventory.map(element => {
                    return <Inventory
                        sellItem={props.sellItem}
                        useItem={props.useItem}
                        key={element.id}
                        data={element}
                    />
                })}
            </div>
            <div className='gold'>
                Gold: ${props.bag.gold}
            </div>
        </section>
    )
}
export default Bag