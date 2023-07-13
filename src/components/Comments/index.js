import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import {
  CommentsContainer,
  CommentsList,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  const [commentsList, setCommentsList] = useState([])

  const onChnagName = event => setName(event.target.value)

  const onChangeCommentText = e => {
    setCommentText(e.target.value)
  }

  const onSubmitComment = e => {
    e.preventDefault()
    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    }
    setCommentsList(prevList => [...prevList, newComment])
    setName('')
    setCommentText('')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onSubmitComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          onChange={onChnagName}
          value={name}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          onChange={onChangeCommentText}
          value={commentText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>

      <CommentsList>
        {commentsList.map(each => (
          <CommentItem commentDetails={each} key={each.id} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
