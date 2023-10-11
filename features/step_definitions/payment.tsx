import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";

import { Given, When, Then } from "@cucumber/cucumber";
import Enzyme, { ReactWrapper, ShallowWrapper, mount, shallow } from "enzyme";

import Adapter from "@cfaester/enzyme-adapter-react-18";

import Payment from "../../src/pages/Payment/Index";
import SuccessPage from "../../src/pages/Address/Index";

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

Given("Payment details are given", () => {
  shallow(
    <Router>
      <Payment />
    </Router>
  );
});
When("{string} button is clicked after giving payment details", (Continuetopayment) => {
  wrapper = mount(
    <Router>
      <Payment />
    </Router>
  );
  act(async () => {
    let btn = wrapper.find(".Continuetopayment");
    if (btn) btn.simulate("click");
  });
});

Then("After successful payment success message is shown", () => {
  wrapper.exists(<SuccessPage />);
});
