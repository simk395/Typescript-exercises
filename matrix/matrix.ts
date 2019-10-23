class Matrix {
  rows: number[][];
  columns: number[][];
  constructor(matrix: string) {
    this.rows = this.getRows(matrix)
    this.columns = this.getColumns(matrix)
  }

  getRows(matrix: string) {
    return matrix.split('\n')
      .map(num => num
        .split(' ')
        .map(num2 => parseInt(num2)));
  }

  getColumns(matrix: string) {
    const rows = this.getRows(matrix);
    const cols = new Array(rows.length);
    for (let i = 0; i < rows.length; i++) {
      cols[i] = rows.map(row => row[i]);
    }
    return cols;
  }
}

export default Matrix;
