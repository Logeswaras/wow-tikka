import React from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import BaseButton from "../../common/components/controls/BaseButton";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import BaseInput from "../../common/components/controls/BaseInput";

const Cart = () => {
  return (
    <>
      <Row className="px-5 mt-3">
        <Col lg="8">
          <Table responsive borderless>
            <thead>
              <tr>
                <th className="text-muted">ITEM</th>
                <th className="text-muted">QUANTITY</th>
                <th className="text-muted">PRICE</th>
              </tr>
            </thead>
            <tbody>
              <tr className="align-middle">
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
                      alt="img"
                      className="rounded-2"
                      width={80}
                    />
                    <div className="ms-5">
                      <h5>Rice bowls</h5>
                      <div className="">
                        <span className="bg-light border rounded-3 px-3 me-2">
                          Rice
                        </span>
                        <span className="bg-light border rounded-3 px-3 me-2">
                          Corn
                        </span>
                        <span className="bg-light border rounded-3 px-3 me-2">
                          Onion
                        </span>
                        <span className="bg-light border rounded-3 px-3">
                          Chicken balls
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="d-flex align-items-center border rounded-1">
                      <div>
                        <BaseButton
                          icon={faMinus}
                          types="button"
                          defaultClass="btn btn-light ps-2"
                        />
                      </div>
                      <div className="bg-warning text-white py-1 px-2 rounded-1">
                        0
                      </div>
                      <div>
                        <BaseButton
                          icon={faPlus}
                          types="button"
                          defaultClass="btn btn-light ps-2"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="fw-semibold">$45.00</td>
              </tr>
              <tr className="align-middle">
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
                      alt="img"
                      className="rounded-2"
                      width={80}
                    />
                    <div className="ms-5">
                      <h5>Rice bowls</h5>
                      <div className="">
                        <span className="bg-light border rounded-3 px-3 me-2">
                          Rice
                        </span>
                        <span className="bg-light border rounded-3 px-3 me-2">
                          Corn
                        </span>
                        <span className="bg-light border rounded-3 px-3 me-2">
                          Onion
                        </span>
                        <span className="bg-light border rounded-3 px-3">
                          Chicken balls
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="d-flex align-items-center border rounded-1">
                      <div>
                        <BaseButton
                          icon={faMinus}
                          types="button"
                          defaultClass="btn btn-light ps-2"
                        />
                      </div>
                      <div className="bg-warning text-white py-1 px-2 rounded-1">
                        0
                      </div>
                      <div>
                        <BaseButton
                          icon={faPlus}
                          types="button"
                          defaultClass="btn btn-light ps-2"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="fw-semibold">$45.00</td>
              </tr>
              <tr className="align-middle">
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
                      alt="img"
                      className="rounded-2"
                      width={80}
                    />
                    <div className="ms-5">
                      <h5>Rice bowls</h5>
                      <div className="">
                        <span className="bg-light border rounded-3 px-3 me-2">
                          Rice
                        </span>
                        <span className="bg-light border rounded-3 px-3 me-2">
                          Corn
                        </span>
                        <span className="bg-light border rounded-3 px-3 me-2">
                          Onion
                        </span>
                        <span className="bg-light border rounded-3 px-3">
                          Chicken balls
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="d-flex align-items-center border rounded-1">
                      <div>
                        <BaseButton
                          icon={faMinus}
                          types="button"
                          defaultClass="btn btn-light ps-2"
                        />
                      </div>
                      <div className="bg-warning text-white py-1 px-2 rounded-1">
                        0
                      </div>
                      <div>
                        <BaseButton
                          icon={faPlus}
                          types="button"
                          defaultClass="btn btn-light ps-2"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="fw-semibold">$45.00</td>
              </tr>
              <tr className="align-middle">
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
                      alt="img"
                      className="rounded-2"
                      width={80}
                    />
                    <div className="ms-5">
                      <h5>Rice bowls</h5>
                      <div className="">
                        <span className="bg-light border rounded-3 px-3 me-2">
                          Rice
                        </span>
                        <span className="bg-light border rounded-3 px-3 me-2">
                          Corn
                        </span>
                        <span className="bg-light border rounded-3 px-3 me-2">
                          Onion
                        </span>
                        <span className="bg-light border rounded-3 px-3">
                          Chicken balls
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="d-flex align-items-center border rounded-1">
                      <div>
                        <BaseButton
                          icon={faMinus}
                          types="button"
                          defaultClass="btn btn-light ps-2"
                        />
                      </div>
                      <div className="bg-warning text-white py-1 px-2 rounded-1">
                        0
                      </div>
                      <div>
                        <BaseButton
                          icon={faPlus}
                          types="button"
                          defaultClass="btn btn-light ps-2"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="fw-semibold">$45.00</td>
              </tr>
              <tr className="align-middle">
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
                      alt="img"
                      className="rounded-2"
                      width={80}
                    />
                    <div className="ms-5">
                      <h5>Rice bowls</h5>
                      <div className="">
                        <span className="bg-light border rounded-3 px-3 me-2">
                          Rice
                        </span>
                        <span className="bg-light border rounded-3 px-3 me-2">
                          Corn
                        </span>
                        <span className="bg-light border rounded-3 px-3 me-2">
                          Onion
                        </span>
                        <span className="bg-light border rounded-3 px-3">
                          Chicken balls
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="d-flex align-items-center border rounded-1">
                      <div>
                        <BaseButton
                          icon={faMinus}
                          types="button"
                          defaultClass="btn btn-light ps-2"
                        />
                      </div>
                      <div className="bg-warning text-white py-1 px-2 rounded-1">
                        0
                      </div>
                      <div>
                        <BaseButton
                          icon={faPlus}
                          types="button"
                          defaultClass="btn btn-light ps-2"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="fw-semibold">$45.00</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col lg="4">
          <Card>
            <Card.Body>
              <Card.Title>Your order</Card.Title>
              <Table responsive borderless className="mb-0">
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
                        alt="img"
                        className="rounded-2"
                        width={40}
                      />
                      <div className="ms-2">
                        <h6 className="mb-0">Rice bowls</h6>
                        <span>*1</span>
                      </div>
                    </div>
                  </td>
                  <td className="fw-semibold">$ 45.00</td>
                </tr>
              </Table>
              <div className="border border-1"></div>
              <Card.Text className="mt-2 mb-1 fs-6 text-muted">
                Your order
              </Card.Text>
              <div className="d-flex justify-content-between">
                <BaseInput
                  type="text"
                  name="Coupen"
                  placeholder="Apply Coupen"
                  inputBgColor="bg-light"
                />
                <Button variant="light" className="border w-25">
                  Apply
                </Button>
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
              <Button variant="success" className="w-100 mt-2">
                Continue to Payment
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Cart;
