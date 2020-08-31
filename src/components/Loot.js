import React from 'react'
import Treasure from './Treasure'

const Loot = (props) => {
    return (
        <section className='loot-display'>
            <Treasure
                loot={props.loot}
                getLoot={props.getLoot}
                addToBag={props.addToBag}
                full={props.full}
                fullBag={props.fullBag}
            />
        </section>
    )
}
export default Loot