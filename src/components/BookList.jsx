import React from "react"
import App from "../App.js"
import { Container, Row, Col } from "react-bootstrap"
import fantasyBooks from "../data/fantasy.json"
import SingleBook from "./SingleBook"

class BookList extends React.Component {
    books = fantasyBooks;

    render = () => {
	return <>

            <Container>
                <Row>
                    {
                        this.props.BookList.map((book, index) => <SingleBook book={book} />)
                    } 
                </Row>
            </Container>
    
    </>
		
	}
}

export default BookList
