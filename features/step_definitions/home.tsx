import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";

import { Given, When, Then } from "@cucumber/cucumber";
import Enzyme, { ReactWrapper, ShallowWrapper, mount, shallow } from "enzyme";

import Adapter from "@cfaester/enzyme-adapter-react-18";

import { Provider } from "react-redux";
import { store } from "../../src/store";

import Search from "../../src/common/components/layout/SearchBar";
import NavBar from "../../src/common/components/layout/NavBar";
import Cart from "../../src/pages/Cart/Index";

import OrderOnline from "../../src/pages/Home/components/OrderOnline";
import MenuDescription from "../../src/pages/Menu/MenuDescription";
import MenuCustomization from "../../src/pages/Menu/components/MenuCustomization";

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

Given("Location is entered in the searchbox", () => {
  shallow(<Search></Search>);
});
When("{string} button is clicked", (search) => {
  shallowWrapper = shallow(
    <Router>
      <Search />
    </Router>
  );
  act(async () => {
    let btn = wrapper.find(".search");
    if (btn) btn.simulate("click");
  });
});
Then("Menu respective of search is shown", () => {
  shallowWrapper.exists(<OrderOnline />);
});

Given("Cart symbol is present at navbar", () => {
  shallow(
    <Provider store={store}>
      <NavBar></NavBar>
    </Provider>
  );
});
When("Cart symbol is clicked to view cart page", () => {
  shallowWrapper = shallow(
    <Router>
      <NavBar />
    </Router>
  );
  act(async () => {
    let icon = wrapper.find(".cart");
    if (icon) icon.simulate("click");
  });
});
Then("Cart page is shown", () => {
  shallowWrapper.exists(<Cart />);
});

Given("List of menus are shown", () => {
  shallow(<OrderOnline></OrderOnline>);
});
When("OnClick of the menu card opens menu-description page", () => {
  wrapper = mount(
    <Router>
      <OrderOnline></OrderOnline>
    </Router>
  );
  act(async () => {
    let card = wrapper.find(".menuCard");
    if (card) card.simulate("click");
  });
});
Then("Menu-description page is seen", () => {
  shallowWrapper.exists(<MenuDescription />);
});
Then("OnClick of button {string}", (Customize) => {
  shallow(
    <Router>
      <OrderOnline></OrderOnline>
    </Router>
  );

  act(async () => {
    let btn = wrapper.find(".Customize");
    if (btn) btn.simulate("click");
  });
});
Then("Shows Customize column at the right end", () => {
  shallowWrapper.exists(<MenuCustomization />);
});
Then("OnClick of {string} button", (AddToCart) => {
  shallow(
    <Router>
      <OrderOnline></OrderOnline>
    </Router>
  );

  act(async () => {
    let btn = wrapper.find(".AddToCart");
    if (btn) btn.simulate("click");
  });
});
Then("Adds menu to the cart", () => {
 
  const add = wrapper.find(".cart-item");
  add.exists(<Cart />);
});
