import React, {useState, useEffect} from 'react';

import '../styles/home.css';
import '../styles/content.css';
import st from 'ryscott-st';

import Week1 from './week1/Week1.jsx';
import Week2 from './week2/Week2.jsx';
import Week3 from './week3/Week3.jsx';
import Week4 from './week4/Week4.jsx';
import Week5 from './week5/Week5.jsx';
import Week6 from './week6/Week6.jsx';
import Week7 from './week7/Week7.jsx';
import Week8 from './week8/Week8.jsx';

var count = 0;

const Home = function() {
  const [opt, setOpt] = useState(taglines[0]);

  const weeks = {
    week1: <Week1/>,
    week2: <Week2/>,
    week3: <Week3/>,
    week4: <Week4/>,
    // week5: <Week5/>,
    // week6: <Week6/>,
    // week7: <Week7/>,
    // week8: <Week8/>
  };

  var switchOption = function() {
    if (st.isMobile) {
      return;
    }

    if (count < 25) {
      let tag = count === 0 ? taglines[0] : taglines[Math.floor(Math.random()*taglines.length)];

      setTimeout(()=>{
        setOpt(tag);
        switchOption();
      }, 5 * (count + 1));
    } else {
      setOpt(taglines[0]);
    }

    count++;
  };

  useEffect(switchOption, []);

  return (
    <>
      <header className='anchor v c'>
        <h1 className={`headerTitle ${st.isMobile ? '' : 'float'}`}><a href='/'>techTree Academy</a></h1>
        <p className={`headerTagline ${st.isMobile ? '' : 'float'}`}>Welcome to techTree Academy, where we {opt}</p>
        <small className={`headerExtra float`}>no robots were harmed in the creation of this website</small>
      </header>
      <div className='content h anchor'>
        <div className='weekNav float v'>
          <h3 className={st.week === 1 ? 'weekButton on' : 'weekButton'} onClick={()=>{st.setWeek(1)}}>1</h3>
          <h3 className={st.week === 2 ? 'weekButton on' : 'weekButton'} onClick={()=>{st.setWeek(2)}}>2</h3>
          <h3 className={st.week === 3 ? 'weekButton on' : 'weekButton'} onClick={()=>{st.setWeek(3)}}>3</h3>
          <h3 className={st.week === 4 ? 'weekButton on' : 'weekButton'} onClick={()=>{st.setWeek(4)}}>4</h3>
          {/* <h3 className={st.week === 5 ? 'weekButton on' : 'weekButton'} onClick={()=>{st.setWeek(5)}}>5</h3>
          <h3 className={st.week === 6 ? 'weekButton on' : 'weekButton'} onClick={()=>{st.setWeek(6)}}>6</h3>
          <h3 className={st.week === 7 ? 'weekButton on' : 'weekButton'} onClick={()=>{st.setWeek(7)}}>7</h3>
          <h3 className={st.week === 8 ? 'weekButton on' : 'weekButton'} onClick={()=>{st.setWeek(8)}}>8</h3> */}
        </div>
        {weeks['week' + st.week]}
      </div>
    </>
  );
};

const taglines = [
  'cultivate the tech innovators of tomorrow.',
  'grow the tech forests of tomorrow.',
  'nurture the digital saplings of the future.',
  'turn tech seedlings into mighty oaks.',
  'photosynthesize the code of the future.',
  'regenerate digital ecosystems.',
  'grow your coding skills like a redwood.',
  'turn code seeds into innovation trees.',
  'help ideas bloom in the tech garden.',
  'nurture the green digits of tomorrow.',
  'grow your tech skills organically.',
  'turn tech sprouts into towering giants.',
  'cultivate the forest of digital dreams.',
  'photosynthesize your potential into code.',
  'create tech flora for a greener future.',
  'grow digital jungles one line at a time.',
  'make your code blossom like wildflowers.',
  'turn saplings into scripters.',
  'sprout your tech career with us.',
  'turn green thumbs into coding fingers.',
  'make coding as natural as photosynthesis.',
  'branch out into the world of tech.',
  'cultivate your inner coder.',
  'grow your ideas like a tech gardener.',
  'turn seeds into screens and coders.',
  'breathe new life into your tech skills.',
  'grow strong roots in the tech industry.',
  'photosynthesize your tech knowledge.',
  'harvest your coding potential.',
  'grow your skills in our tech greenhouse.',
  'watch little acorns become great coders.',
  'photosynthesize your way to tech greatness.',
  'grow a forest of innovation.',
  'plant your future in tech.',
  'grow your coding skills with sunlight and code.',
  'create a canopy of coding knowledge.',
  'grow your tech dreams in our digital nursery.',
  'watch your skills grow like a tech tree.',
  'get rooted in the world of tech.',
  'grow your tech talent from the ground up.',
  'harvest the fruits of your coding labor.',
  'cultivate a brighter tech future.',
  'nurture your inner tech botanist.',
  'grow coding skills faster than bamboo.',
  'watch your ideas grow like a chia pet.',
];

export default Home;
