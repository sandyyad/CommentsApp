// Write your code here
import './index.css'

const CommentItem = props => {
  const {eachComment} = props
  const {inputValue, textAreaValue} = eachComment

  return (
    <div>
      <h1>{inputValue}</h1>
      <p>{textAreaValue}</p>
    </div>
  )
}

export default CommentItem
