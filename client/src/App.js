import React, { lazy, Suspense } from "react";
import { Container, Image } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import loadingGif from "./image/Bean Eater-1s-207px.gif";

const Footer = lazy(() => import("./components/Footer"));
const Header = lazy(() => import("./components/Header"));
const AddonEditScreen = lazy(() => import("./screens/admin/AddonEditScreen"));
const AddonScreen = lazy(() => import("./screens/admin/AddonScreen"));
const CategoryEditScreen = lazy(() =>
  import("./screens/admin/CategoryEditScreen")
);
const CategoryScreen = lazy(() => import("./screens/admin/CategoryScreen"));
const UserListScreen = lazy(() => import("./screens/admin/UserListScreen"));
const ForgetPasswordScreen = lazy(() =>
  import("./screens/ForgetPasswordScreen")
);
const HomeScreen = lazy(() => import("./screens/HomeScreen"));
const LoginScreen = lazy(() => import("./screens/LoginScreen"));
const RegisterCompleteScreen = lazy(() =>
  import("./screens/RegisterCompleteScreen")
);
const RegisterScreen = lazy(() => import("./screens/RegisterScreen"));
const PasswordScreen = lazy(() => import("./screens/user/PasswordScreen"));
const WishlistScreen = lazy(() => import("./screens/user/WishlistScreen"));
const ProductCreateScreen = lazy(() =>
  import("./screens/admin/ProductCreateScreen")
);
const ProductListScreen = lazy(() =>
  import("./screens/admin/ProductListScreen")
);
const ProductEditScreen = lazy(() =>
  import("./screens/admin/ProductEditScreen")
);
const VariableCreateScreen = lazy(() =>
  import("./screens/admin/VariableCreateScreen")
);
const AttributeScreen = lazy(() => import("./screens/admin/AttributeScreen"));
const AttributeEditScreen = lazy(() =>
  import("./screens/admin/AttributeEditScreen")
);
const VariableEditScreen = lazy(() =>
  import("./screens/admin/VariableEditScreen")
);
const CategoryArchiveScreen = lazy(() =>
  import("./screens/CategoryArchiveScreen")
);
const SingleProductScreen = lazy(() => import("./screens/SingleProductScreen"));
const CartScreen = lazy(() => import("./screens/CartScreen"));
const CheckoutScreen = lazy(() => import("./screens/CheckoutScreen"));
const CouponScreen = lazy(() => import("./screens/admin/CouponScreen"));
const PlaceOrderScreen = lazy(() => import("./screens/PlaceOrderScreen"));
const OrderDetailsScreen = lazy(() => import("./screens/OrderDetailsScreen"));
const OrderHistoryScreen = lazy(() =>
  import("./screens/user/OrderHistoryScreen")
);
const ManageOrderScreen = lazy(() =>
  import("./screens/admin/ManageOrderScreen")
);
const UserDetailsScreen = lazy(() =>
  import("./screens/admin/UserDetailsScreen")
);

function App() {
  // const dispatch = useDispatch()

  // // to check firebase auth state
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(async (user) => {
  //     if (user) {
  //       const idTokenResult = await user.getIdTokenResult()

  //       currentUser(idTokenResult.token)
  //         .then((res) => {
  //           dispatch({ type: USER_LOGIN_REQUEST })
  //           dispatch({
  //             type: USER_LOGIN_SUCCESS,
  //             payload: {
  //               name: res.name,
  //               email: res.email,
  //               token: idTokenResult.token,
  //               role: res.role,
  //               _id: res._id,
  //               shipping: res.shipping,
  //             },
  //           })
  //         })
  //         .catch((err) => {
  //           dispatch({ type: USER_LOGIN_FAIL, payload: err })
  //         })
  //     }
  //   })
  //   // cleanup
  //   return () => unsubscribe()
  // }, [dispatch])
  return (
    <Suspense
      fallback={
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <Image src={loadingGif} alt="loader" className="w-md-75 w-sm-25" />
        </div>
      }
    >
      <Router basename="/">
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} exact />
              <Route path="/register" element={<RegisterScreen />} exact />
              <Route path="/login" element={<LoginScreen />} />
              <Route
                path="/forgot/password"
                element={<ForgetPasswordScreen />}
              />
              <Route
                path="/register/complete"
                element={<RegisterCompleteScreen />}
              />
              <Route
                path="/user/orderhistory"
                element={<OrderHistoryScreen />}
                exact
              />
              <Route path="/user/wishlist" element={<WishlistScreen />} exact />
              <Route path="/user/password" element={<PasswordScreen />} exact />
              <Route
                path="/admin/userlist"
                element={<UserListScreen />}
                exact
              />
              <Route
                path="/admin/category"
                element={<CategoryScreen />}
                exact
              />
              <Route
                path="/admin/category/:slug/edit"
                element={<CategoryEditScreen />}
                exact
              />
              <Route
                path="/category/:slug"
                element={<CategoryArchiveScreen />}
                exact
              />
              <Route path="/admin/addon" element={<AddonScreen />} exact />
              <Route
                path="/admin/addon/:slug/edit"
                element={<AddonEditScreen />}
                exact
              />
              <Route
                path="/admin/products"
                element={<ProductListScreen />}
                exact
              />
              <Route
                path="/admin/product/create"
                element={<ProductCreateScreen />}
                exact
              />
              <Route
                path="/admin/product/:slug/edit"
                element={<ProductEditScreen />}
                exact
              />
              <Route
                path="/admin/attribute"
                element={<AttributeScreen />}
                exact
              />
              <Route
                path="/admin/attribute/:id/edit"
                element={<AttributeEditScreen />}
                exact
              />
              <Route
                path="/admin/variables"
                element={<VariableCreateScreen />}
                exact
              />
              <Route
                path="/admin/variable/:id/edit"
                element={<VariableEditScreen />}
                exact
              />
              <Route path="/admin/coupon" element={<CouponScreen />} />
              <Route
                path="/admin/manageorder"
                element={<ManageOrderScreen />}
              />
              <Route
                path="/product/:slug"
                element={<SingleProductScreen />}
                exact
              />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/checkout" element={<CheckoutScreen />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/order/:id" element={<OrderDetailsScreen />} />
              <Route path="/admin/user/:id" element={<UserDetailsScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
