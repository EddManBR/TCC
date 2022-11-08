import React from 'react'
import { Link } from 'react-router-dom'

export default function SidebarButton(props) {
  return (
    <Link to={props.to}>
        <div>
            {props.icon}
            <p>{props.title}</p>
        </div>
    </Link>
  )
}
