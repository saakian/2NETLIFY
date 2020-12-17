import React from 'react'
import {Link} from "react-router-dom"
import loga from "./images/logoo.png"
function one_comp() {
    return (
        <div>
            <h1>COMP_ONE</h1>
            <Link to="/two"> <button>COMP_TWO12</button> </Link>
            <img src={loga} alt ="logo"/>
        </div>
    )
}

export default one_comp
