import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductByCategory from "../components/ProductByCategory";
import ThreeDCarousel from "../components/slider/threeD/ThreeDCarousel";
import { useAlert } from "react-alert";
import { ADD_TO_WISHLIST_RESET } from "../constants/userConstants";
import Meta from "../components/Meta";

const HomeScreen = () => {
  const alert = useAlert();
  const [catSlug, setCatSlug] = useState("appetizer");
  const dispatch = useDispatch();

  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;

  const wish = useSelector((state) => state.wish);
  const { loadingAdd, successAdd } = wish;

  // useEffect(() => {
  //   localStorage.removeItem("cartItems");
  // }, []);

  useEffect(() => {
    if (successAdd) {
      alert.success("Product Added To Wishlist ");
      dispatch({ type: ADD_TO_WISHLIST_RESET });
    }
  }, [successAdd, alert, dispatch]);
  return (
    <div>
      <Meta title="Food Store | Home" />
      {/* <CategoryCarousalHome setCatSlug={setCatSlug} /> */}
      {/* <SwiperSlider setCatSlug={setCatSlug} /> */}
      <ThreeDCarousel setCatSlug={setCatSlug} />
      <ProductByCategory
        catSlug={catSlug}
        userInfo={userInfo}
        loadingAdd={loadingAdd}
      />
    </div>
  );
};

export default HomeScreen;
