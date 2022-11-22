import React, {Component} from 'react'
import { Input, Space, Button } from 'antd'
class Form extends Component {
    initialState = {
        name: '',
        job: '',
    }
    state = this.initialState
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value,
        })
    }
    submitForm = () =>{
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    render() {
        const {name, job} = this.state;
        return (
            <Space>
                <Input type='text' name="name" id="name" addonBefore="Name" value={name} onChange={this.handleChange}/>
                <Input type='text' name="job" id="job" addonBefore="Job" value={job} onChange={this.handleChange}/>
                <Button type="primary" onClick={this.submitForm}>Submit</Button>
            </Space>
        )
    };
}
export default Form;