import React, {useState, useEffect} from 'react';

import st from 'ryscott-st';

var count = 0;

const Head = function() {
  const [opt, setOpt] = useState(taglines[0]);

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
    <header className='anchor v c'>
      <h1 className={`headTitle ${st.isMobile ? '' : 'float'}`}>techTree Academy</h1>
      <p className={`headTagline ${st.isMobile ? '' : 'float'}`}>Welcome to techTree Academy, where we {opt}</p>
      <small className={`headExtra float`}>no robots were harmed in the creation of this website</small>
    </header>
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


export default Head;
