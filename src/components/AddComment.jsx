import React from "react"
import { Form, FormControl, Button } from "react-bootstrap"

class AddComment extends React.Component {
	state = {
		comment: {
			comment: "",
			number: 0,
			elementId: this.props.asin,
		},
		loadinf: false,
	}

	sendComment = async (event) => {
		try {
			await fetch(
				"https://striveschool-api.herokuapp.com/api/comments/" +
					this.props.asin,
				{
					headers: {
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NmUzNTk4MzViMDAwMTc1ODRlZWQiLCJpYXQiOjE2MDU3OTY1MjYsImV4cCI6MTYwNzAwNjEyNn0.-oGCfBFA0yIwQKR-zLkDkfxQ2fcI1NWOzmpi9KACWQA",
						"Content-Type": "application/json",
					},
					method: "POST",
					body: JSON.stringify(this.state.comment),
				}
			)
		} catch (error) {
			console.log("error")
		}
	}

	updateComment = (event) => {
		try {
			let comment = { ...this.state.comment }
			let currentField = event.target.name
			comment[currentField] = event.currentField.value
			this.setState({ comment })
		} catch (error) {
			console.log(error)
		}
	}

	render = (props) => {
		return (
			<Form>
				<FormControl
					type="text"
					name="comment"
					onChange={this.updateComment}
				></FormControl>
				<FormControl
					type="number"
					name="comment"
					onChange={this.updateComment}
				></FormControl>
				<Button onClick={this.sendComment}></Button>
			</Form>
		)
	}
}

export default AddComment
