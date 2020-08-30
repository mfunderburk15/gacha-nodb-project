import React from 'react'
import Treasure from './Treasure'

const Loot = (props) => {
    console.log(props.getLoot)
    return (
        <section className='loot-display'>
            <Treasure
                loot={props.loot}
                getLoot={props.getLoot}
            />
        </section>
    )
}
export default Loot