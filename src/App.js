// whenever we wanna generate a id we can use *uuidv4*
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//browserrouter uses the html5 history api to keep our ui in sync with the URL
//hashrouter uses hash portion of the url to keep it in sync

import React from "react";
import "./App.css";
import Header from "./components/Header";
// import FeedbackItem from './components/FeedbackItem';//not needed as we need more feedback not just a single one
import FeedbackList from "./components/FeedbackList";

import FeedBackStats from "./components/FeedBackStats";
import FeedBackform from "./components/FeedBackform";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  // set is immutable we cannot change it we need to make a copy  a of it

  return (
    <FeedbackProvider>
      {/* <Header bgColor='red' textColor='blue' /> */}
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedBackform />
                  <FeedBackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
            {/* component is now set using element in router dom */}
          </Routes>
        </div>
        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
}

export default App;

{
  /* <header className="App-header">
                      <img src={logo} className="App-logo" alt="logo" />
                      <p>
                        Edit <code>src/App.js</code> and save to reload.
                      </p>   
                      <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn React
                      </a>
                    </header> */
}
{
  /* ternary operator, "no" can be replaced with *null* which can be removed by removing "?" with "&&" we can also put the content---> JSX in the conditional in a variable and use it
          like : {loading && variablename}*/
}

{
  /* {loading && ( 
          <div className='comments'>
            <h3>Comments({comments.length})</h3>
            <ul>
              {comments.map((comment, index)=>(
                  <li key={index}>{comment.text}</li>
              ))}
            </ul>
          </div>) } */
}
