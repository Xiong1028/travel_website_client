import styled from "styled-components";

export const InfoWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`;

export const Head = styled.div`
  width: 80%; 
  margin: 0 auto;
  margin-top: 5%;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: bolder;
  line-height: 100%;
  color: #797979;
`;

export const Text = styled.div`
  width: 80%; 
  margin: 1% auto;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: bolder;
  line-height: 180%;
  color: #797979;
`;

export const Email = styled.a`
  text-align: left;
  fontSize: 14px;
  color: #797979;
  :hover{
    text-decoration: none;
    text-weight: bold;
  }
`;

export const CardWrapper = styled.div`
  width: 75%; 
  margin: 1% auto 5%;  
  display:flex;
  justify-content:space-between;
`;

