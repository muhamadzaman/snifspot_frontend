import React, { useState, useEffect } from "react";
import Form from "./Form/Form";
import spotApi from "../../api/spot";

const EditReview = ({ id, setOpen, rating: rt, comment: cm, setCreated }) => {
  console.log("cm", cm, "rt", rt);
  const [rating, setRating] = useState(rt);
  const [comment, setComment] = useState(cm);

  const handleSubmit = async () => {
    try {
      const response = await spotApi.put(`/reviews/${id}`, {
        rating,
        review_comment: comment,
      });

      setRating(5);
      setComment("");
      setOpen(false);
      setCreated(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      rating={rating}
      setRating={setRating}
      comment={comment}
      setComment={setComment}
      onSubmit={handleSubmit}
    ></Form>
  );
};

export default EditReview;
