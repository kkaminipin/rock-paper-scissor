import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  console.log('시작');
  const [myChoice, setMyChoice] = useState('');

  const rps = ['가위', '바위', '보'];
  const random = Math.floor(Math.random() * 3);
  const computerChoice = rps[random];

  let myResultMatch = '?';
  let computerResultMatch = '?';

  useEffect(() => {
    console.log('useEffect!!!!!!');
  }, [myChoice]);

  useEffect(() => {
    console.log('useEffect 222222222222222');
  }, []);

  console.log('클릭 이벤트 바로 전!');
  const choiceClickButton = (e) => {
    console.log('클릭 이벤트!!');
    setMyChoice(e.target.innerHTML);
  };
  console.log('클릭 이벤트 바로 후!');

  if (
    (myChoice === '가위' && computerChoice === '보') ||
    (myChoice === '바위' && computerChoice === '가위') ||
    (myChoice === '보' && computerChoice === '바위')
  ) {
    myResultMatch = '승리';
    computerResultMatch = '패배';
  } else {
    myResultMatch = '무승부';
    computerResultMatch = '무승부';
  }
  console.log('끝');
  return (
    <>
      {console.log('html 시작')}
      <div className='wrap'>
        <div className='center'>
          <div className='item left'>
            <div>{myResultMatch}</div>
            <div>{myChoice}</div>
          </div>
          <div className='item right'>
            <div>{computerResultMatch}</div>
            <div>{computerChoice}</div>
          </div>
        </div>
        <div className='center'>
          {console.log('html 클릭 전')}
          <button type='button' onClick={choiceClickButton}>
            가위
          </button>
          <button type='button' onClick={choiceClickButton}>
            바위
          </button>
          <button type='button' onClick={choiceClickButton}>
            보
          </button>
          {console.log('html 클릭 후')}
        </div>
      </div>
      {console.log('html 끝')}
    </>
  );
}

export default App;
