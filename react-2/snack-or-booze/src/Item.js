import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function Item({ items, cantFind }) {
  const { id } = useParams();

  // Redirect back to /snacks or /drinks if item ID is invalid
  let item = items.find(item => item.id === id);
  if (!item) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          {/* Display item name */}
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          {/* Display description of item */}
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            {/* Display item recipe */}
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            {/* Display serving instruction for item */}
            <b>Serve:</b> {item.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Item;