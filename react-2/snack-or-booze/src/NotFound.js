import React from "react";
import { Card, CardBody, CardTitle, CardText, Button, CardLink } from "reactstrap";
import { Link } from "react-router-dom";


const NotFound = () => {

    return (
        <section>
        <Card>
          <CardBody>
            <CardTitle className="text-center mt-1 mb-3 h1">
              It looks like you got lost :(
            </CardTitle>
            <CardText className="text-center">
                <CardLink href='/'>
                  {/* Give users a button to take them back to the homepage */}
                  <Button 
                      className='btn btn-outline-light col-12 mt-2 mb-3 py-3 font-weight-bold' 
                      size='lg'
                      style={{ fontSize: '1.75rem' }}
                  >Let's go back home :D</Button>
                </CardLink>
            </CardText>
          </CardBody>
        </Card>
      </section>
    )
}

export default NotFound