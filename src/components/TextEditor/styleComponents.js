/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 99vh;
  width: 99vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1b1c22;
`

export const BodyContainer = styled.div`
  height: 70vh;
  width: 80vw;
  display: flex;
`
export const TextContainer = styled.div`
  height: 80vh;
  width: 40vw;
  display: flex;
  border: 1px solid #334155;
  flex-direction: column;
`
export const Container = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  height: 50px;
`

export const Button = styled.button`
  color: ${props => (props.isBold ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  border: none;
`
export const Button1 = styled.button`
  color: ${props => (props.isItal ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  border: none;
`

export const Button2 = styled.button`
  color: ${props => (props.isUnder ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  border: none;
`

export const HrLine = styled.hr`
  width: 100%;
  border: 1px solid #334155;
`

export const TextArea = styled.textarea`
  height: 100%;
  width: 100%;
  color: #faf8fc;
  background-color: transparent;
  border: 1px solid #334155;
  outline: none;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItal ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnder ? 'underline' : 'normal')};
`
export const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`
