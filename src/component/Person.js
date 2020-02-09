import React, { Component } from 'react'
class Book extends Component {
    state = {
        edit: false
    }
    save = (e) => {
    if(e.key == "Enter"){
       this.setState({
           edit:false
       })
    }
        
    }
    render() {
        let output = this.state.edit ? <input onKeyPress={this.save} onChange={(e, m) => { this.props.edit(e.target.value, this.props.data.id) }} type="text" value={this.props.data.name} /> : <p>{this.props.data.name}</p>
        return (
            <div>
                <li className="list-group-item d-flex">
                    Name = {output}
                    <span className="ml-auto">Roll = {this.props.data.roll}</span>
                    <button className="btn btn-danger ml-5" onClick={(e) => { this.props.del(this.props.data.id) }}>Delete</button>
                    <button className="btn btn-warning" onClick={() => this.setState({ edit: true })}>Edit</button>
                </li>
            </div>
        )
    }
}
export default Book