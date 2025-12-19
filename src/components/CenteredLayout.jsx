import React from "react";

const CenteredLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-[70vh] w-full">
      {children}
    </div>
  );
};

export default CenteredLayout;