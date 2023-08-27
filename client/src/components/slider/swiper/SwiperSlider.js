import React, { useEffect } from "react";
import Slider, { Slide } from "./index";
import Message from "../../Message";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { listCategory } from "../../../actions/categoryActions";
//import "./styles.css";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

const SwiperSlider = ({ setCatSlug }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCategory());
  }, [dispatch]);
  //showCategory list
  const categoryList = useSelector((state) => state.categoryList);
  const { categories, error: errorCategory } = categoryList;

  return (
    <>
      {errorCategory && <Message variant="alert">{errorCategory}</Message>}
      <Slider
        settings={{
          navigation: true,
        }}
      >
        {categories?.map((c) => (
          <Slide>
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
          </Slide>
        ))}
      </Slider>
    </>
  );
};

export default SwiperSlider;
