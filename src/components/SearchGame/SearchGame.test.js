/* global describe, it, expect*/
import React from "react"
import SearchGame from "./"
import {MemoryRouter} from "react-router-dom"
import renderer from "react-test-renderer"
import {shallow} from "enzyme"

describe('<SearchGame/>', () => {
   it('should render without crashing', () => {
      shallow(<SearchGame/>)
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><SearchGame/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});