/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import Home from '../../components/home'

configure({ adapter: new Adapter() })

const mockStore = configureMockStore();
const store = mockStore({});

describe('home', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<Home />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

})