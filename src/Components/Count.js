import React, { Component } from 'react'

 class Count extends Component {

      constructor(props) {
          super(props)
      
          this.state = {
               count:0
          }
      }
      
increment() {

//this.setState({
  //  count: this.state.count + 1
//}, ()=>  {console.log('Callback value', this.state.count)

//}
//)
this.setState((prevState, props) => ({
count: prevState.count + 1

}))

console.log(this.state.count);
}


 incrementFive() 
 {

this.increment()



 }

    render() {
        return (
            <div>
             <div>    Count  - {this.state.count}  </div>   
           <button onClick={()=> this.incrementFive() }>Increament</button>
            </div>
        )
    }
}

export default Count
