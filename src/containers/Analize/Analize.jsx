import React, { Component } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import TextField from '../../components/UI/TextField';


class Analize extends Component {
  state = {
    val: "",
    valArr: [],
  }

  onChangeHandler = event => {
    this.setState({val: event.target.value})
  }

  clearHandler = () => {
    this.setState({
      val: "",
      valArr: []
    })
  }

  submitHandler  = event => {
    event.preventDefault();
    const url = "http://localhost:5000/"

    axios.post(url, {
      val: this.state.val
    })
    .then(response => {
      
      this.state.valArr.push(response.data)
      this.setState({
        val: "",
        valArr: this.state.valArr,
      })
      console.log(this.state.valArr)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render () {
    return (
      <Container fixed>
        <form onSubmit={this.submitHandler}>
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
        {this.state.valArr.map((el, index) => {
          return <p>{el.val}</p>
        })}
      </Container>

    );
  }
}

export default Analize;