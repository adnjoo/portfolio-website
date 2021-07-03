'use strict';

//step 1
const e = React.createElement;

//step 2 create a class
class LikeButton extends React.Component {
  //step 3 constructor and props
    constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  //step 4 render is a React function
  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }
    //step 5 return is a function which returns the element
    return (
      <button onClick={() => this.setState({ liked: true })}>
        Like
      </button>    
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(LikeButton), domContainer);