import { MoreHorizOutlined } from '@material-ui/icons';
import React from 'react'
import styled from "styled-components"
import Appmenu from '../components/data';
import MenuList from '../components/MenuList';



const Container = styled.div`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;


`
const Left = styled.div`
flex: 1;
  display: flex;
  

`
const LeftContainer = styled.div`
background-color:#ffffff63;
left: 2%;
width:28%;
  position: absolute;
  
    flex-wrap: wrap;
    justify-content: space-between;
`

const Center = styled.div`
flex: 1;
  display: flex;
  

`
const CenterContainer = styled.div`

left: 37%;
width:28%;
  position: absolute;
  
    flex-wrap: wrap;
    justify-content: space-between;
`

const Right = styled.div`
flex: 1;
  display: flex;
`
const RightContainer = styled.div`

right: 2%;
  width: 28%;
  position: absolute;
`
const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: pre;
  text-decoration: underline;
`
const Category = styled.h3`
color: #117C96;
justify-content: center;
  align-items: center;
 display: flex;
 font-size: 30px;
 font-weight: 650;


  
`
const Item = styled.h3`
  margin: 0;
`
const Desc = styled.p`
text-align: center;
    color: #777;
    margin:3;
  
`
const Price = styled.h2`
 font-size: 18px;
    font-weight: bold;
    color: coral;
    margin:0;
`

const Wrapper = styled.div`
  width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
   
 
 `
 const ItemContainer = styled.div`
 width: 80%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
 
`
const ImgContainer = styled.div`
 
  height: 25vh;
width: 100%;
object-fit: cover;
`

const Image = styled.img`
height:100%;
width:100%;
object-fit: cover;
  
`
const VerticalLine = styled.div`
  border-left: 0.5px solid #99999956;
  height: 99%;
  position: absolute;
  left: 110%;
  margin-left: -3px;
  top: 0;
  bottom: 5px;
`
 
  
  


const Menu = () => {
  
  return (
    <Container> 
      <ImgContainer>
<Image src="/img/burger2.jpg" />
</ImgContainer>
<Title>Menu</Title>


      <Left>
        <LeftContainer>
        <Category>*** APPETIZERS ***</Category>
        {Appmenu.map((item) => (
  <Wrapper key={item.id}>
   
  <ItemContainer>
   
   
    <Item>{item.title}</Item>
    <Desc>{item.desc}</Desc>
    <Price>${item.price}</Price>
   
    
  </ItemContainer>
  <MoreHorizOutlined  color="action" fontSize="inherit"/>
  </Wrapper>
 
         
        ))}
<VerticalLine/>
        </LeftContainer>
        
      </Left>

      <Center>
        <CenterContainer>
        <Category>*** APPETIZERS ***</Category>
        {Appmenu.map((item) => (
  <Wrapper key={item.id}>
   
  <ItemContainer>
   
   
    <Item>{item.title}</Item>
    <Desc>{item.desc}</Desc>
    <Price>${item.price}</Price>
   
    
  </ItemContainer>
  <MoreHorizOutlined  color="action" fontSize="inherit"/>
  </Wrapper>
 
         
        ))}
<VerticalLine/>

        </CenterContainer>
      </Center>


      <Right>
        <RightContainer>
        <Category>*** APPETIZERS ***</Category>
        {Appmenu.map((item) => (
  <Wrapper key={item.id}>
   
  <ItemContainer>
   
   
    <Item>{item.title}</Item>
    <Desc>{item.desc}</Desc>
    <Price>${item.price}</Price>
   
    
  </ItemContainer>
  <MoreHorizOutlined  color="action" fontSize="inherit"/>
  </Wrapper>
 
         
        ))}
<VerticalLine/>

        </RightContainer>
      </Right>


    </Container>

  
  )
}
export default Menu