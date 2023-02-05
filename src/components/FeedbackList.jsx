// import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import React from "react";

import FeedbackItem from "./FeedbackItem";
import Spinner from "./shared/Spinner";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>;
  }

  // return (
  //   <div className="feedback-list">
  //     <AnimatePresence>
  //       {feedback.map((item) => (
  //         <motion.div
  //           key={item.id}
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           exit={{ opacity: 0 }}
  //         >
  //           <FeedbackItem
  //             key={item.id}
  //             item={item}
  //             handleDelete={handleDelete}
  //           />
  //         </motion.div>
  //       ))}
  //     </AnimatePresence>
  //   </div>
  // );
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// }; no longer needed as useContext hook is now being used
export default FeedbackList;
