import React from "react";
import Card from "./shared/Card";
import { useContext } from "react";
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

// import { useState } from 'react'

function FeedbackItem({ item }) {
  // const [rating, setRating]=useState(7)
  // const [text, setText]=useState('This is an example of feedback item')
  // const handleClick = () => {
  //   setRating((prev) => {
  //     return prev+1
  //   })

  // setRating(10)  //rating set in useState changed to 10 now rating = 10 is wrong as state in ract is immutable i.e. cannot be directly changed. it basically has to be reset. like if there is an array with a bunch of items, to add an extra item first the entire array has to be copied then the new item can be added at the top
  // }
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      {/* <button onClick={() => console.log(item.id)} className="close"> this is inline... we  can also have a separate function to call */}
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="Purple" />
      </button>
      <div className="text_display">{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
      {/* like an event which gets triggered onClick */}
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
