import React, { useState } from "react";
import "./Form.css";

const Form = ({ onSubmit, rating, comment, setRating, setComment }) => {
  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ rating, comment });
    setRating(5);
    setComment("");
  };

  return (
    <form className="add-review-form-container" onSubmit={handleSubmit}>
      <h2>Add a review</h2>

      <div className="form-group">
        <label htmlFor="rating">Rating:</label>
        <select
          id="rating"
          name="rating"
          value={rating}
          onChange={handleRatingChange}
        >
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          name="comment"
          rows={10}
          value={comment}
          onChange={handleCommentChange}
        />

        <button className="mt-5" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
