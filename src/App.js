import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import TourList from "./components/TourList/TourList";
import { toursSliceActions } from "./store/tours-slice";
import { productsSliceActions } from "./store/products-slice";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import { getData } from "./helper/helper";

import { getPreviousUser } from "./store/user-slice";
import { LOCAL_KEY_CART } from "./config/config";
import { cartSliceActions } from "./store/cart-slice";
// Lazy loading
import { Suspense } from "react";
import Loading from "./components/Loading/Loading";
const Login = React.lazy(() => import("./pages/Login"));
const Signup = React.lazy(() => import("./pages/Signup"));
const UserInfo = React.lazy(() => import("./pages/UserInfo"));
const TourDetailsPage = React.lazy(() => import("./pages/TourDetailsPage"));
const ProductsPage = React.lazy(() => import("./pages/ProductsPage"));
const CheckOutPage = React.lazy(() => import("./pages/CheckOutPage"));
const BookingsPage = React.lazy(() => import("./pages/BookingsPage"));

// import productsli
// const tours = [
//   {
//     id: "t1",
//     title: "The Sea Explorer",
//     difficulty: "Medium",
//     days: 7,
//     description: "Exploring the jaw-dropping US east coast by foot and by boat",
//     location: "Miami, USA",
//     date: "Dec 2021",
//     stops: 4,
//     possiblePeople: 15,
//    price:499,
//    rating:4.8,
//    ratingQuantity:1596,
//    latLng:[25.761681,-80.191788],
//  tourGuides:{
//     leader:'Jonas',
//     tour1:'Ben Handley',
//     tour2:'Ken morison'
// },
//   },
//   {
//     id: "t2",
//     title: "The Forest Hiker",
//     difficulty: "Esay",
//     days: 5,
//     description: "Breathtaking hike through the Canadian Banff National Park",
//     location: "Baff, CAN",
//     date: "Jan 2022",
//     stops: 3,
//     possiblePeople: 25,
//    price:399,
//    rating:4.6,
//    ratingQuantity:880,
//    latLng:[54.696230,-1.602650],
//  tourGuides:{
//     leader:'Mason Robert',
//     tour1:'Jack	Connor',
//     tour2:'Charlie Kyle'
// },
//   },
//   {
//     id: "t3",
//     title: "The Park Camper",
//     difficulty: "Medium",
//     days: 10,
//     description:
//       "Breathing in Nature in America's most spectacular National Parks",
//     location: "Las Vegas, USA",
//     date: "Feb 2022",
//     stops: 4,
//     possiblePeople: 15,
//    price:399,
//    rating:4.7,
//    ratingQuantity:185,
//    latLng:[36.169941,-115.139832],
//  tourGuides:{
//     leader:'Thomas Joe',
//     tour1:'Geogre Reece',
//     tour2:'Oscar Rtyms'
// },
//   },
//   {
//     id: "t4",
//     title: "The Forest Hiker",
//     difficulty: "Esay",
//     days: 5,
//     description: "Breathtaking hike through the Canadian Banff National Park",
//     location: "Baff, CAN",
//     date: "Jan 2022",
//     stops: 3,
//     possiblePeople: 25,
//    price:1099,
//    rating:4.4,
//    ratingQuantity:440,
//      latLng:[54.696230,-1.602650],
//  tourGuides:{
//     leader:'James Charlie',
//     tour1:'William Damian',
//     tour2:'	Ava Morison'
// },
//   },
//   {
//     id: "t5",
//     title: "The City Wanderer",
//     difficulty: "esay",
//     days: 9,
//     description:
//       "Living the life of Wanderlust in the US' most beatiful cities",
//     location: "NYC, USA",
//     date: "Mar 2022",
//     stops: 3,
//     possiblePeople: 20,
//    price:1599,
//    rating:4.5,
//    ratingQuantity:199,
//    latLng:[40.712776,-74.005974],
//  tourGuides:{
//     leader:'Jugren Klopp',
//     tour1:'Samio Mene',
//     tour2:'Rebert Son'
// },
//   },
//   {
//     id: "t6",
//     title: "The Northenrn lights",
//     difficulty: "esay",
//     days: 3,
//     description:
//       "Enjoy the Northern Lights in one of the best places in the world",
//     location: "YellowKnife, CAN",
//     date: "May 2022",
//     stops: 1,
//     possiblePeople: 12,
//    price:1799,
//    rating:4.8,
//    ratingQuantity:1533,
//    latLng:[62.453972,-114.371788],
//  tourGuides:{
//     leader:'Lily Michelle',
//     tour1:'Diago Jota',
//     tour2:'Ken Lina'
// },
//   },
//   {
//     id: "t7",
//     title: "The Dalat City",
//     difficulty: "esay",
//     days: 10,
//     description: "Living the life of the most beautiful city of LD",
//     location: "Dalat, VN",
//     date: "Apr 2022",
//     stops: 5,
//     possiblePeople: 30,
//    price:1999,
//    rating:4.9,
//    ratingQuantity:781,
//    latLng:[11,5647.26,-108,263095],
//  tourGuides:{
//     leader:'Jesscia David',
//     tour1:'Jemmy Handley',
//     tour2:'Jimmy Lala'
// },
//   },
// ];

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);

  const cart = useSelector((state) => state.cart);
  const { products } = cart;
  const { tours } = cart;

  // get cart from local
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem(LOCAL_KEY_CART));
    if (!cartData) return;
    dispatch(cartSliceActions.getItemFromCart(cartData));
  }, [dispatch]);

  // set cart in local
  useEffect(() => {
    const cart = [...tours, ...products];

    localStorage.setItem(LOCAL_KEY_CART, JSON.stringify(cart));
  });
  useEffect(() => {
    (async () => {
      const tours = await getData("tours");
      dispatch(toursSliceActions.getTours(tours));
      const products = await getData("products");
      dispatch(productsSliceActions.getProducts(products));
    })();
    dispatch(getPreviousUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loading />}>
      <div className="container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<TourList />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/user-info"
              element={currentUser?.idToken ? <UserInfo /> : <Login />}
            />
            <Route
              path="bookings"
              element={currentUser?.idToken ? <BookingsPage /> : <Login />}
            />
            <Route path="/tours/:tourTitle" element={<TourDetailsPage />} />
            <Route path="/check-out" element={<CheckOutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
