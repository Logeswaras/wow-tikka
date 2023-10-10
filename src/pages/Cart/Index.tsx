import { Card, Col, Row, Table } from "react-bootstrap";

//custom components
import BaseButton from "../../common/components/controls/BaseButton";
import BaseInput from "../../common/components/controls/BaseInput";

//Icons
import { faMinus, faPlus, faBoxOpen } from "../../common/icons/Icons";

//store
import { useAppDispatch, useAppSelector } from "../../store";
import {
  quantityDecrement,
  quantityIncrement,
} from "../../store/features/orderingSyatemSlice";
import { useNavigate } from "react-router-dom";
import BaseIcon from "../../common/components/ui/BaseIcon";

const Cart: React.FC = () => {
  const addCartData = useAppSelector((store) => store.orederSystem.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Row className="px-5 mt-3 g-0 justify-content-between">
        <Col lg="7" sm="12">
          {addCartData.length ? (
            <Table responsive borderless className="cart-table">
              <thead>
                <tr className="d-none d-md-table-row">
                  <th className="text-muted">ITEM</th>
                  <th className="text-muted">QUANTITY</th>
                  <th className="text-muted">PRICE</th>
                </tr>
              </thead>
              <tbody>
                {addCartData &&
                  addCartData.map((item, index) => (
                    <tr className="align-middle add-to-cart-cart" key={index}>
                      <td>
                        <div className="d-md-flex align-items-center">
                          <img
                            src={item.image}
                            alt="img"
                            className="rounded-2"
                            width={60}
                            height={60}
                          />
                          <div className="ms-5">
                            <h5 className="mt-3 mt-md-0">{item.title}</h5>
                            <div className="">
                              {item.ingredients.map((chips, index) => (
                                <span
                                  className="bg-light border rounded-3 px-3 me-2 d-lg-inline-block mt-lg-1"
                                  key={index}
                                >
                                  {chips}
                                </span>
                              ))}
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
                                defaultClass="btn btn-light ps-2 rounded-0"
                                handleClick={() =>
                                  dispatch(quantityDecrement(item))
                                }
                              />
                            </div>
                            <div className="bg-warning text-white py-1 px-2 rounded-1">
                              {item.quantity}
                            </div>
                            <div>
                              <BaseButton
                                icon={faPlus}
                                types="button"
                                defaultClass="btn btn-light ps-2 rounded-0"
                                handleClick={() =>
                                  dispatch(quantityIncrement(item))
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="fw-semibold">$ {item.price.toFixed(2)}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          ) : (
            <div className="p-5 d-flex justify-content-center align-items-center">
              <div className="text-center">
                <BaseIcon icon={faBoxOpen} classes="fs-1" />
                <h3 className="mt-3">Cart is empty</h3>
              </div>
            </div>
          )}
        </Col>
        <Col lg="4">
          <Card>
            <Card.Body>
              <Card.Title>Your order</Card.Title>
              <Table responsive borderless className="mb-0">
                <tbody>
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
                </tbody>
              </Table>
              <div className="border border-1"></div>
              <Card.Text className="mt-2 mb-1 fs-6 text-muted">
                Your Coupen
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
                  <BaseButton
                    name="Apply"
                    types="button"
                    variant="warning"
                    defaultClass="rounded-1 border mt-2 mt-md-0 w-100"
                  />
                </div>
              </div>
              <div className="mt-4">
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
              <BaseButton
                types="button"
                defaultClass="btn-success border-0 w-100"
                name="Continue to payment"
                handleClick={() => navigate("/delivery")}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Cart;
