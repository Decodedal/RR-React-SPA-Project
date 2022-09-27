import Myimage from "./dallas.jpg"
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function About(){
   return(
   <div>
          <Card style={{ width: "100vw" }}>
      <Card.Img src="https://media1.giphy.com/media/scZPhLqaVOM1qG4lT9/giphy.gif?cid=ecf05e47enoj1nye09dxfw7hixa4jbrbw1tenzrmnvhywkdh&rid=giphy.gif&ct=g" />
      <Card.Body>
        <Card.Title>About Me</Card.Title>
        <Card.Text>
        Hi! My name is Dallas Palumbo. I am a 29 year old native New Yorker born and raised in Queens. For the last five years, I have been working in audio; operating sound for wedding bands and running recording studio sessions. For the past year, I have been learning web development. I am currently enrolled in NYU’s software development bootcamp where over the course of 10 months, I am learning the tools and techniques of modern professionals in the Web Dev industry. I will complete the program in January 2023, and I can’t wait to join the workforce and flex my coding skills. Explore my portfolio page and check out some of the great projects I have worked on so far! 
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
   )
}

export default About;