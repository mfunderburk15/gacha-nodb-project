import React from 'react'

const Inventory = (props) => {
    const { bagId } = props.data
    return (
        <section className="item">
            <img className="property-image" src={props.data.img} />
            <div className='property-info'>
                <p className='property-name'>{props.data.name}</p>
                <p className='property-price'>Price: {props.data.price}</p>
                <button className='sell-item' onClick={() => props.sellItem(bagId)}>Sell</button>
                <button className='use-item' onClick={() => props.useItem(bagId)}>Use</button>
                <p className='durability'>{props.data.durability}/{props.data.max}</p>
            </div>
        </section>
    )
}
export default Inventory
