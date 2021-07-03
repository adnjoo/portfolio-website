//importing node modules

import React from 'react'
import ReactDOM from 'react-dom'

class Test extends React.Component {
    constructor(props){
        super(props)
        this.x = 0
    }
    myfunction = () => {
        console.log('test')
    }
    render(){
    return(
        <button className='test' onClick={this.myfunction}>
            click me
        </button>
    )
    }
}

//function myfunction (){console.log('hi')}

ReactDOM.render(
    <Test />,
    document.getElementById('root')
)