import axios from 'axios';
import FoodDetail from 'components/template/foodDetail';
import React from 'react';

const FoodDetails = ({ data }) => {
  return (
    <div>
      <FoodDetail food={data} />
    </div>
  );
};

export default FoodDetails;

export async function getServerSideProps(context) {
  const {
    query: { foodId },
  } = context;

  const res = await axios.get(`http://localhost:4000/data/${foodId}`);
  const data = await res.data;

  return {
    props: {
      data,
    },
  };
}
