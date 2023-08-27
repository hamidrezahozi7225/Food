import Card from 'components/module/card';
import React from 'react';

const ProductsData = ({ data }) => {
  console.log(data);
  return (
    <div className='d-flex flex-wrap justify-content-around mt-5 rounded-3'>
      {data.map((item) => (
        <Card food={item} />
      ))}
    </div>
  );
};

export default ProductsData;
