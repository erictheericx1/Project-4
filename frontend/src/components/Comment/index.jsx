import { useState } from "react"
import { updateComment, deleteComment } from "../../../utils/backend"

export default function Comment({ workoutData, refreshComments }) {
    const [showEditForm, setShowEditForm] = useState(false)
    const [editFormData, setEditFormData] = useState({
        name: workoutData.name,
        didithelp: workoutData.didithelp,
        content: workoutData.content
    })

    // Update the form fields as the user types
    function handleInputChange(event) {
        setEditFormData({
            ...editFormData,
            [event.target.name]: event.target.value
        })
    }

    // Execute form submission logic
    function handleSubmit(event) {
        // prevent the page from reloading
        event.preventDefault()
        // close the form
        setShowEditForm(false)
        // update the comment in the backend
        updateComment(editFormData, workoutData._id)
            .then(() => refreshComments())
    }

    // Delete a comment
    function handleDelete() {
        deleteComment(workoutData._id)
            .then(() => refreshComments())
    }


    //  Default JSX of each comment
    let commentElement = 
        <div className="box">
            <div className="content">
                        <p>{workoutData.name}</p>
                        <p>{workoutData.didithelp}</p>
                        <p>{workoutData.content}</p>
                <div className="field is-grouped">
                    <div className="control">
                        <button
                            className="button is-link"
                            onClick={() => {
                            setShowEditForm(true)}}>
                            Edit
                        </button>
                    </div>
                    <div className="control">
                        <button
                            className="button is-danger"
                            onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>

    // Change the comment to a form if the showEditForm state variable is true
    if (showEditForm) {
        commentElement = 
        <form onSubmit={handleSubmit}>
            <div className="field">
                <label className="label">Name</label>
                    <div className="control">
                    <input
                        className="input"
                        name="name"
                        placeholder="Your name"
                        value={editFormData.name}
                        onChange={handleInputChange}/>
                    </div>
            </div>
            <div className="field">
                <label className="label">Did it help?</label>
                    <div className="control">
                        <div className="select">
                        <select
                        name="didithelp"
                        value={editFormData.didithelp}
                        onChange={handleInputChange}>

                        <option value="">--Select an option--</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>

                        </select>
                        </div>
                    </div>
            </div>
            <div className="field">
                <label className="label">Content</label>
                    <div className="control">
                    <textarea
                    className="textarea"
                    name="content"
                    placeholder="tell us your experience!"
                    value={editFormData.content}
                    onChange={handleInputChange}/>
                    </div>
            </div>
            <div className="field is-grouped">
                <div className="control">
                    <button
                    className="button is-dark"
                    onClick={() => {
                    setShowEditForm(false)}}>
                    Close
                    </button>
                </div>
                <div className="control">
                    <button
                    className="button is-success"
                    type="submit">
                    Post
                    </button>
                </div>
            </div>
        </form>
}

    return commentElement
}