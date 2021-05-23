// Code Keypad Component Here
import React, {Component} from 'react'
 
class Keypad extends Component {
    respondToInput = () => {
        console.log("Entering password...")
    }

    render() {
        return (
        <input type="password" onKeyUp={this.respondToInput} />
        )
    }
}

export default Keypad