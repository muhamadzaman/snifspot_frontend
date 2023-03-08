import React, { useState } from "react";
import axios from "axios";
import "./AddSpotForm.css";
import spotApi from "../../../api/spot";

const AddSpotForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState("");

  console.log(images);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);

    for (let i = 0; i < images.length; i++) {
      formData.append("images[]", images[i]);
    }

    try {
      const response = await spotApi.post("/spots", formData);

      setTitle("");
      setDescription("");
      setImages([]);
      setPrice("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="add-spot-form" onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>

      <label>
        Description:
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>

      <label>
        Images:
        <input
          type="file"
          multiple
          onChange={(event) => setImages(event.target.files)}
        />
      </label>

      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </label>

      <button type="submit">Add Spot</button>
    </form>
  );
};

export default AddSpotForm;
