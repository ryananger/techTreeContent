import st      from 'ryscott-st';
import ax      from './ax.js';
import helpers from './helpers.js';

var mouse = {
  x: null,
  y: null,
  over: null
};

window.addEventListener('mousemove', function(e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  var element = document.elementFromPoint(mouse.x, mouse.y);

  if (element) {
    mouse.over = element;
  } else {
    mouse.over = null;
  }
}, {passive: true});

window.addEventListener('keypress', function(e) {
  if (e.target.type === 'text') {return;}

  switch (e.key) {
    case 'w':
      st.Game.flipTile();
      break;
    case 'a':
      st.Game.moveLeft();
      break;
    case 'd':
      st.Game.moveRight();
      break;
  }
});