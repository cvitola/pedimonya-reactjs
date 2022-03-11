import React ,{useState} from 'react'
import { ContainerCount, Control, Btn} from './CountStyles';

const Count = ({count, handleAdd, handleSubs}) => {
  /*Context*/
 
  return (
    <ContainerCount>
      <p>Cantidad</p>
      <Control>
          <Btn onClick={handleSubs}>-</Btn>
          <input name={count} value={count} disabled/>
          <Btn onClick={handleAdd}>+</Btn>
      </Control>
</ContainerCount>
  )
}

export default Count