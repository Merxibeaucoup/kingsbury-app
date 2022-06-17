import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  
  
  
  const Container = styled.div`
    display: flex;
    background-color: #4f4f4f;
    width: 100vw;
    height: calc(100vh- 90px);
    bottom:0;
    z-index:999;
   
   
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.img`
  height: 40%;
  width: 40%;
  
  `;
  
  const Desc = styled.p`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin: 20px 0px;
    color: white;
    letter-spacing: 1px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;

  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
   
  `;
  
  const Title = styled.h3`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-bottom: 30px;
    color:#e9b828;
  `;
  
  const List = styled.ul`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    width: 50%;
    margin-bottom: 10px;
    color:white;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
   
  `;
  
  const ContactItem = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    color:white;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
     
      <Container>
        <Left>
          <Logo src="/img/ihr.png" />
          <Desc>
          The Ice House Restaurant and Bar is the perfect dining experience for 
          the general public and club members. We 
          pride ourselves on using the freshest ingredients available and prepare them using 
          a light and healthful approach in order to meet your highest expectations.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Events</ListItem>
            <ListItem>Gallery</ListItem>
            <ListItem>About</ListItem>

            
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> 2 Ice House Road , Medfield MA. 
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +1 234 56 78
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> contact@medfield.kcm
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
     
    );
  };
  
  export default Footer;