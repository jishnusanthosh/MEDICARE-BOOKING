import React from 'react';

import Header from '../components/Header/Header';  // Corrected the casing
import Footer from '../components/Footer/Footer';
import Routers from '../routes/Routers';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
