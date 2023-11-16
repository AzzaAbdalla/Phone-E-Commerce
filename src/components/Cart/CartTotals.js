import React from "react";
import { Link } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function CarTotals({ value, history }) {
  const { cartSubTotal, cartTotal, cartTax, clearCart } = value;
  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "AR7BWcSNAu3kbScuN7OeaAN0uNzjtglZSkZUSvW4lBnD9J1sgMyekThHIzM4hYewSHCfoch4UnQjSAIU",
      }}
    >
      <div className="container float-end col-lg-6">
        <div className="row">
          <div className="ms-5 mt-2 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal : </span>{" "}
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax : </span>{" "}
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">total : </span>{" "}
              <strong>$ {cartTotal}</strong>
            </h5>
            <PayPalButtons className="paypal-button" />
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
}
