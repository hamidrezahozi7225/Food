import React, { useState } from 'react';

const FoodDetail = ({ food }) => {
  console.log('foood', food);
  const { id, name, price, discount, details, recipe, ingredients } = food;
  const [more, setMore] = useState(recipe.slice(0, 4));
  const [check, setCheck] = useState(false);

  const clickHandler = () => {
    if (!check) {
      setMore(recipe);
    } else {
      setMore(recipe.slice(0, 4));
    }
    setCheck(!check);
  };
  return (
    <div className='bg-secondary min-vh-100 pb-2'>
      <div className=' d-flex text-white justify-content-around '>
        <div className='pt-2 pb-2'>
          <img
            className='rounded-circle px-2'
            width={'400px'}
            src={`/images/${id}.jpeg`}
          />
        </div>
        <div className='p-5 '>
          <h4 className='fw-bold text-start '>{name}</h4>
          <h5 className='fw-bold'>Price: {price}$</h5>
          <p>
            Discount: <span className='badge bg-danger'>{discount}%</span>
          </p>
        </div>
      </div>
      <div className='d-flex flex-nowrap rounded justify-content-around p-4 bg-dark text-white m-2'>
        <div>
          <h2>Details:</h2>
          <ul>
            {details.map((item) => (
              <li>
                {Object.keys(item)[0]} : {item[Object.keys(item)[0]]}{' '}
              </li>
            ))}
          </ul>
        </div>

        <img
          width={'300px'}
          src='/images/fresh.png'
          style={{ backgroundColor: 'inherit' }}
        />
      </div>

      <div className='d-flex justify-content-around p-4 fw-bold rounded text-dark fw-bold  m-2'>
        <div>
          <img
            width={'300px'}
            src='/images/ingredients.png'
            style={{ backgroundColor: 'inherit' }}
          />
        </div>
        <div>
          <h2 className='fw-bold text-white text-start'>ingredients:</h2>

          {ingredients.map((item, index) => (
            <h5 className='mx-5 text-start '>- {item} </h5>
          ))}
        </div>
      </div>
      <div className='p-4 fw-bold rounded text-white bg-dark m-2 d-flex justify-content-around'>
        <div className='w-50'>
          <h2 className='fw-bold'>Recipe:</h2>

          {more.map((item, index) => (
            <p className='px-5'>
              <span className='text-primary'>{index}</span> : {item}{' '}
            </p>
          ))}
          <button className='btn btn-warning mx-5' onClick={clickHandler}>
            {check ? 'See Less' : 'See More'}
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default FoodDetail;
