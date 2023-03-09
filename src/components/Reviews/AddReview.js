import React, { useState, useEffect } from "react";
import Form from "./Form/Form";
import spotApi from "../../api/spot";

const AddReview = ({ id, setOpen, setCreated }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await spotApi.post(
        "/reviews",
        {
          spot_id: id,
          rating,
          review_comment: comment,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

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

export default AddReview;
