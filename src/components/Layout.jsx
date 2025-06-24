import { useEffect } from "react";
import { Navbar } from "./sections/Navbar";
import PropTypes from "prop-types";

export const Layout = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <Navbar />
      <main>
        <div className="grid gap-y-10 sm:grid-cols-1 md:grid-cols-2 pt-24 md:pt-32 overflow-hidden ">
          {children}
        </div>
      </main>
    </>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
