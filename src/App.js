import React from 'react';
import './App.css';
import './bootstrap.min.css';
import Faker from 'faker'
import Persons from './component/Persons'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      person: []
    }
    for (var i = 1; i < 30; i++) {
      let obj = {
        name: Faker.internet.userName(),
        roll: i,
        id: i
      }
      this.state.person.push(obj)
      // }
    }
  }

  del = (id) => {
    let nee = this.state.person.filter(data => data.id !== id)
    this.setState({
      person: nee
    })
  }
  
  edit = (name,id)=>{
    let newww = this.state.person.map((data)=>{
      if(id == data.id){
        return{
          ...data,
          name
        }
      }
      return data
    })
    this.setState({
      person: newww
    })
  }
  
render() {
  return (
    <div>
      <Persons edit ={this.edit} del={this.del} person={this.state.person} />
    </div>
  )
}
}
export default App







