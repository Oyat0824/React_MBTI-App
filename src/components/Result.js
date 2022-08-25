import React, { useEffect, useState } from 'react'
import { Title, Desc } from '../styles/Style'
import { resultcontent } from '../utilities/resultcontents'

function Result(props) {
  // 객체 상태 관리
  const [ resultChar, setChar ] = useState({ description : {} })

  // 생명 주기, 최초 렌더링때 실행
  useEffect(() => {
    // 구조 분해
    const { e, s, t, j } = props.points

    // e s t j 값에 따라 MBTI 유형 결정
    let result = ""
    result += e > 0 ? "E" : "I"
    result += s > 0 ? "S" : "N"
    result += t > 0 ? "T" : "F"
    result += j > 0 ? "J" : "P"
    
    // 필터를 통해 배열 다루기 (true 면 요소 유지 , false 면 버림 그 후 새로운 배열로 반환함)
    const finalResult = resultcontent.filter(content => {
      return content.type === result
    })

    setChar(finalResult[0])
  }, [props.points])

  return <>
        <Title>
          <img style={{width: "80%", marginBottom: 20}} src={resultChar.description.img} alt="이미지" />
          <h2 style={{textShadow: "1px 1px 1px #000", marginBottom: 40}}>{resultChar.description.game}</h2>
        </Title>

        <Desc>
          <h2>당신은 <span>{resultChar.info} ({resultChar.type})</span> 입니다!</h2>
          <h2><span>추천 장르</span><br />{resultChar.description.genre}</h2>
          <h2><span>추천 게임</span><br />{resultChar.description.another}</h2>
          {resultChar.line}
        </Desc>

        <button onClick={props.goToHome}>다시 하기</button>
    </>
}

export default Result