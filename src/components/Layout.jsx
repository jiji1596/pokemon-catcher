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
        <div className="flex flex-col">
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
