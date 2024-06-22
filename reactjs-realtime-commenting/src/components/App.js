/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
import Ably from "./Ably"
import React, { Component } from 'react'
import CommentsBox from './CommentsBox'
import Comments from './Comments'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleAddComment = this.handleAddComment.bind(this)
    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    const channel = Ably.channels.get("comments")
  
    channel.attach()
    channel.once("attached", () => {
      channel.history((err, page) => {
        // create a new array with comments in reverse order (old to new)
        const comments = Array.from(page.items, (item) => item.data)
        this.setState({ comments })
        channel.subscribe((msg) => {
          this.handleAddComment(msg.data)
        })
      })
    })
  }

  handleAddComment(comment) {
    this.setState(prevState => {
      return {
        comments: [comment].concat(prevState.comments),
      }
    })
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <CommentsBox />
              <Comments comments={this.state.comments} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default App
