import React from 'react'
import {Monster} from '../../App'
import './card.styles.css'

type CardProps = {
  monster : Monster
}

const Card= ({monster}: CardProps) => {
const {id, name, email} = monster
      return (
       <div className="card-container" key={id}>
         <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
         <h2>{name}</h2>
         <h1>{email}</h1>
       </div>
       
      )
   
}

export default Card 