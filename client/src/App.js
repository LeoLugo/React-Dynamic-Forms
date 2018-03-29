import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {

  state = {
    fields: []
  }


  componentDidMount() {
    axios.get('http://localhost:3001/fields').then(resp => {
      this.setState({
        fields: resp.data
        
      })
      

    })
}

      render() {
        return(
          <div className="main">
            <div className="title">Sign up</div>
            <div className="content">
            {this.state.fields.map( stuff => {
              
              if(stuff.type === "text") {
                return <input type={stuff.type} name={stuff.id} placeholder={stuff.label} />
              } else if(stuff.type === "email") {
                return <input type={stuff.type} name={stuff.id} placeholder={stuff.label} />
              } else if(stuff.type === "select") {
                return <select className="selecter"placeholder={stuff.label}><option value={stuff.label}>{stuff.label}</option><option value={stuff.options[0].value}>{stuff.options[0].label}</option><option value={stuff.options[1].value}>{stuff.options[1].label}</option><option value={stuff.options[2].value}>{stuff.options[2].label}</option><option value={stuff.options[3].value}>{stuff.options[3].label}</option><option value={stuff.options[4].value}>{stuff.options[4].label}</option></select>
              } else if(stuff.type === "textarea") {
                return <textarea rows="3" cols="10" name={stuff.id} placeholder={stuff.label}></textarea>
              } else if(stuff.type === "tel") {
                return <input type={stuff.type} name={stuff.id} placeholder={stuff.label} />
              }
            })}
            </div>
            <div className="bottom"><button>Submit</button></div>
          </div>
          )
      }
  }

export default App;




