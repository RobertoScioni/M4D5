import React from "react"
import { Button, ListGroupItem } from "react-bootstrap"

const handleDelete = async (id) => {
	try {
		alert("deleting")
		let comments = await fetch(
			"https://striveschool-api.herokuapp.com/api/comments/_id=" + id,
			{
				headers: {
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NmUzNTk4MzViMDAwMTc1ODRlZWQiLCJpYXQiOjE2MDU4MjA1NjUsImV4cCI6MTYwNzAzMDE2NX0.mgz_c-3UHAribI3ogIYDAyR7XqpT7ZWCzSPHwrhU19w",
				},
				method: "DELETE",
			}
		)
		comments = await comments.json()
		this.setState({ comments })
	} catch (error) {
		console.log("error", error)
	}
}

const Comment = (props) => (
	<ListGroupItem key={props.comment.asin}>
		<p>{props.comment.comment}</p>
		<Button variant="danger" onClick={() => handleDelete(props.comment._id)}>
			Delete
		</Button>
	</ListGroupItem>
)

export default Comment
