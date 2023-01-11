import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
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

// Write your code here

class Comments extends Component {
  render() {
    return (
      <div className="main-div">
        <div className="main-sub-div">
          <div className="sub-div">
            <div className="input-div">
              <h1 className="Comments-heading">Comments</h1>
              <p>Say something about 4.0 Technologies</p>
              <input type="text" />
              <textarea type="text" />
              <button className="button" type="button">
                Add Comment
              </button>
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
              <span className="span-el">0</span> Comments
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
