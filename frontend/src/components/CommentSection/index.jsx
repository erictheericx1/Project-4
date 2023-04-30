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
            <h1 className="title has-text-light">People Insights</h1>
                <button className="button is-warning mb-2" 
                onClick={toggleCreateForm}>
                {btnText}
                </button>
                { showCreateForm && (

        <form onSubmit={handleSubmit}>
            <div className="field">
                <label className="label">Name</label>
                    <div className="control">
                        <input
                        className="input"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={createFormData.name}
                        onChange={handleInputChange}/>
                    </div>
            </div>
            <div className="field">
                <label className="label">Did this help you?</label>
                    <div className="control">
                        <div className="select">
                        <select
                        name="didithelp"
                        value={createFormData.didithelp}
                        onChange={handleInputChange}>

                        <option value="">--Select an option--</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>

                        </select>
                        </div>
                    </div>
            </div>
            <div className="field">
                <label className="label">Share your thoughts!</label>
                    <div className="control">
                    <textarea
                    className="textarea"
                    name="content"
                    placeholder="Write your comment here"
                    value={createFormData.content}
                    onChange={handleInputChange}/>
                    </div>
            </div>
            <div className="field">
                <div className="control">
                    <button className="button is-primary is-outlined" type="submit">
                        Post
                    </button>
                </div>
            </div>
        </form>
    )}

        <div className="container">
            {commentElements}
        </div>
    </div>
    )
}