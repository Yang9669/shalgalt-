import React from "react";
import DetailData from "../data/data";
import { Link } from "react-router-dom";
const Red = () => {
  const details = DetailData.map((props) => {
    if (props.id === 1) {
      return (
          
          <div className="w-full h-screen ">
              <div className="w-full text-center">
                  <Link to={"/"}>Back</Link>
              </div>
                  <div className="w-[100%] h-screen flex justify-center align-center  text-[2rem] font-bold ">
          <div className="w-[40%] h-auto">
                  <h2 className="mb-[50px] uppercase">{props.title}</h2>
                  <img src={props.img} alt="/" className="w-full h-[300px]" />
                  <p className="text-[0.6em] mb-[50px]">{props.description}</p>
          </div>
        </div>
          </div>
      );
    } else {
      return;
    }
  });
  return (
    <>
      {details}
    </>
  );
};
export default Red;