import React from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from "./components/WarningSign"
import MyBadge from "./components/MyBadge"
import SingleBook from "./components/SingleBook"
import Books from "./data/fantasy.json"

const book = Books[0]
class App extends React.Component {
	render = () => {
		return (
			<div className="App">
				<WarningSign text="Error"> </WarningSign>
				<MyBadge text="idk" color="primary"></MyBadge>
				<SingleBook book={book}></SingleBook>
			</div>
		)
	}
}

export default App
