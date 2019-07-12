import React from 'react';
import LikeButton from './LikeButton';

let total = 0

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
        this.state = { totalLikes: 0 }
    }
    increment() {
        total = total + 1;
        this.setState({ totalLikes: total });
    }
    decrement() {
        total = total - 1;
        this.setState({ totalLikes: total });
    }
    render() {
        var simplecontent =
            <div>
                <h1>Total Likes: {this.state.totalLikes}</h1>
                <LikeButton handleClick={this.increment} text="Like" />
                <LikeButton handleClick={this.decrement} text="Dislike" />
            </div>;
        return simplecontent;
    }
}
export default Content;