import React from 'react';
import Header from '../../components/Header';
import thaneLogo from '../../assets/Thane_logo.png';

export default function Sponsors(){
  return (
    <>
      <Header
        currentPage='sponsors'
      />
      <div>
        hello world
      </div>
      <img src={thaneLogo} alt='logo for Thane travel' />
    </>
  )
}