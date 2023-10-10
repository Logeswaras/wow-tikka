import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";

import { Given, When, Then } from "@cucumber/cucumber";
import Enzyme, { ReactWrapper, ShallowWrapper, mount, shallow } from "enzyme";

import Adapter from "@cfaester/enzyme-adapter-react-18";

import { Provider } from "react-redux";
import { store } from "../../src/store";

import Cart from "../../src/pages/Cart/Index";
import DeliveryType from "../../src/pages/Delivery/Index";

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM("<!doctype html><html><body></body></html>", {
  url: "http://localhost",
});

global.document = dom.window.document;
global.window = dom.window;

Enzyme.configure({ adapter: new Adapter() });

let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
let shallowWrapper: ShallowWrapper;

Given("Shows the items added to cart", () => {
  shallow(
    <Provider store={store}>
      <Cart />
    </Provider>
  );
});
When("Plus and Minus button are clicked", () => {
  wrapper = mount(
    <Router>
      <Provider store={store}>
        <Cart />
      </Provider>
    </Router>
  );
  act(async () => {
    let btn = wrapper.find(".plus");
    if (btn) btn.simulate("click");
  });

  act(async () => {
    let btn = wrapper.find(".minus");
    if (btn) btn.simulate("click");
  });
});
Then("Items is added and reduced respectively", () => {
  mount(
    <Router>
      <Cart />
    </Router>
  );
});
Then("Clicking {string} button in the cart page", (Continuetopayment) => {
  mount(
    <Router>
      <Cart />
    </Router>
  );

  act(async () => {
    let btn = wrapper.find(".Continuetopayment");
    if (btn) btn.simulate("click");
  });
});
Then("Delivery types page is redirected", () => {
  mount(
    <Router>
      <DeliveryType />
    </Router>
  );
});
