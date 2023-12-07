import logo from './logo.svg';
import './App.css';

function App() {
  const commentsData = [
    { creator: 'Alex', comment: 'Great video', likedCount: 10 },
    { creator: 'Olivia', comment: 'Thank you so much!', likedCount: 3 },
    { creator: 'Lucas', comment: 'Awesome!', likedCount: 0 }
  ];

  return (
    <div className="App">
      <div className='columns'>
        <div className='primary'>
          <div className='video-player'>VideoPlayer</div>
          <div className='comments'>
            {
              commentsData.map((comment) => {
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
              })
            }
          </div>
        </div>
        <div className='secondary'>
          <div className='recommendations'>Recommendations</div>
        </div>
      </div>
    </div>
  );
}

export default App;
