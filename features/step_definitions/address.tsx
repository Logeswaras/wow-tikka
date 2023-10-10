import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";

import { Given, When, Then } from "@cucumber/cucumber";
import Enzyme, { ReactWrapper, ShallowWrapper, mount, shallow } from "enzyme";

import Adapter from "@cfaester/enzyme-adapter-react-18";

import Address from "../../src/pages/Address/Index";
import Payment from "../../src/pages/Payment/Index";

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM("<!doctype html><html><body></body></html>", {
  url: "http://localhost",
});

global.document = dom.window.document;
global.window = dom.window;

Enzyme.configure({ adapter: new Adapter() });

let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
let shallowWrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

Given("Address can be added", () => {
  shallow(
    <Router>
      <Address />
    </Router>
  );
});
When("Address is selected", () => {
  wrapper = mount(
    <Router>
      <Address />
    </Router>
  );
  act(async () => {
    let btn = wrapper.find(".address");
    if (btn) btn.simulate("click");
  });
});
Then("Button {string} is clicked", (Continuetopayment) => {
  shallow(
    <Router>
      <Address />
    </Router>
  );

  act(async () => {
    let btn = wrapper.find(".Continuetopayment");
    if (btn) btn.simulate("click");
  });
});

Then("Redirected to stripe payment method page", () => {
  shallow(
    <Router>
      <Payment />
    </Router>
  );
});
