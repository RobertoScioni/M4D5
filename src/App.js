import React from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from "./components/WarningSign"
import MyBadge from "./components/MyBadge"
import SingleBook from "./components/SingleBookAdvanced"
import Books from "./data/fantasy.json"
import BookList from "./components/BookList"

const book = Books[0]
class App extends React.Component {
	render = () => {
		return (
			<div className="App">
				<WarningSign text="Error"> </WarningSign>
				<MyBadge text="idk" color="primary"></MyBadge>

				<BookList BookList={Books} />
			</div>
		)
	}
}

export default App
