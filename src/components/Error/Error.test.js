/* global describe, it, jest, expect*/
import {shallow} from "enzyme"
import {Error} from "./"
import React from "react"
import renderer from "react-test-renderer"
import {MemoryRouter} from "react-router-dom"

describe('<Error />', () => {
   it('should render without crashing', () => {
      shallow(<Error/>)
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><Error/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});