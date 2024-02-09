import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, image, description, price }) => {
    var imagePath = "/images/" + image;
    return (
        <div className='container main-span'>
            <div className="row padded">
                <div className='col-5'>
                    <img src={imagePath} alt="Food" className='food'/>
                </div>
                <div className='col-7 right-panel'>
                    <h3 className='title'>{title}</h3>
                    <div>
                        <h5 className='description'>{description}</h5> 
                    </div>
                    <span className='row bottom-span'>
                        <div className='price-div col'>
                            <h6>{price}</h6>
                        </div>
                        <div className='button-div col'>
                            <button className='add-button btn btn-secondary'>Add</button>
                        </div> 
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
