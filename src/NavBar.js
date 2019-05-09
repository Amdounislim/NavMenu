import React from 'react'

export default function NavBar(props) {
  return (
    <ul className="navitem">{
      props.navItem.map(el => <li className="titel">{el.titel}
      {!el.sousitems ? null :
        <ul className='sousitems'> {el.sousitems.map(el => <li>{el}</li>)}
        </ul>
      }</li>

      )}
    </ul>
  )
}
