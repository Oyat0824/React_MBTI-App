import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const MainBox = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  width: 850px;
  height: 900px;
  padding: 20px;
  
  background-color: #ffffff60;

  & > p {
    color: #fff;
    font-weight: bold;
    text-shadow: 1px 1px 1px #000;
    margin-top: 50px;
  }

  & > button {
    width: 200px;
    height: 50px;
    border: none;
    color: #fff;
    background-color: #ff3777;
    font-size: 24px;
    margin: 20px;
  
    &:hover {
      background-color: #ff0052;
      cursor: pointer;
    }
  }
`

export const SubBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  & h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }

  & h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  & span {
    color: transparent;
    background: linear-gradient(to top right,#00ffe7,#72ff70);
    -webkit-background-clip: text;
    font-size: 36px;
  }
`

export const Desc = styled.div`
  & h2 {
    margin-bottom: 30px;
  }

  & h3 {
    margin: 30px 0 10px;
    color: transparent;
    background: linear-gradient(to top right,#291bff,#912dff);
    -webkit-background-clip: text;
  }

  & span {
    color: transparent;
    background: linear-gradient(to top right,#3e1bff,#ff2d2d);
    -webkit-background-clip: text;
    font-size: 28px;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 60px;
  border: none;
  color: #fff;
  background-color: #ff3777;
  font-size: 24px;
  margin: 20px;

  &:hover {
    background-color: #ff0052;
    cursor: pointer;
  }
`

export const Gauge = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 16px;
  background-color: #ddd;
  overflow: hidden;
`