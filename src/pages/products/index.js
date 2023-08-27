import axios from 'axios';
import ProductsData from 'components/template/productsData';
import React from 'react';

const Products = ({ data }) => {
  return (
    <div>
      <ProductsData data={data} />
    </div>
  );
};

export default Products;

export async function getServerSideProps() {
  const res = await axios.get('http://localhost:4000/data');
  const data = await res.data;

  return {
    props: {
      data,
    },
  };
}
