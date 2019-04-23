/* global describe, it, jest, expect*/
import {shallow} from "enzyme"
import {Loading} from "./"
import React from "react"
import renderer from "react-test-renderer"
import {MemoryRouter} from "react-router-dom"

describe('<Loading />', () => {
   it('should render without crashing', () => {
      shallow(<Loading/>)
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><Loading/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});