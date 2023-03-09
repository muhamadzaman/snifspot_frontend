import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form = ({
  handleSubmit,
  title,
  setTitle,
  description,
  setDescription,
  images,
  setImages,
  price,
  setPrice,
}) => {
  const [imgs, setImgs] = useState(images);
  const navigate = useNavigate();

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
    navigate("/");
  };

  return (
    <form className="add-spot-form mt-5" onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          required
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>

      <label>
        Description:
        <textarea
          value={description}
          required
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>

      <label>
        Images:
        <input
          type="file"
          multiple
          required
          onChange={(event) => {
            setImages([...images, ...event.target.files]);
            imagesToBase64([...event.target.files]);
          }}
        />
      </label>
      <div style={{ display: "flex" }}>
        {imgs.map((image, index) => (
          <div class="img-wrap">
            <span class="close" onClick={() => handleClick(index)}>
              &times;
            </span>
            <img style={{ height: "100px", width: "100px" }} src={image} />
          </div>
        ))}
      </div>

      <label>
        Price:
        <input
          type="number"
          value={price}
          required
          onChange={(event) => setPrice(event.target.value)}
        />
      </label>

      <button type="submit">Add Spot</button>
    </form>
  );
};

export default Form;
