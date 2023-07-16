import React, { useState, useEffect } from "react";
import { BrowserRouter, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Item from "./Item";
import AddItem from "./AddItem";
import NotFound from "./NotFound";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);
  // Using snack & drink states to update the useEffect caused a perpetual rerendering so a recently added state was used to rerender when a new snack/drink is created
  const [recentlyAdded, setRecentlyAdded] = useState('');

  // Call API method to add new item object to appropriate database table
  const addItem = async (type, newItem) => {
    await SnackOrBoozeApi.addSnacksAndDrinks(type, newItem.item)    
    // Update recently added to trigger snack/drink list component to rerender
    setRecentlyAdded(newItem.item.id)
  }

  useEffect(() => {
    async function getSnacksAndDrinks() {
      // Get snacks/drinks from DB
      let menu = await SnackOrBoozeApi.getSnacksAndDrinks();
      // Update snack & drink states to contain all values in respective DB tables
      setSnacks(menu.snacks);
      setDrinks(menu.drinks);
      setIsLoading(false);
    }
    getSnacksAndDrinks();
  }, [recentlyAdded]);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            {/* Get list of all snacks */}
            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" />
            </Route>
            {/* Get specified snack or redirect to /snacks if snack id is invalid */}
            <Route path="/snacks/:id">
              <Item items={snacks} cantFind="/snacks" />
            </Route>
            {/* Get list of all drinks */}
            <Route exact path="/drinks">
              <Menu items={drinks} title="Drinks" />
            </Route>
            {/* Get specified drink or redirect to /drinks if snack id is invalid */}
            <Route path="/drinks/:id">
              <Item items={drinks} cantFind="/drinks" />
            </Route>
            {/* Add a snack/drink to the menu database */}
            <Route path="/add/">
              <AddItem addItem={addItem} cantFind="/drinks" />
            </Route>
            {/* Send all invalid paths to 404 page */}
            <Route path="*">
              <NotFound />
            </Route>          
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
