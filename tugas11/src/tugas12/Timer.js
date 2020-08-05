import React, {Component} from 'react'

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      date: new Date()
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUpdate(){
      if(this.state.time === 60){
          
      }
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time - 1,
      date: new Date() 
    });
  }

  render(){
    return(
      <>
      {
        this.state.time >= 0 && (
        <>
        
          <h1 style={{float:"left"}}>
          Sekarang jam - {this.state.date.toLocaleDateString()}
          </h1>
          <h1 style={{float:"right"}}>
          hitung mundur: {this.state.time}
          </h1>

        </>
        )
      }
        
      </>
    )
  }
}

export default Timer