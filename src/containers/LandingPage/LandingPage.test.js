/* global describe, it, expect*/
import {shallow} from "enzyme"
import React from "react"
import LandingPage from "./"
import renderer from "react-test-renderer"
import {MemoryRouter} from "react-router-dom"

describe('<LandingPage/>', () => {
   it('should render without crashing', () => {
      shallow(<LandingPage/>)
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><LandingPage/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});