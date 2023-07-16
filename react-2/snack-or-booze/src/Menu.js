import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

const Menu = ({ title, items }) => {

    return (
        <section className="col-md-4">
        <Card>
          <CardBody>
            {/* Display whether the menu is for snacks/drinks */}
            <CardTitle className="font-weight-bold text-center">
              {title} Menu
            </CardTitle>
            <CardText className="font-weight-bold text-center">
              Check out our {title.toLowerCase()} here!
            </CardText>
            <ListGroup>
              {/* Display a list of all items respective to the given menu, with each being a link to a more detailed page on the given item */}
              {items.map(item => (
                <Link to={`/${title}/${item.id}`} key={item.id}>
                  <ListGroupItem>{item.name}</ListGroupItem>
                </Link>
              ))}
            </ListGroup>
          </CardBody>
        </Card>
      </section>
    )
}


export default Menu;