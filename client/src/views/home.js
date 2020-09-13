import React, { useState, useEffect, useRef } from 'react';
import {
  buyUrl,
  adminRoot
} from '../constants/defaultValues';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import GlideComponent from '../components/carousel/GlideComponent';
import { scroller } from 'react-scroll'
import Headroom from 'react-headroom'

const Home = () => {
  const image={
    height: "830px", width: "1500px"
  }
  return (
    <NavLink to='./user/login'>
      <img style={image} src="https://ficci-capam.framez.sg/static/media/beforelogin.7768c518.jpg" />
    </NavLink>
  )
};

export default Home;
