import React from "react";
import Button from "./button";
import Zurag1 from '../assets/amjilt.jpg';
import '../container/home.css';

const Damjilt = ()=>{
    return(
        <div className="body">
            <div className="aa">
                    <Button variant='red' text='READ MORE' img={Zurag1} />
                    <Button variant='image' text='READ MORE' img={Zurag1} />
            
            </div>
            <div className="aa">  
                    <Button variant='lime' text='READ MORE' img={Zurag1} />
                     <Button variant='blue' text='READ MORE' img={Zurag1} />

            </div>
        </div>
    );
};
export default Damjilt;

// 

