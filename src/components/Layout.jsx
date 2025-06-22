import { useEffect } from 'react';
import { Navbar } from './sections/Navbar';
import PropTypes from 'prop-types';

export const Layout = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <Navbar />
      <main className="grid grid-cols-2 pt-30 gap-y-20 md:gap-y-32 overflow-hidden">
        {children}
      </main>
    </>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
