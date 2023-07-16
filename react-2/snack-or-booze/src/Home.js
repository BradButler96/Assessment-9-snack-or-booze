import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({ snacks, drinks }) {

  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <p style={{ fontSize: 'xx-large' }}>
              Welcome to Silicon Valley's premier dive cafe!
            </p>
          </CardTitle>
          {/* Show total number of snacks */}
          <p style={{ fontSize: 'x-large', display: 'inline', marginRight: '0.5rem' }}>
              Snacks: {snacks.length}
          </p>
          {/* Show total number of drinks */}
          <p style={{ fontSize: 'x-large', display: 'inline', marginLeft: '0.5rem' }}>
              Drinks: {drinks.length}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
