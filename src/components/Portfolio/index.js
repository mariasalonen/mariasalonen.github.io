import React from "react";
import Agco from "./agco";
import Checkmark from "./checkmark";
import Crops from "./crops";
import Port from "./port";
import "../Cv/cv.css";

const { useState } = React;

const tabItems = [
  {
    id: 1,
    title: 'CASE AGCO',
    content: 'This is the content for AGCO',
    content: <Agco />,
  },
  {
    id: 2,
    title: 'CASE CHECKMARK',
    content: <Checkmark />,
  },
  {
    id: 3,
    title: 'CASE PORT',
    content: <Port />,
  },
  {
    id: 4,
    title: 'CASE CROPS',
    content: <Crops />,
  },
];

const Portfolio = () => {
    const [active, setActive] = useState(1);
     
     return (
       <div className="wrapper">
         <div className="cv-tab-row">
           {tabItems.map(({ id, title }) =><TabItemComponent
              key={title}
              title={title}
              onItemClicked={() => setActive(id)}
              isActive={active === id}
            />
         )}
         </div>
         <div className="content">
           {tabItems.map(({ id, content }) => {
             return active === id ? content : ''
           })}
         </div>
         
        </div>
     )
   }
   
   const TabItemComponent = ({
     title = '',
     onItemClicked = () => console.error('You passed no action to the component'),
     isActive = false,
   }) => {
     return (
       <div className={isActive ? 'tabitem' : 'tabitem tabitem--inactive'} onClick={onItemClicked}>
         <p className="tabitem__title">{title}</p>
       </div>
     )
   };


export default Portfolio;

