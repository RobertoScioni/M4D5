import React from "react"
import { Badge, Card, Modal } from "react-bootstrap"
import CommentArea from "./CommentArea.jsx"

class SingleBook extends React.Component {
	constructor(props) {
		super(props)
		this.state = { selected: false }
	}
	toggleModal = () => this.setState({ selected: !this.state.selected })
	render = (props) => {
		return (
			<Card onClick={this.toggleModal}>
				<Card.Img variant="top" src={this.props.book.img} />
				<Card.Body>
					<Card.Title>{this.props.book.title}</Card.Title>
				</Card.Body>
				<Card.Footer>
					<Badge variant="success">{this.props.book.price} $$</Badge>
				</Card.Footer>
				<Modal
					show={this.state.selected}
					onHide={this.toggleModal}
					keyboard={false}
					backdrop="static"
				>
					<Modal.Header closeButton>
						<Modal.Title>Modal title</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<CommentArea book={this.props.book}></CommentArea>
					</Modal.Body>
					<Modal.Footer></Modal.Footer>
				</Modal>
			</Card>
		)
	}
}

export default SingleBook
