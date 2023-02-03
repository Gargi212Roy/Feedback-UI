import { editableInputTypes } from "@testing-library/user-event/dist/utils/edit/isEditable";
import React, { createContext, useState } from "react";
// import logo from './logo.svg';
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This item 2",
      rating: 10,
    },
    {
      id: 3,
      text: "This item 3",
      rating: 8,
    },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    // whenever we click on one of the pencil items --> that item along with their particular id, the rating and the text will go into that item
    edit: false,
    // if we click on the pencil button edit will be set to true---> we are in edit mode
  });
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
