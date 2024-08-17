import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            "Welcome to GOFOOD
At GOFOOD, we are passionate about bringing the freshest and most delicious [type of cuisine] to your table. Our chefs craft each dish with love and attention, using only the finest ingredients sourced locally whenever possible. We believe that great food comes from the heart, and we are committed to creating a dining experience that you'll cherish.

Founded in [Year], [Restaurant Name] started as a dream to share our love for [type of cuisine] with the community. Over the years, we've grown, but our dedication to quality and customer satisfaction remains unchanged. Whether you're enjoying a meal with family or grabbing a quick bite, we aim to make every visit special.

Our team, led by [Head Chef/Owner Name], is a group of passionate individuals who are dedicated to serving you the best. We believe in sustainability, and we work hard to reduce our environmental impact through eco-friendly practices..
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
