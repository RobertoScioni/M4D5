import React from "react"
import { Card } from "react-bootstrap"
import CommentList from "./CommentList"

class CommentArea extends React.Component {
	render = (props) => {
		return (
			<Card>
				<Card.Img variant="top" src={this.props.book.img} />
				<Card.Body>
					<CommentList asin={this.props.book.asin}></CommentList>
				</Card.Body>
			</Card>
		)
	}
}

export default CommentArea
