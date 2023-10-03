import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentElement, Elements } from "@stripe/react-stripe-js";
import { Button, Card, Col, Row, Table } from "react-bootstrap";

//custom components
import BaseInput from "../../common/components/controls/BaseInput";
import BaseButton from "../../common/components/controls/BaseButton";
import BaseIcon from "../../common/components/ui/BaseIcon";

//icons
import { faCreditCard } from "../../common/icons/Icons";

import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51NkRs9SB8vgU9050aqSsUtwU7TNmNGLoxSTRvqAFS9f93oIRnovKn3HnqHY4O5JtyOj7FTNdpX3qx1YmSElXi6vI00mTdtvqlN"
);

const Payment: React.FC = () => {
  const [clientSec, setClientSecret] = useState<null | any>(null);

  useEffect(() => {
    let getClientSecret = async () => {
      await axios
        .get("https://roos-stripe.azurewebsites.net/api/getClientSecret")
        .then((data) => {
          console.log(data);
          setClientSecret(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getClientSecret();
  }, []);
  return (
    <>
      <Row className="px-5 mt-3 mb-2 g-0 justify-content-around">
        <Col lg="6">
          <div className="px-4">
            {clientSec != null && (
              <Elements
                stripe={stripePromise}
                options={{
                  clientSecret: clientSec,
                }}
              >
                <form
                  className="mt-4 d-flex flex-column h-100"
                  //   onSubmit={handleSubmit}
                >
                  <PaymentElement />
                  <div className="mt-5">
                    <h6>
                      <BaseIcon icon={faCreditCard} classes="text-success" />{" "}
                      Safe & secure payment
                    </h6>
                    <p style={{ textAlign: "justify" }}>
                      By purchasing, you accept theTerms of Useand acknowledge
                      reading thePrivacy Policy You also agree to auto renewal
                      of your yearly subscription for ₹3,600.00, which can be
                      disabled at any time through your
                    </p>
                  </div>
                  <div className="mt-3">
                    <BaseButton
                      types="submit"
                      name="Pay now & Place order"
                      defaultClass="btn btn-success px-3 py-2 w-50 rounded-1"
                    />
                  </div>
                </form>
              </Elements>
            )}
          </div>
        </Col>
        <Col lg="4" className="mt-3 mt-lg-0">
          <Card className="m-0">
            <Card.Body>
              <Card.Title>Your order</Card.Title>
              <Table responsive borderless className="mb-0">
                <tr>
                  <td>
                    <div className="d-md-flex align-items-center justify-content-between text-center text-md-start">
                      <div className="d-md-flex">
                        <img
                          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
                          alt="img"
                          className="rounded-2"
                          width={50}
                        />
                        <div className="ms-0 ms-md-2">
                          <h6 className="mb-0">Rice bowls</h6>
                          <span>*1</span>
                        </div>
                      </div>
                      <div className="fw-semibold">$ 45.00</div>
                    </div>
                  </td>
                </tr>
              </Table>
              <div className="border border-1"></div>
              <Card.Text className="mt-2 mb-1 fs-6 text-muted">
                Your order
              </Card.Text>
              <div className="d-md-flex justify-content-between">
                <div className="me-md-2 ">
                  <BaseInput
                    type="text"
                    name="Coupen"
                    placeholder="Apply Coupen"
                    inputBgColor="bg-light"
                  />
                </div>
                <div className="">
                  <Button
                    variant="light"
                    className="cart-apply-btn border mt-2 mt-md-0 w-100"
                  >
                    Apply
                  </Button>
                </div>
              </div>
              <div className="border border-1 my-3"></div>
              <div>
                <div className="d-flex justify-content-between">
                  <h6 className="text-muted">Subtotal</h6>
                  <p>$ 45.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="text-muted">Discount</h6>
                  <p>$ 0</p>
                </div>
                <div className="border border-1 my-2"></div>
                <div className="d-flex justify-content-between">
                  <h6 className="text-muted">Grand Total</h6>
                  <p>$ 45.00</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Payment;
