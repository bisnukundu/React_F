import React, { Component } from 'react'
import Book from './Book'
class Books extends Component {
    render() {
        return (
            <div>
                {this.props.person.map(data=> {return <Book edit = {this.props.edit} del={this.props.del} data ={data}/>})}
                
            </div>
        )
    }
}
export default  Books