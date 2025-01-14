import React from "react";
import Experience from "./experience";
import Education from "./education";
import Skills from "./skills";
import "./cv.css";

const { useState } = React;

const tabItems = [
  {
    id: 1,
    title: 'TYÖKOKEMUS',
    content: <Experience />,
  },
  {
    id: 2,
    title: 'KOULUTUS',
    content: <Education />,
  },
  {
    id: 3,
    title: 'TTT - TAIDOT, TEKNOLOGIAT JA TYÖKALUT',
    content: <Skills />,
  },
];

const Cv = () => {
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


export default Cv;
