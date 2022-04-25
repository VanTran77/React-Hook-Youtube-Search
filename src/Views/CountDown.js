import React, {useState, useEffect} from 'react';

class CountDown extends React.Component {

    state = {
        count: 60
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    componentDidMount() {
        // setTimeout(() => { console.log('Test'); }, 1000);
        this.timer = setInterval(() => {
            this.setState({count: this.state.count -1})
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps !== this.state.count && this.state.count === 0){
            if(this.timer){
                clearInterval(this.timer);
                this.props.onTimesup();
            }
        }
    }

    render() {
        return(
            <div>{this.state.count}</div>
        )
    }

}

const NewCountDown = (props) => {
    const [count, setCount] = useState(60)
    useEffect(() => {
        if (count === 0) {
            props.onTimesup();
            return;
        }

        const timer = setInterval(() => {
            setCount(count - 1)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [count])

    return(
        <div>
            {count} Hooks
        </div>
    )
}

export {CountDown, NewCountDown};