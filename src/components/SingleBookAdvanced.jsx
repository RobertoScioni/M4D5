import React from "react"
import App from "../App.js"
import { Badge, Card } from "react-bootstrap"

class SingleBook extends React.Component {
	constructor(props) {
		super(props)
		this.state = { selected: false }
	}
	render = (props) => {
		return (
			<Card
				bg={this.state.selected ? "primary" : "light"}
				onClick={() => {
					this.setState({ selected: !this.state.selected })
				}}
			>
				<Card.Img variant="top" src={this.props.book.img} />
				<Card.Body>
					<Card.Title>{this.props.book.title}</Card.Title>
				</Card.Body>
				<Card.Footer>
					<Badge variant="success">{this.props.book.price} $$</Badge>
				</Card.Footer>
			</Card>
		)
	}
}

export default SingleBook
