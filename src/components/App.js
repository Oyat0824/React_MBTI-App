import React, { useState } from 'react'
import Home from './Home'
import Game from './Game'
import { Container } from '../styles/Style'

function App() {
  // bool 타입 상태 관리
  const [ begin, setBegin ] = useState(false)

  const goToGame = () => setBegin(true)
  const goToHome = () => setBegin(false)

  // begin 상태에 따라 보여줄 컴포넌트 설정
  return <Container>
    { begin ? <Game goToHome={goToHome} /> : <Home goToGame={goToGame} />}
  </Container>
}

export default App