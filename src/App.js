import logo from './logo.svg';
import './App.css';
import VideoPlayer from './VideoPlayer';
import Recommendaions from './Recommendations';
import Comments from './Comments';

function App() {


  return (
    <div className="App">
      <div className='columns'>
        <div className='primary'>
          <VideoPlayer />
          <Comments />


        </div>
        <div className='secondary'>
          <Recommendaions />
        </div>
      </div>
    </div>
  );
}

export default App;
