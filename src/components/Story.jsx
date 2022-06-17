import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import styled from "styled-components"
import  { Zoom } from 'react-reveal';


const Container = styled.div`
background-color: #f9f9f9;
height: 90vh;
width: 100vw;
position: relative;
display: flex;



    
`

const Left = styled.div`
flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
    
`
const ImgContainer =styled.div`

position: absolute;
  top: 5%;
  left: 5%;
  width: 40%;
  height: 80vh;
  display: flex;
 
  
    
`

const Image =styled.img`

 width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.25s ease;
    
`

const Right = styled.div`
flex: 1;
  display: flex;
 
  
    
`
const DescContainer = styled.div`
background-color:white;
position: absolute;
  top: 5%;
  right: 5%;
  width: 40%;
  height: 80vh;
  display: flex;
  overflow-wrap: break-word;

  
  
 
 
  
`
const Title = styled.h3`
display: flex;
align-items: center;
justify-content: center;
text-decoration: underline;

    
`

const Desc = styled.p`
font-size: 20px;
font-weight: 250;

text-align: center;


margin:10%;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    letter-spacing: 2px;
    color:black;
    flex-wrap: wrap;
  
    transition: all 0.25s ease;
    
    
    
`

const Logo = styled.img`
display: flex;
  height: 18%;
  width: 27%;
  margin:10%;
  align-items: center;
  justify-content: center;
  
  `;
const Wrapper = styled.div`
width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;



`










const Story = () => {
  return (
    <Parallax speed={-20}>
   
   <Container>
       <Left>
           <ImgContainer>
          
           <Image src="/img/drink.jpg" />
          

           </ImgContainer>

       </Left>

       <Right>
       
           <DescContainer>
          
               
               <Desc>
              
               <Title>
              
                  Our Story
                 
                  </Title>
                  
                  <Zoom left cascade>
                          <Wrapper>
                      The Ice House Restaurant and Bar is the perfect dining experience 
                      for the general public and club members. 
                      We pride ourselves on using the freshest ingredients available  
                      and prepare them using a light and healthful
                      approach in order to meet your 
                          highest expectations. Our menu ranges from a variety 
                          of appetizers and pub-style 
                        sandwiches to specialty pizzas and our Kingsbury famous rice bowls. 
                        With a stylish dining room, a casual bar and two state-of-the-art
                          golf simulator, 
                        the Ice House guarantees an exceptional dining experience. 
                        You can guarantee the game will be on! 
                        Come join us for some good food and good times! Bring the entire family!
                        </Wrapper>

 </Zoom>


 <Logo src="/img/kb.png" />

 

               </Desc>
              

           </DescContainer>
       </Right>











   </Container>
  
  </Parallax>
  )
}

export default Story