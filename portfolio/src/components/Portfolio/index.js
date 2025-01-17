import React from "react";
import "../Cv/cv.css";

const { useState } = React;

const tabItems = [
  {
    id: 1,
    title: 'AGCO',
    content: 'This is the content for AGCO',
  },
  {
    id: 2,
    title: 'CHECKMARK',
    content: 'This is the content for CHECKMARK',
  },
  {
    id: 3,
    title: 'CASE PORT',
    content: 'This is the content for CASE port',
  },
  {
    id: 4,
    title: 'CASE CROPS',
    content: 'This is the content for CASE CROPS',
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

