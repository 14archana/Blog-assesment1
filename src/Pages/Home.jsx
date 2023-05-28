import React from 'react'
import {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function Home() {
  <h1>Blog</h1>
  const [Blog,setBlog] = useState([]);

  const getData = async () =>{
 const data = await fetch('https://jsonplaceholder.typicode.com/posts')
 const jsonData = await data.json();
 setBlog(jsonData)
 }
useEffect(()=>{
getData();


},[])
  return (
  <div>

    <Container className='mt-5 pt -5' >
    <h1>Blogs</h1>
      <Row>
        {
        Blog.map((items, index) => {
          return (
            <Col key ={index}>
            <Card className='mt-3' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2018/01/14/21/16/paper-3082623_1280.jpg" />
          <Card.Body>
            <Card.Title>{items.title}</Card.Title>
            <Card.Text>
        {items.body}  
            </Card.Text>
            <Button variant="primary">show more</Button>
          </Card.Body>
        </Card>
                
     </Col>
      )
        })
        }
      </Row>
      {/* }) */}
        {/* } */}
        {/* </Row> */}
</Container>
    </div>
    
  )
}
