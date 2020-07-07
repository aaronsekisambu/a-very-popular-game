const currentColors = (colors) => {
  const element = document.querySelector('.game-colors');
  if (colors && colors.length > 0) {
    for (let i in colors) {
      const create = document.createElement('div');
      create.setAttribute('class', 'ch-color');
      create.setAttribute('color', colors[i]);
      create.setAttribute('onclick', 'onChooseColor(event)');
      create.style.background = colors[i];
      element.appendChild(create);
    }
  }
};
const displayTiles = (result) => {
  const element = document.querySelector('.game-board');
  const canvas = document.createElement('canvas');
  if (result && result.length > 0) {
    // do something
    const tileSize = 25;
    canvas.width = tileSize * result.length;
    let ctx = canvas.getContext('2d');
    for (let i in result) {
      for (let j in result[i]) {
        let xPos = i * tileSize;
        let yPos = j * tileSize;
        ctx.fillStyle = result[i][j];
        ctx.fillRect(xPos, yPos, tileSize, tileSize);
        ctx.strokeRect(xPos, yPos, tileSize, tileSize);
      }
    }
  }
  element.appendChild(canvas);
};
const find = async () => {
  try {
    const { data: res } = await axios.get('/api/start-game');
    const {
      data: { result, colors },
    } = res;
    currentColors(colors);
    displayTiles(result);
  } catch (error) {
    const { data } = error.response;
    console.log('error', data);
  }
};

const onChooseColor = async (event) => {
  const { target } = event;
  const chosenColor = target.getAttribute('color');
  const element = document.querySelector('.game-board');
  try {
    const { data: res } = await axios.post('/api/play', { color: chosenColor });
    const {
      data: { result },
    } = res;
    element.innerHTML = '';
    displayTiles(result);
  } catch (error) {
    alert('something wrong please try again later.');
  }
};

// handle click event
window.onload = function () {
  find();
};
