import styled from "styled-components";

export const ChatContentWrap = styled.div`
  width: 100%;
  height: 40vh;
  border-bottom: 1px solid #7e7c91;
  overflow-y: scroll;
`;

export const ChatWrap = styled.div`
  width: 50%;
  border: 1px solid #7e7c91;
  margin: 3% auto;
  overflow: hidden;
`;

export const ChatHeader = styled.div`
  width: 100%;
  height: 2rem;
  background-color: #9babab;
  text-align: center;
  line-height: 2rem;
  font-size: 120%;
  color: #fff;
  display: block;
  list-style: none;
`;

export const ReceiveMsg = styled.div`
  width: 100%;
  flex-basis: auto;
  padding: 1%;
  margin: 1% 0;
  display: block;
  list-style: none;
  img {
    width: 40px;
    height: 40px;
    margin-right: 1%;
  }
  span {
    display: inline-block;
    padding: 1%;
  }
`;

export const SendMsg = styled.div`
  width: 100%;
  flex-basis: auto;
  padding: 2%;
  margin: 1% 0;
  text-align: right;
  span {
    padding: 1%;
    font-style: italic;
    display: inline-block;
    border: 1px solid #000000;
    border-radius: 5%;
    background-color: #6200ee;
    color: #fff;
  }
`;

export const SenderWrap = styled.div`
  width: 100%;
  textarea {
    padding: 1%;
    margin: 1%;
  }
`;
