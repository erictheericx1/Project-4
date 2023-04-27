import { useState, useEffect } from "react"
import { postComment, getComments } from "../../../utils/backend"
import Comment from "../Comment"

export default function commentSection({ exerciseId }) {
    // Save comments queried from the database in state
    const [comments, setComments] = useState([])
    const [showCreateForm, setShowCreateForm] = useState(false)
    const [createFormData, setCreateFormData] = useState({
        name: '',
        didithelp: '',
        content: '',
        exerciseId: exerciseId
    })

    // Query the database for all comments that pertain to this exercise
    useEffect(() => {
        getComments(exerciseId)
            .then(comments => setComments(comments))

    }, [])


    // Update the form fields as the user types
    function handleInputChange(event) {
        setCreateFormData({
            ...createFormData,
            [event.target.name]: event.target.value
        })
    }

    // Render a form that allows a user to create a comment on submit
    function toggleCreateForm() {
        setShowCreateForm(!showCreateForm)
    }

    // Update the comments in the comment section after a database transaction
    function refreshComments() {
        getComments(exerciseId)
            .then(newCommentData => setComments(newCommentData))
    }

    // Execute form submission logic
    function handleSubmit(event) {
        // prevent the page from reloading
        event.preventDefault()
        // clear the form
        setCreateFormData({
            name: '',
            didithelp: '',
            content: ''
        })
        // close the form
        setShowCreateForm(false)
        // create the comment in the backend
        postComment({ ...createFormData, exerciseId: exerciseId })
            .then(() => refreshComments())
    }


    // conditionally render comments
    let commentElements = [<p key='0' className='text-center'>No comments yet. Be the first to comment!</p>]
    if (comments.length > 0) {
        commentElements = comments.map(comment => {
            return <Comment
                key={comment._id}
                workoutData={comment}
                refreshComments={refreshComments}
            />
        })
    }

    // conditionally display the text of the create form button
    let btnText = 'Create'
    if (showCreateForm) {
        btnText = 'Close'
    }

    return (
        <div>
            <h1>People Insights</h1>
            <button
                onClick={toggleCreateForm}>
                {btnText}
            </button>
            {
                showCreateForm && <form
                    onSubmit={handleSubmit}>
                    <input
                        name="name"
                        placeholder="Your name"
                        value={createFormData.name}
                        onChange={handleInputChange}
                    />
                    <br />
                    <select
                        name="didithelp"
                        placeholder="Did this help you?"
                        value={createFormData.didithelp}
                        onChange={handleInputChange}
                        >
                            <option value="">--Select an option--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    <br />
                    <textarea
                        name="content"
                        placeholder="Share your thoughts!"
                        value={createFormData.content}
                        onChange={handleInputChange}
                    />
                    <button
                        type="submit">
                        Post
                    </button>
                </form>
            }
            {commentElements}
        </div>
    )
}