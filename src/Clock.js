import React, {Component} from 'react'
import { DatePicker, Alert, message} from 'antd';
class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timeID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timeID)
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    render() {
        return (
            <div>
                <DatePicker/>
                <Alert message="当前时间" description={this.state.date.toLocaleTimeString()}/>
            </div>
            
        )
    }
}
export default Clock;