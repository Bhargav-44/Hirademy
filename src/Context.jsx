import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = React.createContext();

const booksUrl = `https://softwium.com/api/books`;

const getBookDetail = () => {
  let book = localStorage.getItem("bookDetail");
  if (book) {
    book = JSON.parse(book);
  } else {
    book = {};
  }

  return book;
};

const AppProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [bookDetail, setBookDetail] = useState(getBookDetail);

  const fetchBooks = async (url) => {
    try {
      const { data } = await axios(url);
      setBooks(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const fetchBookDetails = async (id) => {
    try {
      const url = `https://softwium.com/api/books/${id}`;
      const { data } = await axios(url);
      setBookDetail(data);
    } catch (error) {
      console.log(error.response);
    }
  };



  useEffect(() => {
    fetchBooks(booksUrl);
  }, []);

  return (
    <AppContext.Provider
      value={{ books, setBooks, bookDetail, setBookDetail, fetchBookDetails }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
