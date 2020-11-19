import React from "react"
import { ListGroup } from "react-bootstrap"
import AddComment from "./AddComment"
import Comment from "./Comment"
/**
 * this class displays a comment list for a book whose ASIN/ISBN is passed as a comment
 */

class CommentList extends React.Component {
	constructor(props) {
		super(props)
		this.state = { comments: {}, asin: this.props.asin }
	}
	componentDidMount = async (props) => {
		try {
			let comments = await fetch(
				"https://striveschool-api.herokuapp.com/api/comments/" +
					this.state.asin,
				{
					headers: {
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NmUzNTk4MzViMDAwMTc1ODRlZWQiLCJpYXQiOjE2MDU3OTY1MjYsImV4cCI6MTYwNzAwNjEyNn0.-oGCfBFA0yIwQKR-zLkDkfxQ2fcI1NWOzmpi9KACWQA",
					},
					method: "GET",
				}
			)
			comments = await comments.json()
			this.setState({ comments })
		} catch (error) {
			console.log("error", error)
		}
	}
	render = (props) => {
		return (
			<>
				<p>Comments</p>
				<ListGroup>
					{Array.from(this.state.comments).map((comment) => (
						<Comment comment={comment}></Comment>
					))}
				</ListGroup>
				<AddComment asin={this.props.asin}></AddComment>
			</>
		)
	}
}

export default CommentList
