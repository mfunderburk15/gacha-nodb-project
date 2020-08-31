import React from 'react'
import Treasure from './Treasure'

const Loot = (props) => {
    return (
        <section className='loot-display'>
            <Treasure
                loot={props.loot}
                getLoot={props.getLoot}
                addToBag={props.addToBag}
            />
        </section>
    )
}
export default Loot