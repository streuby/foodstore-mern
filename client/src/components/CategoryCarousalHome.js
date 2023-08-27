import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";
import { listCategory } from "../actions/categoryActions";
import { Button } from "react-bootstrap";

const CategoryCarousalHome = ({ setCatSlug }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCategory());
  }, [dispatch]);
  //showCategory list
  const categoryList = useSelector((state) => state.categoryList);
  const { categories, error: errorCategory } = categoryList;

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "80px",
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <div>
      {errorCategory && <Message variant="alert">{errorCategory}</Message>}
      <Slider {...settings}>
        {categories?.map((c) => (
          <div key={c._id}>
            <Button
              variant="dark"
              style={{
                // backgroundColor: '#f6e58d',
                padding: "10px",
                margin: "0px 10px",
              }}
              className="d-flex flex-column justify-content-center align-items-center"
              onClick={() => {
                setCatSlug(c.slug);
              }}
            >
              <img src={c?.image?.url} alt="" className="img-fluid w-50" />
              <small style={{ color: "#ffffff" }}>{c.name}</small>
            </Button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryCarousalHome;
