import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import spotApi from "../../../api/spot";
import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";

const EditSpotForm = () => {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState();
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchSpots = async () => {
      try {
        const response = await spotApi.get(`/spots/${id}`);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setImages([...images, ...response.data.images]);
        setPrice(response.data.price);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSpots();
  }, []);

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
      const response = await spotApi.patch(`/spots/${id}`, formData);

      setTitle("");
      setDescription("");
      setImages([]);
      setPrice("");
    } catch (error) {
      console.error(error);
    }
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
  );
};
export default EditSpotForm;
