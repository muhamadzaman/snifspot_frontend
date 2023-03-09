import React, { useState } from "react";
import axios from "axios";
import "./AddSpotForm.css";
import Form from "../Form/Form";
import { CircularProgress } from "@mui/material";
import spotApi from "../../../api/spot";

const AddSpotForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState("");
  const [imgs, setImgs] = useState(images);
  const [loading, setLoading] = useState(false);

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

  const imagesToBase64 = async (filesList) => {
    const files = filesList.map((file) => {
      return new Promise((res, rej) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          res(reader.result);
        };
      });
    });
    let arr = await Promise.all(files);
    setImgs([...imgs, ...arr]);
  };
  const handleClick = (index) => {
    setImages(images.filter((image, ind) => ind !== index));
    setImgs(imgs.filter((image, ind) => ind !== index));
  };

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <Form
          handleSubmit={handleSubmit}
          edit={true}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          images={images}
          setImages={setImages}
          price={price}
          setPrice={setPrice}
        />
      )}
    </>
    // <form className="add-spot-form" onSubmit={handleSubmit}>
    //   <label>
    //     Title:
    //     <input
    //       type="text"
    //       value={title}
    //       onChange={(event) => setTitle(event.target.value)}
    //     />
    //   </label>

    //   <label>
    //     Description:
    //     <textarea
    //       value={description}
    //       onChange={(event) => setDescription(event.target.value)}
    //     />
    //   </label>

    //   <label>
    //     Images:
    //     <input
    //       type="file"
    //       multiple
    //       onChange={(event) => setImages(event.target.files)}
    //     />
    //   </label>
    //   <div style={{ display: "flex" }}>
    //     {imgs.map((image, index) => (
    //       <div class="img-wrap">
    //         <span class="close" onClick={() => handleClick(index)}>
    //           &times;
    //         </span>
    //         <img style={{ height: "100px", width: "100px" }} src={image} />
    //       </div>
    //     ))}
    //   </div>

    //   <label>
    //     Price:
    //     <input
    //       type="number"
    //       value={price}
    //       onChange={(event) => setPrice(event.target.value)}
    //     />
    //   </label>

    //   <button type="submit">Add Spot</button>
    // </form>
  );
};

export default AddSpotForm;
