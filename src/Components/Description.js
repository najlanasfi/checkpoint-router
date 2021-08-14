import react from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import { useParams
 } from 'react-router';
function Description  (props) {
  console.log(props)
const params=useParams();
let m=props.movies.find((el)=>(el.id==params.xd));
//console.log(m)
 return(
     <div>
         <Container>
             <Row>
                 
                 <Col>
                 <h1>{m.title}</h1>
                 <h4>{m.description}</h4>
                 </Col>
             </Row>
         </Container>
     </div>
 )
}  

export default Description;