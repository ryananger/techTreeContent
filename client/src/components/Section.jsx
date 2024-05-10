import React, {useState, useEffect} from 'react';

const Section = ({title, content}) => {
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

  return (
    <section>
      <div className={`content ${open ? 'open' : ''} ${vis} v c`}>
        <h2>{title}</h2>
        {content}
      </div>
    </section>
  );
};

export default Section;