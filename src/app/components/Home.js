/**
 * Created by sertac.turkel on 09/07/2017.
 */
import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.age = props.age;
    }

    onMakeOlder() {
        this.age += 3;
        console.log(this.age)
    }

    render() {
        return (
            <div>
                <p>In a new Component!!!</p>
                <p>Your name is {this.props.name} and your age is {this.age}</p>
                <hr/>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number
}
