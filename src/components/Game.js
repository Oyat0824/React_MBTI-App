import React, { useState } from 'react'
import Question from './Question'
import Result from './Result'
import { MainBox, Gauge } from '../styles/Style'

function Game(props) {
  // 답변 끝낸 문항 수 상태 관리
  const [ count, setCount ] = useState(0)

  // MBTI 상태 관리
  const [ e, setE ] = useState(0)
  const [ s, setS ] = useState(0)
  const [ t, setT ] = useState(0)
  const [ j, setJ ] = useState(0)

  const selectAnswer = (btnNum, type) => {
  // 답변 선택 시 그에 따른 MBTI 유형 체크
    if(btnNum === 1) {
      if(type === 'e') { setE(e + 1) }
      if(type === 's') { setS(s + 1) }
      if(type === 't') { setT(t + 1) }
      if(type === 'j') { setJ(j + 1) }
    } else {
      if(type === 'e') { setE(e - 1) }
      if(type === 's') { setS(s - 1) }
      if(type === 't') { setT(t - 1) }
      if(type === 'j') { setJ(j - 1) }
    }
  // 답변 선택 시 답변 문항 수 관리
    setCount(count + 1)
  }

  return <MainBox>
    { count === 20 ? <Result points={ {e, s, t, j} } goToHome={props.goToHome} /> : <Question count={count} selectAnswer={selectAnswer} /> }
    <Gauge><div style={{position: 'absolute', width: `calc(100 / 20 * ${count}%)`, height: "100%", backgroundColor: "#ff3777"}} /></Gauge>
  </MainBox>

}

export default Game