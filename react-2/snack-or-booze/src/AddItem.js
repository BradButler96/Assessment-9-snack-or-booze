import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

const AddItem = ({ addItem }) => {
    // Provide an initial state to reset form to
    const initialState = {
        id: '',
        name: '',
        description: '',
        recipe: '',
        serve: ''
    }
    // Track whether the item being added is a snack or a drink
    const [type, setType] = useState('')
    const [formData, setFormData] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    // Upon submission form data is converted to an object and the function to add item to the database is called then form data is reset
    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(type, { item: {
                            id: formData.name,
                            // Capitalize the first letter in each word of the name provided
                            name: formData.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
                            description: formData.description,
                            recipe: formData.recipe,
                            serve: formData.serve
                        } 
                    });
        setFormData(initialState)
    }

    return (
        <section className="col-6">
            <Card>
              <CardBody>
                <CardTitle className="text-center mt-1 mb-3 h1">
                    Add an item to our menu here!
                </CardTitle>
                
                <CardText className="text-center">
                    {/* Select whether user is adding a snack or a drink and set the type state to the respective item type */}
                    <Button 
                        className='btn btn-outline-light col-5 mt-2 mx-1 py-2' 
                        size='lg'
                        style={{ fontSize: '1.75rem' }}
                        onClick={() => setType('Snack')}
                    >Add a Snack</Button>

                    <Button 
                        className='btn btn-outline-light col-5 mt-2 mx-1 py-2' 
                        size='lg'
                        style={{ fontSize: '1.75rem' }}
                        onClick={() => setType('Drink')}
                    >Add a Drink</Button>
                </CardText>

                {/* If no type is declared yet do not display the add item form */}
                {type === '' ? null : (
                // Once type has been declared display the add item form
                <form className="text-center" onSubmit={handleSubmit}>
                    <div className='form-input-container my-4'>
                        <label className="col-12 text-center h3" htmlFor='name'>
                            {type} Name
                        </label>
                        <input 
                            type='text'
                            name='name'
                            className="col-10 input-lg py-1"
                            value={formData.name || ''}
                            onChange={handleChange}
                        /> 
                    </div>
                    <div className='form-input-container my-4'>
                        <label className="col-12 text-center h3" htmlFor='description'>
                           Description
                        </label>
                        <textarea 
                            rows="3" 
                            name='description'
                            className="col-10" 
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>               
                    <div className='form-input-container my-4'>
                        <label className="col-12 text-center h3" htmlFor='recipe'>
                            Recipe
                        </label>
                        <textarea 
                            rows="3" 
                            name='recipe'
                            className="col-10" 
                            value={formData.recipe}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-input-container my-4'>
                        <label className="col-12 text-center h3" htmlFor='serve'>
                            How to Serve
                        </label>
                        <textarea 
                            rows="3" 
                            name='serve'
                            className="col-10" 
                            value={formData.serve}
                            onChange={handleChange}
                        />
                    </div>
                    <Button 
                        className='btn btn-outline-light col-10 mt-2 mb-3 py-2' 
                        size='lg'
                        style={{ fontSize: '1.75rem' }}
                    >Submit {type}</Button>
                </form>
                )}
              </CardBody>
            </Card>
      </section>
    )
}

export default AddItem