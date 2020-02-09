import React, { Component } from 'react'
import Person from './Person'
class Persons extends Component {
    render() {
        return (
            <div>
                {this.props.person.map(data=> {return <Person edit = {this.props.edit} del={this.props.del} data ={data}/>})}
                
            </div>
        )
    }
}
export default  Persons