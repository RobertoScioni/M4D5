import React from "react"
import App from "../App.js"
import { Badge } from "react-bootstrap"

const MyBadge = (props) => {
	console.log("props", props)
	return <Badge variant={props.color}>{props.text}</Badge>
}

export default MyBadge
