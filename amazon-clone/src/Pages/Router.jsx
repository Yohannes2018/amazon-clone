import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Landing from './Landing/Landing'
import Auth from './Auth/Auth'
import Payment from './Payment/Payment'
import Orders from './Orders/Orders'
import Cart from './Cart/Cart'
import Results from './Results/Results'
import ProductDetail from './ProductDetail/ProductDetail'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from '../Components/ProtectedRoute/ProtectedRoute'
const stripePromise = loadStripe("pk_test_51R0la0L48OSI3Z7MoTA616xQBcKiLRkhYRwh5avhYC87UtdaneRfPrXftX1v8DkPhREAPzoAiH0LQWShTInoLb2m00KN4j4WKb");

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      <Route
        path="/payments"
        element={
          <ProtectedRoute
            msg={"Please login to continue"}
            redirect={"/payments"}
          >
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute
            msg={"You must login to see your orders"}
            redirect={"/orders"}
          >
            <Elements stripe={stripePromise}>
              <Orders />
            </Elements>
          </ProtectedRoute>
        }
      />

      <Route path="/category/:categoryName" element={<Results />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default Routing