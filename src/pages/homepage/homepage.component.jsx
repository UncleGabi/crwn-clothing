import React from "react";

import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";

// it's a functional component, since we neither need any Lifecycle method nor we need any state
const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
