import React from "react";
import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
function FeedBackform({ handleAdd }) {
  const [text, setText] = useState("");
  // connect the input to the above piece of state so that when i type in it has to be put in the piece of state
  const [rating, setRating] = useState(10);

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    // validation will be done here

    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be atleast 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedBack = {
        text: text,
        //setting an object with the text as teh key and this the value of the state which is connected TO the text field

        rating: rating,
      };
      handleAdd(newFeedBack);
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>how would you rate your service with us</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Wrie a Review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
          {/*a piece of state for each input in the form, so for the text input,  set a state using useState hook */}
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedBackform;
