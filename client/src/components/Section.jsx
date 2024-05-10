import React, {useState, useEffect} from 'react';

const Section = ({title, content}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setIsOpen(true);
    }, 500);
  }, []);

  return (
    <section>
      <div className={`content ${isOpen ? 'open visible' : 'hidden'} v c`}>
        <h2>{title}</h2>
        {content}
      </div>
    </section>
  );
};

export default Section;