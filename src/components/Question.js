import React from 'react'
import { SubBox, Title, Button } from '../styles/Style'
import { questioncontent } from '../utilities/questioncontents'

function Question(props) {
  // 구조 분해
  const { count, selectAnswer } = props

  // 배열안에 있는 객체 값을 불러와서 세팅
  return <SubBox>
    <Title>
      <h2><span>Q {questioncontent[count].number}</span></h2>
      <h2 style={{textShadow: "1px 1px 1px #000"}}>{questioncontent[count].question}</h2>
    </Title>

    <Button onClick={() => selectAnswer(1, questioncontent[count].type)}>{questioncontent[count].answer1}</Button>
    <Button onClick={() => selectAnswer(2, questioncontent[count].type)}>{questioncontent[count].answer2}</Button>
  </SubBox>
}

export default Question