import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import RatingIcon from "../../../Assets/Svgs/RatingIcon";
import LocationIcon from "../../../Assets/Svgs/LocationIcon";
import MemberIcon from "../../../Assets/Svgs/MemberIcon";
import FenceIcon from "../../../Assets/Svgs/FenceIcon";
import RulerIcon from "../../../Assets/Svgs/RulerIcon";
import SpotIcon from "../../../Assets/Svgs/SpotIcon";
import ScaleIcon from "../../../Assets/Svgs/ScaleIcon";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
import { Button, Grid, Box, Modal } from "@mui/material";
import GoogleMapReact from "google-map-react";
import { Link, useParams } from "react-router-dom";
import "./SpotDetails.css";
import { CircularProgress } from "@mui/material";

import ReviewsList from "../../Reviews/ReviewsList";
import spotApi from "../../../api/spot";
import AddReview from "../../Reviews/AddReview";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SpotDetails = () => {
  const [spot, setSpot] = useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(true);
  const [created, setCreated] = useState(false);

  const handleClose = () => setOpen(false);

  const addReview = () => {
    setOpen(true);
  };
  const { id } = useParams();

  useEffect(() => {
    const fetchSpots = async () => {
      try {
        const response = await spotApi.get(`/spots/${id}`);
        setSpot(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSpots();
  }, [created]);

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  const { title, description, images, price, reviews } = spot;
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
    <>
      {" "}
      {loading ? (
        <CircularProgress />
      ) : (
        <div className="details_main">
          <div className="show-details">
            <h1 className="snif-l2 snif-semibold mb-2">{title}</h1>
            <div className="info-left">
              <div>
                <LocationIcon />
                Seattle, Washington
              </div>
              <div className="spot-badge-offer-membership">
                <MemberIcon />
                <span>Membership offered</span>
              </div>
            </div>
            <div className="spot-header-detail">
              <div className="mobile-sub-info">
                <div
                  style={{
                    fontSize: "15px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <RatingIcon className="rating" />
                  <span
                    style={{
                      marginLeft: "5px",
                      marginRight: "5px",
                      fontSize: "15px",
                    }}
                  >
                    {" "}
                    {spot.reviews.reduce(
                      (total, value) => (total += value.rating),
                      0
                    ) / spot.reviews.length}{" "}
                  </span>

                  <span className="dot-separator"></span>
                  <span style={{ marginLeft: "8px" }}>
                    {spot.reviews.length} reviews
                  </span>
                </div>
                <div className="spot-top-badge snif-s1 snif-medium text-primary">
                  <SpotIcon />
                  <span>Top spot</span>
                </div>
              </div>
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
            </div>

            <Carousel
              slide={false}
              indicators={false}
              nextIcon={directionButtons("Next")}
              prevIcon={directionButtons("Previous")}
            >
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="carousel d-block w-100"
                    src={image}
                    alt={`Image ${index}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <hr />

            <div className="fencing ">
              <div className="snif-m1 snif-semibold mt-1 mb-3">Fencing</div>
              <div className="fence-details">
                <div style={{ width: "50%" }}>
                  <div className="enclosure">
                    <FenceIcon />
                    <div className="mb-l">
                      <p className="snif-p mb-1 snif-semibold">Enclosure</p>
                      <p className="snif-p mb-3 deep-gray">Fully Fenced</p>
                    </div>
                  </div>
                  <div className="fence-height">
                    <ScaleIcon />
                    <div className="mb-l">
                      <p className="snif-p mb-1 snif-semibold">
                        Fencing height (at lowest point)
                      </p>
                      <p className="snif-p mb-3 deep-gray">4 ft </p>
                    </div>
                  </div>
                </div>
                <div style={{ marginLeft: "50px" }}>
                  <p className="mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="icon"
                    >
                      <path
                        d="M.75 22.5a.75.75 0 0 1 0-1.5h.75v-9c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v9H9V3c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v18h1.5V7.5c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5V21h.75a.75.75 0 0 1 0 1.5H.75ZM21 21V7.5h-3V21h3Zm-7.5 0V3h-3v18h3ZM6 21v-9H3v9h3Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span className="snif-semibold">100% of guests</span> said
                    fencing at this spot was secure enough to contain their dogs
                  </p>
                  <div className="fence-gap">
                    <p className="snif-s1 snif-semibold">
                      Gaps or holes in fence:{" "}
                      <span className="snif-regular">No gaps</span>
                    </p>
                  </div>
                  <div className="fence-type mt-1">
                    <p className="snif-s1 snif-semibold">
                      Fencing type(s):{" "}
                      <span className="snif-regular">
                        Chain link - non-privacy
                      </span>
                    </p>
                  </div>
                  <div className="fence-detail break-word mt-1">
                    <p className="snif-s1 snif-semibold">
                      <span>Fencing details: </span>
                      <span className="snif-regular">
                        Goes all the way around the house.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <hr />
            </div>

            <h2 className="snif-m1 snif-semibold mt-3 mb-3">Description</h2>
            <div className="row">
              <div className="col-md-12 h4">
                <div className="dscrp snif-p">{description}</div>
              </div>
            </div>
            <hr />
            <h2 className="snif-m1 snif-semibold mt-3 mb-3">Cleanliness</h2>
            <div className="row">
              <div className="col-md-12 h4">
                <div className="dscrp snif-p">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="icon"
                  >
                    <path
                      d="M.75 22.5a.75.75 0 0 1 0-1.5h.75v-9c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v9H9V3c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v18h1.5V7.5c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5V21h.75a.75.75 0 0 1 0 1.5H.75ZM21 21V7.5h-3V21h3Zm-7.5 0V3h-3v18h3ZM6 21v-9H3v9h3Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="snif-semibold">100% of guests</span> said
                  this spot was as clean as expected during their visit.
                </div>
              </div>
            </div>
            <hr />
            <h2 className="snif-m1 snif-semibold mt-3 mb-3">Hazards</h2>
            <div className="row">
              <div className="col-md-12 h4">
                <div className="dscrp snif-p">
                  The deck can be slippery so please be careful.
                </div>
              </div>
            </div>
            <hr />
            <ReviewsList reviews={reviews} setCreated={setCreated} />
            <div>
              <Grid item xs={12}>
                <Button onClick={addReview}>Add Review</Button>
              </Grid>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box>
                  <AddReview
                    setOpen={setOpen}
                    id={id}
                    setCreated={setCreated}
                  />
                </Box>
              </Modal>
            </div>
            <Link to={`/spots/${id}/editSpot`}>EditSpot</Link>
          </div>
          <div className="booking">
            <div className="booking-main">
              <div>
                <p className="book-spot snif-medium">Book This Spot!</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <div>
                    <div>
                      <span
                        className="price snif-m1 snif-semibold"
                        style={{ marginRight: "10px" }}
                      >
                        ${spot.price}
                      </span>
                      per dog per hour
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: "15px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <RatingIcon className="rating" />
                    <span
                      style={{
                        marginLeft: "5px",
                        marginRight: "5px",
                        fontSize: "15px",
                      }}
                    >
                      {" "}
                      {reviews.reduce(
                        (total, value) => (total += value.rating),
                        0
                      ) / reviews.length}
                      <span style={{ marginLeft: "8px" }}>
                        ({reviews.length})
                      </span>
                    </span>
                  </div>
                </div>
                <div>
                  <button className="sniff-button sniff-button_size_lg sniff-button_color_primary sniff-button_block my-2">
                    Booking Now
                  </button>
                  <button className="sniff-button sniff-button_size_lg sniff-button_color_secondary sniff-button_block my-2">
                    Find an available time
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SpotDetails;
