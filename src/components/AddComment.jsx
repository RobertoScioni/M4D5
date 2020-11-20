import React from "react"
import { Form, FormControl, Button } from "react-bootstrap"

class AddComment extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			comment: {
				comment: "",
				rate: "3",
				elementId: this.props.asin,
			},
			loading: false,
		}
	}

	sendComment = async (event) => {
		event.preventDefault()
		try {
			let body = JSON.stringify(this.state.comment)
			await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
				headers: new Headers({
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NmUzNTk4MzViMDAwMTc1ODRlZWQiLCJpYXQiOjE2MDU4MjA1NjUsImV4cCI6MTYwNzAzMDE2NX0.mgz_c-3UHAribI3ogIYDAyR7XqpT7ZWCzSPHwrhU19w",
					"Content-Type": "application/json",
				}),
				method: "POST",
				body: body,
			})
		} catch (error) {
			console.log("error")
		}
		this.props.reload()
	}

	updateComment = (event) => {
		let comment = { ...this.state.comment }
		let currentField = event.target.name
		comment[currentField] = event.target.value
		this.setState({ comment })
	}

	render = (props) => {
		return (
			<Form onSubmit={this.sendComment}>
				<FormControl
					type="text"
					name="comment"
					onChange={this.updateComment}
				></FormControl>
				<Button type="submit"> Post it</Button>
			</Form>
		)
	}
}

export default AddComment
