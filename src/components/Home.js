import React from 'react'
import { MainBox, Title } from '../styles/Style'

// App.js 에서 전달 받은 Home 컴포넌트의 props에 함수를 실행
function Home(props) {
  return <MainBox>
    <Title>
      <h1><span>MBTI</span> 유형별 게임 성향</h1>
      <h2>나랑 <span>어울리는 게임</span>은 무엇일까?</h2>
    </Title>
    
    <button onClick={props.goToGame}>시작하기</button>
    <p>MADE BY KIM IL JIN</p>
  </MainBox>

}

export default Home