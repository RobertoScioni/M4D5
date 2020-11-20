import React from "react"
import { Card } from "react-bootstrap"
import AddComment from "./AddComment"
import CommentList from "./CommentList"

class CommentArea extends React.Component {
	state = { reload: false }
	reload = () => {
		this.setState({ reload: !this.state.reload })
	}
	render = (props) => {
		return (
			<Card>
				<Card.Img variant="top" src={this.props.book.img} />
				<Card.Body>
					<CommentList
						asin={this.props.book.asin}
						reload={this.reload}
					></CommentList>
					<AddComment
						asin={this.props.book.asin}
						reload={this.reload}
					></AddComment>
				</Card.Body>
			</Card>
		)
	}
}

export default CommentArea
