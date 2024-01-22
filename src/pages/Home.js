// Home.js
import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
        <div id="background"></div>
	<div class="mobile-overlay"></div>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
