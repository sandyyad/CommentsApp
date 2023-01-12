import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    CommentDetails: [],
    inputValue: '',
    textAreaValue: '',
    commentsCount: 0,
    isLike: 0,
  }

  onUpdateComment = event => {
    event.preventDefault()
    const {inputValue, textAreaValue} = this.state
    const newComment = {
      id: uuidv4(),
      inputValue,
      textAreaValue,
      isLike: 0,
    }

    this.setState(preState => ({
      CommentDetails: [...preState.CommentDetails, newComment],
      commentsCount: preState.commentsCount + 1,
      inputValue: '',
      textAreaValue: '',
    }))
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  onChangeTextArea = event => {
    this.setState({textAreaValue: event.target.value})
  }

  render() {
    const {
      CommentDetails,
      inputValue,
      textAreaValue,
      commentsCount,
      isLike,
    } = this.state

    return (
      <div className="main-div">
        <div className="main-sub-div">
          <h1 className="Comments-heading">Comments</h1>
          <div className="sub-div">
            <div className="input-div">
              <p>Say something about 4.0 Technologies</p>
              <form className="form-div" onSubmit={this.onUpdateComment}>
                <input
                  placeholder="Your Name"
                  value={inputValue}
                  onChange={this.onChangeInput}
                  type="text"
                />
                <textarea
                  placeholder="Your Comment"
                  value={textAreaValue}
                  onChange={this.onChangeTextArea}
                  type="text"
                />
                <button className="button" type="submit">
                  Add Comment
                </button>
              </form>
            </div>
            <div className="">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
                alt="comments"
              />
            </div>
          </div>
          <div className="hr-div">
            <hr />
          </div>
          <div>
            <p>
              <span className="span-el">{commentsCount}</span> Comments
            </p>
          </div>
          <ul className="ul-div">
            {CommentDetails.map(eachComment => (
              <CommentItem eachComment={eachComment} key={eachComment.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
