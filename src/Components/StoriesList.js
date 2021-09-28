import { useEffect, useState } from 'react';
import '../App.css';

function App() {
  const [randomStoriesId, setRandomStoriesId] = useState([]);
  const [storiesInfo, setStoriesInfo] = useState([]);
  const [karma, setKarma] = useState([]);

  const getApiData = () =>  {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then(res => res.json())
    .then(data => {
      let newDataSet = data;
      for(let i = 0; i < 10; i++) {
        const randomNumber = Math.floor(Math.random() * newDataSet.length);
        setRandomStoriesId(prev => prev.concat(newDataSet[randomNumber]));
        newDataSet.slice(randomNumber, randomNumber + 1);
      }
    });
  }

  useEffect(() => {
    getApiData();
  }, []);

  useEffect(() => {
    if(randomStoriesId.length === 10) {
      randomStoriesId.map(item => 
        fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json`)
        .then(res => res.json())
        .then(data => {
          fetch(`https://hacker-news.firebaseio.com/v0/user/${data.by}.json`)
          .then(res => res.json())
          .then(data => setKarma(prev => prev.concat(data.karma)))
          const storyInfo = {
            title: data.title,
            url: data.url,
            time: data.time,
            score: data.score,
            by: data.by
          };
          setStoriesInfo(prev => prev.concat(storyInfo));
        })
      )

    }
  }, [randomStoriesId]);

  
  return (
    <div className="App">

      <div className="main-container">
          <div className ="sub-container">
            <h3>Story Id</h3>
            <div className="story">{randomStoriesId.map((story, index) => <p className="story-info" key={index}>{story}</p>)}</div>
          </div>

          <div className ="sub-container">
            <h3>Title</h3>
            <div className="story">{storiesInfo.map((item, index) => <p className="story-info" key={index}>{item.title}</p>)}</div>
          </div>
          <div className ="sub-container">
            <h3>Url</h3>
            <div className="story">{storiesInfo.map((item, index) => <p className="story-info" key={index}>{item.url}</p>)}</div>
          </div>
          <div className ="sub-container">
            <h3>Time</h3>
            <div>{storiesInfo.map((item, index) => <p className="story-info" key={index}>{item.time}</p>)}</div>
          </div>
          <div className ="sub-container">
            <h3>Score</h3>
            <div className="story">{storiesInfo.map((item, index) => <p className="story-info" key={index}>{item.score}</p>)}</div>
          </div>
          <div className ="sub-container">
            <h3>Karma</h3>
            <div className="story">{karma.map((item, index) => <p className="story-info" key={index}>{item}</p>)}</div>
          </div>
      </div>
    </div>
  );
}

export default App;
