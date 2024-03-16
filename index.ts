const navigateMatrix = (grid: string[]): void => {
  let path: string = '';
  let letters: string = '';
  let x: number = 0;
  let y: number = 0;

  let direction: string = 'right';

  while (true) {
    const currentChar = grid[y][x];

    if (currentChar === 's') {
      path += 's';
      break;
    }

    if (currentChar !== ' ' && currentChar !== '+') {
      path += currentChar;
      if (/[A-Z]/.test(currentChar)) {
        letters += currentChar;
      }
    }

    if (direction === 'right') {
      if (x + 1 < grid[0].length && grid[y][x + 1] !== ' ') {
        x++;
      } else if (y + 1 < grid.length && grid[y + 1][x] !== ' ') {
        direction = 'down';
        y++;
      } else if (x - 1 >= 0 && grid[y][x - 1] !== ' ') {
        direction = 'left';
        x--;
      } else if (y - 1 >= 0 && grid[y - 1][x] !== ' ') {
        direction = 'up';
        y--;
      } else {
        break;
      }
    } else if (direction === 'down') {
      if (y + 1 < grid.length && grid[y + 1][x] !== ' ') {
        y++;
      } else if (x + 1 < grid[0].length && grid[y][x + 1] !== ' ') {
        direction = 'right';
        x++;
      } else if (x - 1 >= 0 && grid[y][x - 1] !== ' ') {
        direction = 'left';
        x--;
      } else if (y - 1 >= 0 && grid[y - 1][x] !== ' ') {
        direction = 'up';
        y--;
      } else {
        break;
      }
    } else if (direction === 'left') {
      if (x - 1 >= 0 && grid[y][x - 1] !== ' ') {
        x--;
      } else if (y + 1 < grid.length && grid[y + 1][x] !== ' ') {
        direction = 'down';
        y++;
      } else if (y - 1 >= 0 && grid[y - 1][x] !== ' ') {
        direction = 'up';
        y--;
      } else {
        break;
      }
    } else if (direction === 'up') {
      if (y - 1 >= 0 && grid[y - 1][x] !== ' ') {
        y--;
      } else if (x + 1 < grid[0].length && grid[y][x + 1] !== ' ') {
        direction = 'right';
        x++;
      } else if (x - 1 >= 0 && grid[y][x - 1] !== ' ') {
        direction = 'left';
        x--;
      } else {
        break;
      }
    }
  }

  console.log(`Path: ${path}`);
  console.log(`Letters: ${letters}`);
};

const grid: string[] = [
  '>---A-@-+',
  '        |',
  '+-U--+  C',
  '|    |  |',
  's    C--+',
];

navigateMatrix(grid);
