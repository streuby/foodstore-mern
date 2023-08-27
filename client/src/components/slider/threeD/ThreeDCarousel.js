import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCategory } from "../../../actions/categoryActions";
import { Carousel } from "3d-react-carousal";
import Message from "../../Message";
import Slide from "./Slide";

const ThreeDCarousel = ({ setCatSlug }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCategory());
  }, [dispatch]);
  //showCategory list
  const categoryList = useSelector((state) => state.categoryList);
  const { categories, error: errorCategory } = categoryList;
  //   let _slides = [
  //     <img src="https://picsum.photos/800/300/?random" alt="1" />,
  //     <img src="https://picsum.photos/800/301/?random" alt="2" />,
  //     <img src="https://picsum.photos/800/302/?random" alt="3" />,
  //     <img src="https://picsum.photos/800/303/?random" alt="4" />,
  //     <img src="https://picsum.photos/800/304/?random" alt="5" />,
  //   ];

  const slides = categories?.map((item, index) => (
    <Slide
      key={item._id}
      imageUrl={item?.image?.url}
      alt={index}
      name={item.name}
      setCatSlug={setCatSlug}
      slug={item.slug}
      bgImage={`https://picsum.photos/800/30${index}/?random`}
    />
  ));

  return (
    <>
      {errorCategory && <Message variant="alert">{errorCategory}</Message>}
      <Carousel slides={slides} autoplay={true} interval={5000} />
    </>
  );
};

export default ThreeDCarousel;
