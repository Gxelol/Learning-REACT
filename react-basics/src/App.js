import './App.css';
import { Component } from 'react';

// LIFECYCLE METHODS

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      posts: [
        {
          id: 1,
          title: 'title 1',
          body: 'body 1'
        },
        {
          id: 2,
          title: 'title 2',
          body: 'body 3'
        },
        {
          id: 3,
          title: 'title 3',
          body: 'body 3'
        }
      ]
    };
  }
  timeoutUpdate = null;

  componentDidMount() {
    this.handleTimeout();
  }

  componentDidUpdate() {
    this.handleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = 'Changed';

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1});
    }, 3000);
  }

  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
