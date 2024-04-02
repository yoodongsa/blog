import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {

  let [titles, setTitles] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [title, setTitle] = useState(0);
  let [likes, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

  function like(i) {
    let copy = [...likes];
    copy[i] = likes[i]+1;
    setLike(copy);
  }

  function changeTitle1() {
    let copy = [...titles];
    copy[0] = '여자 코트 추천';
    setTitles(copy);
  }
  
  function sortByChosung() {
    let sortTitles = [...titles.sort()];
    setTitles(sortTitles);
  }

  function writePost(event){
    if (event.code === 'Enter') {
      setTitles([event.target.value, ...titles])
    }
  }

  function deletePost(event){
    let copyTitles = [...titles];
    copyTitles.splice(event.target.id, 1);
    setTitles(copyTitles);
  }
  
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      {
        titles.map((title, i) => (
          <div className='list' key={i}>
            <h4 onClick={()=>{setTitle(i); setModal(true);}}>{title}</h4><span onClick={()=> like(i)}>👍</span> {likes[i]}
            <button id={i} onClick={deletePost}>삭제</button>
            <p>2/17 발행</p>
          </div>
        ))
      }

      <input type="text" onKeyDown={writePost}/>

      {
        modal ? <Modal titles={titles} title={title} changeTitle1={changeTitle1}/> : null
      }
      {/* <Modal2></Modal2> */}

      {/*       <button onClick={changeTitle1}>제목 변경하기</button>
        <button onClick={sortByChosung}>제목 정렬하기</button> */}
    </div>
  );
  
}


function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.titles[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.changeTitle1}>글수정</button>
    </div>
  )
}

class Modal2 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name : "kim",
      age : 20
    }
  }
  render(){
    return(
      <div>
        안녕 {this.state.age}
        <button onClick={()=>{
          this.setState({age : 21})
        }}>버튼</button>
    </div>
    )
  }
}

export default App;
