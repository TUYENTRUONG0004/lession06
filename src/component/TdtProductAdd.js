import React, { Component } from 'react'

export default class Tdt_ProductAdd extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:0,
            title:'',
            status:0
        }
    }
    tdtHandChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]:value
        })
    }

    tdtHandldSumit = (ev)=>{
        ev.preventDefault();

        this.props.onSumit(this.state);
    }
  render() {
    return (
      <div>
        <h2>them moi san pham</h2>
        <form className='col-md-6'>
        <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">
    id
  </span>
  <input
    type="text"
    className="form-control"
    id='id'
    name='id'
    value={this.props.id}
    onChange={this.tdtHandChage}
  />
</div>
        <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">
    id
  </span>
  <input
    type="text"
    className="form-control"
    id='id'
    name='title'
    value={this.props.id}
    onChange={this.tdtHandChage}
  />
</div>
        <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon3">
    id
  </span>
  <input
    type="text"
    className="form-control"
    id='id'
    name='status'
    value={this.props.id}
    onChange={this.tdtHandChage}
  />
</div>
<button className='btn btn-success' onClick= {this.tdtHandldSubmit}>ghi lai</button>
        </form>
      </div>
    )
  }
}
