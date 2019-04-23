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

   it('should fetch data successfully', function () {
      const wrapper = shallow(<LandingPage/>);

      window.fetch = jest.fn().mockImplementation(() => {
         return new Promise((resolve) => {
            resolve({
               status:200,
               text: () => {
                  return new Promise((resolve) => {
                     resolve({
                        message: 'this is a test'
                     })
                  })
               }
            })
         })
      });

      // wrapper.find('input').simulate('change',  {target: {value: 'V4'}});
      // wrapper.find('form').simulate('submit', {preventDefault() {}});
      //
      // setImmediate(() => {
      //    expect(wrapper.state.data).toBe("V4")
      // })

   });
});