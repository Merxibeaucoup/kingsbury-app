import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import styled from "styled-components"
import Fade, { Zoom } from 'react-reveal';

const Container = styled.div`
width: 100vw;
    height: calc(100vh - 100px);
    display:flex;
    position: relative;

`

const Wrapper = styled.div`
    width: 100vw;
    height: 100%;
  display: flex;
`

const ImgContainer = styled.div`
    width: 100vw;
    height: 100%;
    position: relative;`

const Image = styled.img`
 height: 100%;
    width:100vw;
    
`
const InfoContainer = styled.div`
position: absolute;
  top: 5%;
  left: 5%;
  width: 40%;
  height: 80vh;
  display: flex;

`
const Info = styled.p`
font-size: 22px;
font-weight: 300;
background-color:#484a575a;
text-align: center;

margin:5%;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    letter-spacing: 2px;
    color:white;

`
 const Title = styled.h2`
 display: flex;
align-items: left;
text-align:left;
justify-content: center;

     
 `
 const Tt = styled.h5`
 display: flex;
align-items: left;
justify-content: center;
text-decoration: underline;

`





const Chef = () => {
  return (
      <Fade left cascade>
    <Parallax speed={-5}>
    <Container>
        <ImgContainer>
        <Image src="/img/che.jpg" />
        </ImgContainer>

        <InfoContainer>
       
            <Info>
           
            <Title> 
            <Zoom left cascade>
              Martin Marty
              </Zoom>

            </Title>
            <Tt> Executive Chef</Tt>
            
                
            A little info about marty ! .. balh balh blah blah blah blah blah blah bla blah  
            balh balh blah blah blah blah blah blah bla blah  
            balh balh blah blah bwf9wehf9wehwh9rgh3rlah blah blah blah b9wehf9wela blah  
            balh balh blah blah blah blah blah blah bla blah  
            balh balh wewefhewfhblah blah blah blah blah blah bla blwifienBFIWefifieFG  EFWah  
            balh balh blah blah blah blah blah blah bla blah  
            balh balh blah blah blah blah blah blah bla blah  
            balh balh bwefhewf94fflah blah blah blah blah blah bla blah  
            balh balh blah blah blah blah blah blah bla blah  
            balh balh blah blah blah blah blah blah bla blah  
            balh balh blah blah blah blah blah blah bla blah  
            balh balh blah blah blah blah blah blah bla blah  
            balh balh blah blah blah blah blah blah bla blah  
            balh balh blah blah blah blah blah blah bla blah  
            balh balh blah blah blah blah blah blah bla blah  
            </Info>


        </InfoContainer>
    </Container>
    </Parallax>
    </Fade>
  )
}

export default Chef