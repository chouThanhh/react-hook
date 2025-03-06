// class component
// function component
import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'HaryPhamDec',
        address: 'Hoi Dan IT',
        age: 26
    };
    handleClick(event) {
        console.log('>> click me my button');
        //Merge state => react class
        this.setState({
            name: 'Eric',
            age: Math.floor((Math.random() * 100) + 1)
            // address: 'Hoi Dan IT',
            // age: 26
        })
        // this.setState({
        //     age: Math.floor((Math.random() * 100) + 1)
        // })
    }
    handleOnMoverOver(event) {
        // console.log(event.pageX)
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    //JSX
    render() {
        return (
            <div>

                My name is {this.state.name} and I'm from {this.state.age}
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>

        );
    }
}

export default MyComponent;