import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [titles, titleState] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [likes, likeState] = useState(0);

  function like() {
    likeState(likes + 1);
  }

  function changeTitle1() {
    let copy = [...titles];
    copy[0] = '여자 코트 추천';
    titleState(copy);
  }

  function sortByChosung() {
    let sortTitles = [...titles.sort()];
    titleState(sortTitles);
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      {
        titles.map((title, i) => (
          <div className='list' key={i}>
            <h4>{title}<span onClick={like}>👍</span> {likes}</h4>
            <p>2/17 발행</p>
          </div>
        ))
      }

      <Modal></Modal>

      <button onClick={changeTitle1}>제목 변경하기</button>
      <button onClick={sortByChosung}>제목 정렬하기</button>
    </div>
  );

}

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
