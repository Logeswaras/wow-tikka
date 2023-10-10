import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";

import { Given, When, Then } from "@cucumber/cucumber";
import Enzyme, { ReactWrapper, ShallowWrapper, mount, shallow } from "enzyme";

import Adapter from "@cfaester/enzyme-adapter-react-18";

import DeliveryType from "../../src/pages/Delivery/Index";
import Address from "../../src/pages/Address/Index";
import { wrap } from "module";

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM("<!doctype html><html><body></body></html>", {
  url: "http://localhost",
});

global.document = dom.window.document;
global.window = dom.window;

Enzyme.configure({ adapter: new Adapter() });

let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
let shallowWrapper: ShallowWrapper<
  any,
  Readonly<{}>,
  React.Component<{}, {}, any>
>;

Given("Delivery types are given", () => {
  shallow(
    <Router>
      <DeliveryType />
    </Router>
  );
});
When("One of the delivery type is selected", () => {
  wrapper = mount(
    <Router>
      <DeliveryType />
    </Router>
  );
  act(async () => {
    let btn = wrapper.find(".deliveryType");
    if (btn) btn.simulate("click");
  });
});
Then("{string} button is pressed", (Continuetopayment) => {
  act(async () => {
    let btn = wrapper.find(".Continuetopayment");
    if (btn) btn.simulate("click");
  });
});

Then("Redirected to Address page", () => {
  wrapper.exists(<Address />);
});
