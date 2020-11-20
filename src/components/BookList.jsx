import React from "react"
import { Container, Row, Col, Form, Modal } from "react-bootstrap"
import SingleBook from "./SingleBookAdvanced"
import CommentArea from "./CommentArea.jsx"

class BookList extends React.Component {
	constructor(props) {
		super(props)
		this.state = { books: props.BookList, queryL: 0, Selected: false }
	}
	HandleSelection = (book) => this.setState({ Selected: book })
	HideModal = () => this.setState({ Selected: false })
	render = (props) => {
		return (
			<>
				<Form>
					<Form.Control
						type="text"
						onChange={(event) => {
							if (event.target.value.length < this.state.queryL) {
								this.state = {
									books: this.props.BookList,
									queryL: event.target.value.length,
								}
							}
							const results = this.state.books.filter((book) =>
								book.title
									.toLowerCase()
									.includes(event.target.value.toLowerCase())
							)
							this.setState({
								books: results,
								queryL: event.target.value.length,
							})
						}}
					></Form.Control>
				</Form>
				<Container>
					<Row>
						{this.state.books.map((book, index) => (
							<Col
								id={book.asin}
								key={book.asin}
								md={4}
								onClick={() => this.HandleSelection(book)}
							>
								<SingleBook book={book} />
							</Col>
						))}
					</Row>
				</Container>
				<Modal
					show={this.state.Selected}
					onHide={this.HideModal}
					keyboard={false}
					backdrop="static"
				>
					<Modal.Header closeButton>
						<Modal.Title>{this.state.Selected.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<CommentArea book={this.state.Selected}></CommentArea>
					</Modal.Body>
					<Modal.Footer></Modal.Footer>
				</Modal>
			</>
		)
	}
}

export default BookList
