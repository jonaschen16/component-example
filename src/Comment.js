
function Comment(props) {
    const comment = props.comment;

    return (
        <div class="comment">
            <h3 class="comment-header">{ comment.creator }</h3>
            <p class="comment-body">{ comment.comment }</p>
            <div class="comment-actions">
                <button>Like</button>
                <span>{ comment.likedCount }</span>
            </div>
        </div>
    )
}

export default Comment;


