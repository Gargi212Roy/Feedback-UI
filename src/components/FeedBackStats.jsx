import React from 'react'
import PropTypes from 'prop-types'


function FeedBackStats({feedback}) {
    // calculate ratings(reduce is used as we want to loop thourgh all the ratings and add them together and then multiply it by the length of the feedback items that I'd give the average). Reduce takes in an accumulator (acc) and current value(cur) and a second argument of the default for the accumulator ----> 0
    let average = feedback.reduce((acc,cur) => {
        return acc + cur.rating
    }, 0) / feedback.length
    average =average.toFixed(1).replace(/[.,]0$/, '')
    //.replace to add a regular exp. in order to get rid of trailing zeros, basically saying if it's 0 replace it with nothing 
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews </h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

FeedBackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}

export default FeedBackStats
