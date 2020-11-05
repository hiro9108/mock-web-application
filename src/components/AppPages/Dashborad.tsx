import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { DataGrid, RowsProp, ColDef } from '@material-ui/data-grid';

const rows: RowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'test', col2: 'test' },
  { id: 3, col1: 'test', col2: 'itest' },
];

const columns: ColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },

];

class Dashboard extends Component {
  render() {
    return (
      <Container fixed>
        <div style={{ height: 300, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      </Container>
    );
  }
}

export default Dashboard;
