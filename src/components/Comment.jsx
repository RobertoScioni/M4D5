import React from "react"
import { ListGroup, Button } from "react-bootstrap"

const Comment = (props) => (
	<ListGroup>
		<p>{props.comment.comment}</p>
		<Button variant="danger">Delete</Button>
	</ListGroup>
)

export default Comment
