const matrix = (a, b, i = 0, row = 0, col = -1, step = 'goRight') => {

  const m = [];
  for (; b > 0; b--) {
    m.push(new Array(a).fill(0));
  }
  const l = m.length * m[0].length;

  while (i < l) {
    switch (step) {
      case 'goRight': col = m[row][col + 1] === 0 ? ++col : (step = 'goDown', row++ , col); break
      case 'goDown': row = m[row + 1] && m[row + 1][col] === 0 ? ++row : (step = 'goLeft', col-- , row); break
      case 'goLeft': col = m[row][col - 1] === 0 ? --col : (step = 'goUp', row-- , col); break
      case 'goUp': row = m[row - 1][col] === 0 ? --row : (step = 'goRight', col++ , row); break
    }

    m[row][col] = ++i;
  }
  return m;
}

document.body.textContent = matrix(5, 5).map(row => row.join('\t')).join('\n');