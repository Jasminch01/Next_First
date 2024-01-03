import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <p>Header</p>
      {children}
      <p>Footer</p>
    </div>
  );
};

export default layout;
