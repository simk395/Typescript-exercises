class Matrix {
  rows: number[][];
  columns: number[][];
  constructor(row: string = '', cols: string = '') {
    this.rows = row
      .split('\n')
      .map(num => num.split(' ').map(num2 => parseInt(num2)));
    this.columns = new Array(cols.split('\n').map(num => parseInt(num)));
  }
}

export default Matrix;
