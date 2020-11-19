import React from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Books from "./data/fantasy.json"
import BookList from "./components/BookList"
class App extends React.Component {
	render = () => {
		return (
			<div className="App">
				<BookList BookList={Books} />
			</div>
		)
	}
}

export default App
