import React from "react"
import App from "../App.js"
import { Alert } from "react-bootstrap"
import Books from "../data/fantasy.json"

const WarningSign = (props) => {
	console.log("props", props)
	return <Alert variant="danger">{props.text}</Alert>
}

export default WarningSign
