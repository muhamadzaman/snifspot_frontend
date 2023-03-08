import React, { useState, useEffect } from "react";
import "./ReviewsList.css";
import RatingIcon from "../../Assets/Svgs/RatingIcon";
import DateIcon from "../../Assets/Svgs/DateIcon";
import LinkIcon from "../../Assets/Svgs/LinkIcon";
import axios from "axios";

const ReviewsList = ({ reviews }) => {
  console.log("--------------<", reviews);
  return (
    <div>
      <section id="reviews">
        <div className="comments">
          <div className="rev-head">
            <h2 className="snif-m1 snif-semibold mt-2 mb-3">
              <div>
                <RatingIcon style={{ marginRight: "10px" }} />
                5.0
                <span className="snif-medium"> (36 Reviews)</span>
              </div>
            </h2>
            <div className="snif-p snif-medium text-primary">
              See all reviews
            </div>
          </div>
          {reviews.map((review, index) => (
            <div>
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
                      <div className="comment-date snif-s2">
                        <DateIcon />
                        <span>Mar 6, 2023</span>
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
                  <p className="snif-p mb-1 mt-1">
                    It was nice and accommodating!
                  </p>
                  <div className="comment-action">
                    <p className="upvotes mr-md-3 ">
                      <LinkIcon />0
                    </p>
                  </div>
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
