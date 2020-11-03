import React, { Component } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import TextField from '../../components/UI/TextField';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { DataGrid } from '@material-ui/data-grid';




class Analize extends Component {
  state = {
    val: "",
    valArr: [],
    preData: []
  }

  onChangeHandler = event => {
    this.setState({val: event.target.value})
  }

  clearHandler = () => {
    this.setState({
      val: "",
      valArr: [],
      preData: []
    })
  }

  submitHandler  = event => {
    event.preventDefault();
    const url = "https://analize-app-with-python.herokuapp.com/"

    axios.post(url, {
      val: this.state.val
    })
    .then(response => {
      this.state.valArr.push(response.data);
      this.state.preData.push(this.state.val);
      this.setState({
        val: "",
        valArr: this.state.valArr,
      });
      console.log(this.state.valArr);
    })
    .catch(err => {
      console.log(err);
    });
  };

  render () {

    const rows = [];
    const columns = [
      { field: 'preData', headerName: 'Pre Data', width: 130 },
      { field: 'predictData', headerName: 'Predict Data', width: 130 },
    ];

    return (
      <Container fixed>
        <form onSubmit={this.submitHandler}>
          <Typography id="discrete-slider" gutterBottom>
            Your Satisfaction
          </Typography>
          <Slider
            defaultValue={5}
            // getAriaValueText="analize"
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
          />
          <TextField
            name="testValue"
            type="text"
            label="Data(26~40)"
            value={this.state.val}
            rows={1}
            multiline={false}
            onChange={this.onChangeHandler}
            variant="filled"
          />
          
          <Button variant="contained" type="submit">Predict</Button>
          <Button variant="contained" onClick={this.clearHandler}>Clear</Button>
        </form>
        {this.state.valArr.forEach((el, index) => {
          rows.push({ id: index, preData: this.state.preData[index], predictData: el.val });
        })}
        {rows.length !== 0 &&
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
          </div>
        }   
      </Container>
    );
  }
}

export default Analize;