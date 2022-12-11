import React,{Component} from 'react'
import Table from './Table'
import Form from './Form'
import Clock from './Clock'
import { ConfigProvider } from 'antd';
class App extends Component {
    state = {
        characters: [],

    }
    removeCharacter = (index) => {
        const {characters} = this.state
        this.setState({
            characters:characters.filter((character, i) => {
                return i!== index
            })
        })
    }
    handleSubmit = (character) => {
        this.setState({
            characters: [...this.state.characters, character]
        })
    }
    render() {
      const {characters} = this.state
      return (
        <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#ff4d4f',
          },
        }}
      >
        <div className='container'>
            <Clock />
            <Table characterData={characters} removeCharacter={this.removeCharacter}/>
            <Form handleSubmit={this.handleSubmit}/>
        </div>
      </ConfigProvider>
      )
    }
  }
export default App