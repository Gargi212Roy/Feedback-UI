import React, { createContext, useState, useEffect } from "react";
// import logo from './logo.svg';
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    // whenever we click on one of the pencil items --> that item along with their particular id, the rating and the text will go into that item
    edit: false,
    // if we click on the pencil button edit will be set to true---> we are in edit mode
  });
  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(
      `http://localhost:4000/feedback?_sort=id&_order=desc`
    );
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

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

  // update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  //   set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit, //the piece of state that holds the item and the boolean
        isLoading,
        deleteFeedback,
        addFeedBack,
        editFeedback, //this function runs when feedbackEdit is called
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
