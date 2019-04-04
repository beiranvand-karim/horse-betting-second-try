/* global describe, it, expect*/
import {MemoryRouter} from "react-router-dom"
import {mount, shallow} from "enzyme"
import React from "react"
import {Provider} from "react-redux"
import {store} from "../../store"
import {Routes} from "./index"
import renderer from "react-test-renderer"
import {LandingPage} from "../../containers/LandingPage"

describe('<Routes/>', () => {
   let wrapper = (path) => mount(
      <MemoryRouter initialEntries={[path]}>
         <Provider store={store}>
            <Routes />
         </Provider>
      </MemoryRouter>
   );

   it('should render without crashing', () => {
      shallow(<Routes/>)
   });

   it('should route to /', () => {
      const path = '/';
      const comp = wrapper(path);
      expect(comp.find(LandingPage)).toHaveLength(1);
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><Routes/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});
