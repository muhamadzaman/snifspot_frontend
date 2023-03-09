import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
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
      <div className="card-city">
        <div className="seo-container">
          <div className="d-flex spot-breadcrumbs">
            <ol vocab="https://schema.org/" typeof="BreadcrumbList">
              <li property="itemListElement" typeof="ListItem">
                <a property="item" typeof="WebPage" id="/" href="/">
                  <span property="name" className="spot-breadcrumbs__name link">
                    Home
                  </span>
                </a>
              </li>
              <div className="spot-breadcrumbs__icon-right">
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.0005 19.9985C1.4885 19.9985 0.9765 19.8025 0.5865 19.4125C-0.1955 18.6305 -0.1955 17.3665 0.5865 16.5845L7.1965 9.97454L0.8365 3.38854C0.0705 2.59254 0.0924992 1.32654 0.886499 0.560545C1.6825 -0.205455 2.9485 -0.183456 3.7145 0.608544L11.4385 8.60854C12.1965 9.39454 12.1865 10.6405 11.4145 11.4125L3.4145 19.4125C3.0245 19.8025 2.5125 19.9985 2.0005 19.9985Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <li property="itemListElement" typeof="ListItem" className="">
                <a
                  property="item"
                  typeof="WebPage"
                  id="/listings"
                  href="/listings"
                >
                  <span property="name" className="spot-breadcrumbs__name link">
                    All dog parks
                  </span>
                </a>
              </li>
              <div className="spot-breadcrumbs__icon-right">
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.0005 19.9985C1.4885 19.9985 0.9765 19.8025 0.5865 19.4125C-0.1955 18.6305 -0.1955 17.3665 0.5865 16.5845L7.1965 9.97454L0.8365 3.38854C0.0705 2.59254 0.0924992 1.32654 0.886499 0.560545C1.6825 -0.205455 2.9485 -0.183456 3.7145 0.608544L11.4385 8.60854C12.1965 9.39454 12.1865 10.6405 11.4145 11.4125L3.4145 19.4125C3.0245 19.8025 2.5125 19.9985 2.0005 19.9985Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <li property="itemListElement" typeof="ListItem" className="">
                <a
                  property="item"
                  typeof="WebPage"
                  id="/listings/washington"
                  href="/listings/washington"
                >
                  <span property="name" className="spot-breadcrumbs__name link">
                    Washington
                  </span>
                </a>
              </li>
              <div className="spot-breadcrumbs__icon-right">
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.0005 19.9985C1.4885 19.9985 0.9765 19.8025 0.5865 19.4125C-0.1955 18.6305 -0.1955 17.3665 0.5865 16.5845L7.1965 9.97454L0.8365 3.38854C0.0705 2.59254 0.0924992 1.32654 0.886499 0.560545C1.6825 -0.205455 2.9485 -0.183456 3.7145 0.608544L11.4385 8.60854C12.1965 9.39454 12.1865 10.6405 11.4145 11.4125L3.4145 19.4125C3.0245 19.8025 2.5125 19.9985 2.0005 19.9985Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <li
                property="itemListElement"
                typeof="ListItem"
                className="bc-spot-title-wrapper"
              >
                <span
                  property="name"
                  className="spot-breadcrumbs__name text-light bc-spot-title"
                >
                  Seattle
                </span>
              </li>
            </ol>
          </div>
          <div>
            <h1 className="seo-title">
              Rent the best private dog parks hosted by locals in Seattle,
              Washington
            </h1>
            <p className="seo-subtitle">
              Sniffspot's private dog parks are the best way to exercise your
              dog. We have the best variety and the best priced dog parks
              anywhere!
            </p>
            <div className="text-center">
              <a href="/">
                <button className="sniff-button sniff-button_size_lg sniff-button_color_primary sniff-button_block_mobile mt-4">
                  Explore spots in Seattle, WA
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
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
              {spot.images &&
                spot.images.map((image, index) => (
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
