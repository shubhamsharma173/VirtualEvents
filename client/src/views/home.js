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
    position: "relative"
  }
  return (
    <NavLink to='./user/login'>
      <div style={image}>
        <img style={image} height="100%" width="100%" src="https://ficci-capam.framez.sg/static/media/beforelogin.7768c518.jpg" />
      </div>
    </NavLink>
  )
};

export default Home;
