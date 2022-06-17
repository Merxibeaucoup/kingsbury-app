import React from 'react'
import styled from "styled-components"




const Container = styled.div`
height: 100px;
width: 100vw;
position: sticky;
  top: 0;
  z-index:999;
  background-color: white  ;
  
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
    
`
const Left = styled.div`
flex: 1;
display: flex;
    
`
const Logo = styled.img`
width:50%;
height:40%;
object-fit:cover;
    
`
const Center = styled.div`
flex: 2;
display: flex;
align-items: center;

`
const NavItem = styled.div`
font-style: 14px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-weight: bold;
cursor: pointer;
margin-left:55px;
color:#117C96;
letter-spacing: 1px;
transition: all 0.55s ease;
  &:hover {
    color:#e61651e4;
    text-decoration-line: underline;
  text-decoration-style: double;
  letter-spacing:1.5px;
    transform: scale(1.0);
   
    
   
  }



  
`
const Right = styled.div`
flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
    
`


const Button = styled.button`
padding: 10px;
border-style:none;
border-radius:10px;
background-color:#e9b828;
cursor: pointer;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-weight: bold;
color:white;
transition: all 0.65s ease;
  &:hover {
    background-color: white;
    transform: scale(1.0);
    background:url("/img/btn-bg1.png");
    
   
  }
    
`


const Navbar = () => {
  return (
   <Container>
       <Wrapper>
        
           <Left>
             
               <Logo src="/img/ihr.png" />
             
           </Left>
          
           <Center>
               <NavItem>THE VENUE</NavItem>
               <NavItem>MENUS</NavItem>
               <NavItem>THE BAR</NavItem>
               <NavItem>CONTACT US</NavItem>
              

           </Center>

           <Right>

               <Button> Order Online</Button>
               <Button> Book Venue</Button>

           </Right>





       </Wrapper>
       
       
        </Container>
  )
}

export default Navbar