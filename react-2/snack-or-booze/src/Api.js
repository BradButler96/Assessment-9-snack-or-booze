import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  static async getSnacksAndDrinks() {
    const snacks = await axios.get(`${BASE_API_URL}/snacks`);
    const drinks = await axios.get(`${BASE_API_URL}/drinks`);

    const fullMenu = {
      snacks: snacks.data,
      drinks: drinks.data,
    }
    return fullMenu;
  }

  // Make axios post request to add new snack/drink object to the DB
  static async addSnacksAndDrinks(type, newItem) {
    const item = await axios.post(`${BASE_API_URL}/${type}s`, {
        id: newItem.name,
        name: newItem.name,
        description: newItem.description,
        recipe: newItem.recipe,
        serve: newItem.serve
    });
  }
}

export default SnackOrBoozeApi;
