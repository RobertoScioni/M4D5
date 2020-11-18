import React from "react"
import App from "../App.js"
import { Card } from "react-bootstrap"

class SingleBook extends React.Component {
	constructor(props) {
		super(props)
		this.state = { selected: false }
	}
	render = (props) => {
		return (
			<Card
				style={{ width: "18rem" }}
				onClick={() => {
					this.setState({ selected: !this.state.selected })
				}}
			>
				<Card.Img variant="top" src={this.props.book.img} />
				<Card.Body>
					<Card.Title>{this.props.book.title}</Card.Title>
				</Card.Body>
			</Card>
		)
	}
}

export default SingleBook
