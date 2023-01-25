import styled from "styled-components";

export const HouseBlock = styled.div`
  position: absolute;
  bottom: -30px;
  z-index: 5;
  display: flex;
  align-items: end;
  margin-right: 50px;
`
export const WrapperHouse = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RoofBlock = styled.div`
  width: 0;
  height: 0;
  border-left: 250px solid transparent;
  border-right: 250px solid transparent;
  border-bottom: 200px solid rgb(44, 16, 51);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  & div {
    position: absolute;
    top: 100px;
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & p {
      color: white;
      font-size: 30px;
      margin-bottom: 20px;
    }
  }
`

export const FrameBlock = styled.div`
  width: 350px;
  height: 350px;
  border: 30px solid #9b3000;
  border-radius: 10px;
  display: flex;
`

export const FrameImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const FenceBlock = styled.div`

  height: 250px;
  width: 400px;

  & ul {
    position: relative;
    width: 100%;
    height: 100%;

    & li {
      position: absolute;
      background: linear-gradient(#694004, #2a1804);
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 3;

      & p {
        color: white;
      }
      & a {
        color: white;
        font-size: 12px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
          color: grey;
        }
      }
    }

    & li:nth-of-type(1) {
      width: 490px;
      height: 25px;
      top: 0;
      left: -90px;
      z-index: 4;
      transform: rotate(5deg);
    }

    & li:nth-of-type(2) {
      height: 250px;
      width: 20px;
      left: -40px;
    }

    & li:nth-of-type(3) {
      height: 250px;
      width: 20px;
      left: 160px;
      transform: rotate(5deg);
    }

    & li:nth-of-type(4) {
      height: 250px;
      width: 20px;
      right: 20px;
      transform: rotate(-5deg);
    }

    & li:nth-of-type(5) {
      height: 20px;
      width: 210px;
      left: -30px;
      top: 60px;
    }

    & li:nth-of-type(6) {
      height: 20px;
      width: 210px;
      left: -30px;
      top: 130px;
      transform: rotate(-5deg);
    }

    & li:nth-of-type(7) {
      height: 20px;
      width: 210px;
      left: -30px;
      top: 190px;
      transform: rotate(5deg);
    }

    & li:nth-of-type(8) {
      height: 20px;
      width: 210px;
      left: 170px;
      top: 80px;
      transform: rotate(-5deg);
    }

    & li:nth-of-type(9) {
      height: 20px;
      width: 210px;
      left: 170px;
      top: 160px;

    }

    & li:nth-of-type(10) {
      height: 20px;
      width: 210px;
      right: 20px;
      bottom: -20px;
      transform: skewX(-15deg) rotate(5deg);
      & p {
        color: white;
        font-size: 12px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
          color: grey;
          cursor: pointer;
        }
      }
    }
  }
`
