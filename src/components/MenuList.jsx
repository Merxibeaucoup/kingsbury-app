import React from 'react'
import styled from "styled-components"
import menu from '../components/data';
import MenuList from '../components/MenuList';



const Container = styled.div`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  height: 100vh;
  width: 100vw;

flex:1;
`

const ImgContainer = styled.div`
  display: flex;
`

const Image = styled.img`
height: 40vh;
width: 100vw;
object-fit: cover;
  
`
const ItemContainer = styled.div`
 width: 22%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
 
`
const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: pre;
  text-decoration: underline;
`
const Category = styled.h3`
color: coral;
justify-content: center;
  align-items: center;
 display: flex;
 font-size: 30px;
 font-weight: 200;
  
`
const Item = styled.h3`
  
`
const Desc = styled.p`
text-align: center;
    color: #777;
  
`
const Price = styled.h2`
 font-size: 18px;
    font-weight: bold;
    color: coral;
`

const Wrapper = styled.div`
  width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
 
  
 
 `
  
  


const Menu = () => {
  
  return (

    <Container>
<ImgContainer>
<Image src="/img/wine1.jpg" />
</ImgContainer>
<Title>Menu</Title>
<Category>** APPETIZER **</Category>


{menu.map((item) => (
  <Wrapper key={item.id}>
   
  <ItemContainer>
   
   
    <Item>{item.title}</Item>
    <Desc>{item.desc}</Desc>
    <Price>${item.price}</Price>
    
  </ItemContainer>

  </Wrapper>
         
        ))}
 
    </Container>
  )
}
export default Menu