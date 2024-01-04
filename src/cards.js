import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
function Cards({ line1, line2, Icons }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <img className="img-icon" src={Icons} alt="" />

        <Card.Title>
          {line1} <br /> {line2}
        </Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
}

export default Cards;
