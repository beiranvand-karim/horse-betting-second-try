/* global describe, it, jest, expect*/
import React from 'react'
import App from './App'
import {shallow} from "enzyme"

describe('<App />', () => {
   it('should render without crashing', () => {
      shallow(<App/>)
   });
});

