import React, { useState, useEffect } from 'react';
import * as BooksAPI from '../BooksAPI';
import BookShelf from '../myreads_components/BookShelf';
import {useHistory} from "react-router-dom";

const BookSearchPage = (props) => {   
  const [searchTerm, setSearchTerm] = useState("");
  const [bookSearchResults, setBookSearchResults] = useState([]);
  
  useEffect(() => {
    BooksAPI.search(searchTerm).then((response) => {
     setBookSearchResults(response)
    })
  }, [searchTerm]);

  let history = useHistory();
  const redirect = () => {
    history.push('/')
  }
  
  return (
    <div className="app">
      <div className="serach-books">
        <div className="search-books-bar">
            <button className="close-search" onClick={redirect}>Redirect</button>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} autoFocus/>
          </div>
        </div>
      </div>
      <br/><br/><br/>
      {bookSearchResults && <BookShelf books={bookSearchResults} bookShelfTitle={null} updateBookShelf={props.updateBookShelf}/>}
    </div>
  );
}

export default BookSearchPage;