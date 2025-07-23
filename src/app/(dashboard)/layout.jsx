import React from "react";

const Dashboardlayout = ({ children }) => {
  return (
    <div>
      <div className="grid grid-cols-12">
        {/* side nav */}
        <div className="col-span-3">
          <ul>
            <li>home</li>
            <li>content</li>
            <li>item</li>
          </ul>
        </div>
        {/* dashboard content */}
        <div className="col-span-9">{children}</div>
      </div>
    </div>
  );
};

export default Dashboardlayout;
