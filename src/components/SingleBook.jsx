import React, { useState } from "react"
import App from "../App.js"
import { Card } from "react-bootstrap"

// type whatever ={
// 	text: String,
// 	onClick(event: React.MouseEvent<Card>): void,
// };

const SingleBook = (props) => {
	const [toggled, setToggled] = useState(false)
	return (
		<Card style={{ width: "18rem" }} className="m3">
			<Card.Img variant="top" src={props.book.img} />
			<Card.Body>
				<Card.Title
					onClick={(event) => {
						setToggled(!toggled)
						props.onClick(event)
					}}
				>
					{props.book.title}(toggled: {toggled.toString()})
				</Card.Title>
			</Card.Body>
		</Card>
	)
}

export default SingleBook
