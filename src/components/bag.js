import React from 'react'
import Inventory from './Inventory'

const Bag = (props) => {
    return (
        <section className="bag-container">
            <div className="bag">
                <h2 className='inventory'>Inventory:</h2>
                {props.bag.inventory.map(element => {
                    return <Inventory
                        sellItem={props.sellItem}
                        useItem={props.useItem}
                        key={element.bagId}
                        data={element}
                    />
                })}
                <div className='gold'>
                    Gold: {props.bag.gold}
                </div>
            </div>
        </section>
    )
}
export default Bag