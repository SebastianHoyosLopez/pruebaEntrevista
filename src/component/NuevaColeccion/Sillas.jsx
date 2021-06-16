import React from "react";
import { Card, Button } from "react-bootstrap";
import "./sillas.css";

const Sillas = () => {
  return (
    <div className="container card">
      <h3>NUEVA COLECCIÓN</h3>
      <div className="row">
        <div className="col-3">
          <Card style={{ width: "14rem" }}>
            <Card.Img
              width="100px"
              variant="top"
              src="https://imgur.com/BG86rDo.jpg"
            />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <div className="d-grid gap-2">
              <Button variant="primary" size="sm">
                AGREGAR AL CARRITO
              </Button>
            </div>
          </Card>
        </div>
        <div className="col-3">
          <Card style={{ width: "14rem" }}>
            <Card.Img
              width="100px"
              variant="top"
              src="https://imgur.com/BG86rDo.jpg"
            />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-3">
          <Card style={{ width: "14rem" }}>
            <Card.Img
              width="100px"
              variant="top"
              src="https://imgur.com/w4DHk63.jpg"
            />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-3">
          <Card style={{ width: "14rem" }}>
            <Card.Img
              width="100px"
              variant="top"
              src="https://imgur.com/w4DHk63.jpg"
            />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sillas;
