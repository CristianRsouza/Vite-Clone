import { useState } from 'react'
import './boxs.css'

const Boxs = () => {
  
    const [box, setBox] = useState([
        {
            id: 1,
            name: 'Lorem',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Dolor voluptatem',
        }, {
            id: 2,
            name: 'Lorem',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Dolor voluptatem',
        }, {
            id: 3,
            name: 'Lorem',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Dolor voluptatem',
        }, {
            id: 4,
            name: 'Lorem',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Dolor voluptatem',
        }, {
            id: 5,
            name: 'Lorem',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Dolor voluptatem',
        }, {
            id: 6,
            name: 'Lorem',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Dolor voluptatem',
        }, ])
    return(
        <div className='Boxs'>
            <div className='Boxs_Container'> 
                <div className='Box_container'> 
                {box.map(box => <li key={box.id}>
                    <h1>{box.name}</h1>
                    <p>{box.text}</p>
                </li>)

                }
                </div>
            </div>
        </div>
    )
}

export default Boxs