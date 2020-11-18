import React from "react"
import App from "../App.js"
import { Card } from "react-bootstrap"

const SingleBook = (props) => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={props.book.img} />
			<Card.Body>
				<Card.Title>{props.book.title}</Card.Title>
			</Card.Body>
		</Card>
	)
}

export default SingleBook
