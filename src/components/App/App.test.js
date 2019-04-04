/* global describe, it, expect*/
import React from "react"
import App from "./"
import {MemoryRouter} from "react-router-dom"
import renderer from "react-test-renderer"
import {shallow} from "enzyme"

describe('<App/>', () => {
   it('should render without crashing', () => {
      shallow(<App/>)
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><App/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});