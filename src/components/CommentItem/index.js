import './index.css'

const CommentItem = props => {
  const {eachComment, onDeleteUpdateList, onIsLike} = props
  const {inputValue, textAreaValue, isLike, id} = eachComment
  const firstWord = inputValue[0].toUpperCase()

  const firstImage =
    'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const secondImage =
    'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const onDeteleItem = () => {
    onDeleteUpdateList(id)
  }

  return (
    <li className="list-div">
      <div className="sub-list-div">
        <div className="first-word-div">{firstWord}</div>
        <div className="name-div">
          <h1 className="name-heading">{inputValue}</h1>
          <p className="name-para">{textAreaValue}</p>
        </div>
      </div>
      <div className="like-delete-div">
        <div>
          <img className="like-image" src={firstImage} alt="like" />
          <button onClick={onIsLike} type="button" className="like-button">
            Like
          </button>
        </div>

        <button
          onClick={onDeteleItem}
          data-testid="delete"
          type="button"
          className="like-button"
        >
          <img
            className="like-image"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
