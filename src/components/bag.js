import React from 'react'
import Inventory from './Inventory'

const Bag = (props) => {
    console.log("inventory", props.bag)
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
                <button onClick={() => props.sendToBank()} className='bank-button'>
                    Deposit
                </button>
            </div>
        </section>
    )
}
export default Bag