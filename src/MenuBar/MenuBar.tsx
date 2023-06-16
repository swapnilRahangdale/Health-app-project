import React from "react";
import logo from "../logo/react-logo.png";

const MenuBar: React.FC<{
  buttonArr: any;
}> = ({ buttonArr }) => {
  const buttonContent = buttonArr.map((bt: any) => {
    return (
      <button key={bt.id} className="text-white" onClick={bt.btFun}>
        {bt.label}
      </button>
    );
  });

  return (
    <div className="flex justify-between items-center bg-blue-500 p-4">
      <div className="flex space-x-4">
        <img src={logo} alt="Logo" className="h-8 w-8" />
        {buttonContent}
      </div>
      <button className="text-white">Log In</button>
    </div>
  );
};

export default MenuBar;







