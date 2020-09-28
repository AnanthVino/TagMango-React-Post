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
import CreatePost from '../../components/create-post'
import configureMockStore from "redux-mock-store";

configure({ adapter: new Adapter() })

const mockStore = configureMockStore();

const data = { createPost: {}};

const initialState = {
    data: data
};

describe('Create post', () => {
    it('should render correctly', () => {
        let locationMock = { pathname: jest.fn() };
        let store = mockStore(initialState);
        let wrapper = shallow(<CreatePost store={store} location={locationMock}/>).childAt(0).dive()
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})