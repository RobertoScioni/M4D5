import React from "react"
import "./App.css"
import WarningSign from "./components/WarningSign"

class App extends React.Component {
	render() {
		return (
			<>
				<WarningSign address="{text:'ERROR'}" />
			</>
		)
	}
}

export default App
