import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

import "./SpotList.css";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
import Feature from "../../Feature/Feature";
import Instruction from "../../Instructions/Instruction";
import RatingIcon from "../../../Assets/Svgs/RatingIcon";
import LocationIcon from "../../../Assets/Svgs/LocationIcon";
import FenceIcon from "../../../Assets/Svgs/FenceIcon";
import RulerIcon from "../../../Assets/Svgs/RulerIcon";
import spotApi from "../../../api/spot";

const SpotList = () => {
  const [spots, setSpots] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const history = useNavigate();

  useEffect(() => {
    const fetchSpots = async () => {
      try {
        const response = await spotApi.get("/spots");
        console.log(response);
        setSpots(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSpots();
  }, []);

  const handleSortClick = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);

    const sortedSpots = [...spots].sort((a, b) => {
      if (newOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setSpots(sortedSpots);
  };
  const directionButtons = (direction) => {
    return (
      <span
        aria-hidden="true"
        className={direction === "Next" ? "button-next" : "button-prev"}
      >
        {direction === "Next" ? (
          <ArrowForwardIosTwoToneIcon />
        ) : (
          <ArrowBackIosNewSharpIcon />
        )}
      </span>
    );
  };

  return (
    <div>
      <div className="spot-list">
        {spots.map((spot) => (
          <div
            className="spot-item"
            key={spot.id}
            onClick={() => {
              history(`/spots/${spot.id}`);
            }}
          >
            <Carousel
              slide={false}
              indicators={false}
              nextIcon={directionButtons("Next")}
              prevIcon={directionButtons("Previous")}
            >
              {spot.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={`Image ${index}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <div className="spot-info">
              <h6 style={{ color: "#323232" }}>{spot.title}</h6>

              <p
                style={{
                  color: "#484848",
                  fontSize: 12,
                  fontWeight: 500,
                  fontFamily: "Work Sans",
                }}
              >
                {spot.description}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <span
                    style={{
                      backgroundColor: "#f5f5f5",
                      borderRadius: "100px",
                      padding: "2px 8px",
                      fontSize: "14px",
                    }}
                  >
                    <FenceIcon />
                    Fully Fenced
                  </span>
                  <span
                    style={{
                      backgroundColor: "#f5f5f5",
                      borderRadius: "100px",
                      padding: "2px 8px",
                      fontSize: "14px",
                      marginLeft: "5px",
                    }}
                  >
                    <RulerIcon />
                    {"<"} 1 acre
                  </span>
                </div>

                <div
                  style={{
                    fontSize: "15px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <RatingIcon />
                  <span style={{ marginLeft: "5px" }}>
                    {" "}
                    <strong>
                      {spot.reviews.reduce(
                        (total, value) => (total += value.rating),
                        0
                      ) / spot.reviews.length}
                    </strong>{" "}
                    <span style={{ color: "darkgrey" }}>
                      ({spot.reviews.length})
                    </span>
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <div>
                  <span className="spot-price">
                    ${spot.price}{" "}
                    <span
                      style={{
                        color: "#484848",
                        fontSize: "14px",
                        lineHeight: "14px",
                      }}
                    >
                      dog / hour
                    </span>
                  </span>
                </div>
                <span style={{}}>
                  <LocationIcon />
                  Seattle, WA
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Feature />
      <Instruction />
    </div>
  );
};

export default SpotList;
