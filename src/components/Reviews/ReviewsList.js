import React, { useState, useEffect } from "react";
import "./ReviewsList.css";
import RatingIcon from "../../Assets/Svgs/RatingIcon";
import DateIcon from "../../Assets/Svgs/DateIcon";
import LinkIcon from "../../Assets/Svgs/LinkIcon";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import EditReview from "./EditReview";
import { Button, Grid, Box, Modal } from "@mui/material";

const ReviewsList = ({ reviews, setCreated }) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

  const editReview = () => {
    setOpen(true);
  };

  return (
    <div>
      <section id="reviews">
        <div className="comments">
          <div className="rev-head">
            <h2 className="snif-m1 snif-semibold mt-2 mb-3">
              <div>
                <RatingIcon style={{ marginRight: "10px" }} />
                {reviews.reduce((total, value) => (total += value.rating), 0) /
                  reviews.length}

                <span style={{ marginLeft: "10px" }} className="snif-medium">
                  ({reviews?.length || 0} reviews)
                </span>
              </div>
            </h2>
            <div className="snif-p snif-medium text-primary">
              See all reviews
            </div>
          </div>
          {reviews?.map((review, index) => (
            <div key={index}>
              <div className="row">
                <div className="col-md-12">
                  <div className="review-user-info">
                    <picture>
                      <source
                        type="image/webp"
                        srcset="https://data.sniffspot.com/filters:format(webp)/fit-in/0x240/Users/222611/A97D8A89-03EA-48D8-871E-42D6B938AC62.jpg"
                      />
                      <img
                        src="https://data.sniffspot.com/fit-in/0x240/Users/222611/A97D8A89-03EA-48D8-871E-42D6B938AC62.jpg"
                        alt="Guest avatar"
                        loading="lazy"
                        className="align-self-start rounded-circle user-avatar "
                      />
                    </picture>
                    <div className="media-body">
                      <h5 className="user-name snif-p">Thu L.</h5>
                      <div className="d-flex justify-content-between comment-date snif-s2">
                        <div>
                          <DateIcon />
                          <span style={{ marginLeft: "10px" }}>
                            {moment(review?.created_at).format("DD-MM-YYYY")}
                          </span>
                        </div>

                        <div>
                          <Grid item xs={12}>
                            <Button onClick={editReview}>Edit</Button>
                          </Grid>
                          <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box>
                              <EditReview
                                setOpen={setOpen}
                                rating={review.rating}
                                comment={review.review_comment}
                                id={review.id}
                                setCreated={setCreated}
                              />
                            </Box>
                          </Modal>
                        </div>
                      </div>
                    </div>
                    <div className="raiting rating-comment mt-2">
                      <div className="stars">
                        <RatingIcon />
                        <RatingIcon />
                        <RatingIcon />
                        <RatingIcon />
                        <RatingIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 comment-content">
                  <p className="snif-p mb-1 mt-1">{review?.review_comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ReviewsList;
