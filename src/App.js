import React from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from "./components/WarningSign"

class App extends React.Component {
	render = () => {
		return (
			<div className="App">
				<WarningSign text="Error"> </WarningSign>
			</div>
		)
	}
}

export default App
