import React, {useState, useEffect} from 'react';
import {FaMinus as MinIcon} from 'react-icons/fa';


const Section = ({content}) => {
  const [open, setOpen] = useState(false);
  const [vis, setVis] = useState('hidden');

  useEffect(()=>{
    setTimeout(()=>{
      setOpen(true);
    }, 500);

    setTimeout(()=>{
      setVis('visible');
    }, 1000);
  }, []);

  useEffect(()=>{
    if (!open) {
      setVis('hidden');
    } else {
      setTimeout(()=>{
        setVis('visible');
      }, 500);
    }
  }, [open]);

  return (
    <section>
      <div className='sectionHead'>
        <MinIcon size={24} className='minIcon' onClick={()=>{setOpen(!open)}}/>
      </div>
      <div className={`content ${open ? 'open' : ''} ${vis} v c`}>
        {content}
      </div>
    </section>
  );
};

export default Section;