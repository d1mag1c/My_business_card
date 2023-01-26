import styled from "styled-components";

export const SunBlock = styled.div`

  display: flex;
  width: 250px;
  height: 250px;
  border-bottom-left-radius: 100%;
  background: gold;
  z-index: 5;
  transition: 1s;
  &:hover {
    background: #fff006;
    cursor: pointer;
    transition: 1s;

    & ul li {
      background: #fff006;
    }
  }
`

export const TextList = styled.ul<{ stateQuality: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 1s;
  z-index: 5;
  
  & li:first-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 0 50px 50px;
    width: 100%;
    height: 100%;
    border-bottom-left-radius: 100%;
    background: gold;
    z-index: 5;
    transition: 1s;
    & p:first-of-type {
      font-size: 20px;
    }

    & p:last-of-type {
      font-size: 10px;
    }

  }

  & li:not(:first-of-type) {
    width: 180px;
    height: 10px;
    background: gold;
    position: absolute;
    border-radius: 5px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s;
    z-index: 3;
  }

  & li:nth-of-type(2) {
    top: 20px;
    left: ${({stateQuality}) => stateQuality ? '-200px' : '10px'};
    z-index: 3;
  }

  & li:nth-of-type(3) {
    top:  ${({stateQuality}) => stateQuality ? '100px' : '50px'};
    left: ${({stateQuality}) => stateQuality ? '-190px' : '10px'};
    transform: rotate(-10deg);
  }

  & li:nth-of-type(4) {
    top: ${({stateQuality}) => stateQuality ? '190px' : '70px'};
    left: ${({stateQuality}) => stateQuality ? '-155px' : '30px'};
    transform: rotate(-30deg);
  }

  & li:nth-of-type(5) {
    top: ${({stateQuality}) => stateQuality ? '275px' : '100px'};
    left: ${({stateQuality}) => stateQuality ? '-85px' : '60px'};
    transform: rotate(-47deg);
  }

  & li:nth-of-type(6) {
    top: ${({stateQuality}) => stateQuality ? '330px' : '130px'};
    right: ${({stateQuality}) => stateQuality ? '60px' : '-20px'};
    transform: rotate(-65deg);
  }

  & li:nth-of-type(7) {
    top: ${({stateQuality}) => stateQuality ? '360px' : '140px'};
    right: -50px;
    transform: rotate(-90deg);
  }
`