import React from "react"

const PortfolioItem = (props) => (
    <div>
        <h1>Project {props.match.params.item}</h1>
        <p>This is the page for my project {props.match.params.item}</p>
    </div>
)

export default PortfolioItem