import React from "react"
import img_avatar from "../../Assets/img_avatar.png"
import "./Card.css"

function Card(props) {
  return (
    <div className="card">
      <h4>{props.name}</h4>
      <img src={img_avatar} alt="Avatar" />
      <p>{props.text}</p>
      <table className="pure-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Specification</th>
            <th>{props.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Moisture</td>
            <td>{props.moisture}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Volatile Matter</td>
            <td>{props.volatileMatter}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Fixed Carbon</td>
            <td>{props.fixedCarbon}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Sulfur</td>
            <td>{props.sulfur}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Ash</td>
            <td>{props.ash}</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Clarific Value</td>
            <td>{props.clarificValue}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Card
