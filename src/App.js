// import logo from './logo.svg';
import { v4 as uuidv4 } from "uuid";
// whenever we wanna generate a id we can use *uuidv4*
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
// import FeedbackItem from './components/FeedbackItem';//not needed as we need more feedback not just a single one
import FeedbackList from "./components/FeedbackList";
import feedbackData from "./data/feedbackData";
import FeedBackStats from "./components/FeedBackStats";
import FeedBackform from "./components/FeedBackform";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  // set is immutable we cannot change it we need to make a copy  a of it

  const addFeedBack = (newFeedBack) => {
    newFeedBack.id = uuidv4();
    setFeedback([newFeedBack, ...feedback]);
    // here we are taking all the objects that are already in the feedback and putting in into the array and in front er put newFeedBack, now it'll include both current feedback and new gfeedback
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      {/* <Header bgColor='red' textColor='blue' /> */}
      <Header />
      <div className="container">
        <FeedBackform handleAdd={addFeedBack} />
        <FeedBackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        {/* <header className="App-header">
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
                  </header> */}
        {/* ternary operator, "no" can be replaced with *null* which can be removed by removing "?" with "&&" we can also put the content---> JSX in the conditional in a variable and use it
        like : {loading && variablename}*/}

        {/* {loading && ( 
        <div className='comments'>
          <h3>Comments({comments.length})</h3>
          <ul>
            {comments.map((comment, index)=>(
                <li key={index}>{comment.text}</li>
            ))}
          </ul>
        </div>) } */}
      </div>
    </>
  );
}

export default App;
