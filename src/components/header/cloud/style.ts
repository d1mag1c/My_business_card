import styled from "styled-components";

export const CloudBlock = styled.ul`
  display: flex;
  width: max-content;
  height: max-content;
  position: relative;
  margin: auto 0;
`

export const CloudList = styled.ul`
  width: 550px;
  height: 150px;
  display: flex;
  border-radius: 50%;
  margin-left: 100px;
  position: relative;

  z-index: 5;

  & li {
    position: absolute;
    background: #d3ecfd;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    z-index: 3;
    box-shadow: 0 0 150px 5px #ffffff inset;
  }

  & li:first-of-type {
    top: 0;
    left: 0;
    width: 170px;
    height: 170px;
  }

  & li:nth-of-type(2) {
    top: -80px;
    left: 100px;
    width: 220px;
    height: 220px;
  }

  & li:nth-of-type(3) {
    top: -30px;
    left: 230px;

  }

  & li:nth-of-type(4) {
    top: -30px;
    left: 350px;
    width: 170px;
    height: 170px;
  }

  & li:nth-of-type(5) {
    top: 30px;
    left: 360px;
    width: 150px;
    height: 150px;
  }


  & li:nth-of-type(6) {
    top: 10px;
    left: 450px;
    width: 130px;
    height: 130px;
  }

  & li:nth-of-type(7) {
    top: 10px;
    left: 100px;

  }
`
export const MenuLink = styled.div`
  position: absolute;
  width: 500px;
  height: 110px;
  display: flex;
  background: linear-gradient(to right, rgb(178, 178, 178), rgba(243, 243, 243, 0)), linear-gradient(to left, rgb(178, 178, 178), rgba(243, 243, 243, 0)), linear-gradient(rgba(243, 243, 243, 0.01), rgb(243, 243, 243));
  z-index: 6;
  margin-left: 100px;
  top: 20px;
  left: 40px;
  border-radius: 20px;
`