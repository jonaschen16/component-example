
import './Comments.css';
import Comment from './Comment';

function Comments() {
    const commentsData = [
        { creator: 'Alex', comment: 'Great video', likedCount: 10 },
        { creator: 'Olivia', comment: 'Thank you so much!', likedCount: 3 },
        { creator: 'Lucas', comment: 'Awesome!', likedCount: 0 }
      ];


    return (
        <div className='comments'>
        {
        commentsData.map((comment) => {
            return (
                <Comment comment={comment} />

            )
        })
        }
        </div>
    )
}

export default Comments;


