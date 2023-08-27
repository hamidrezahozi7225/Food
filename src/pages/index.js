import axios from 'axios';
import DiscountFC from 'components/template/DiscountFC';
import HeaderContent from 'components/template/headerContent';

export default function Home({ foodsDiscount }) {
  return (
    <>
      <HeaderContent />

      <DiscountFC data={foodsDiscount} />
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get('http://localhost:4000/data');
  const data = await res.data;
  const foodsDiscount = data.filter((itm) => itm.discount > 0);

  return {
    props: {
      foodsDiscount,
    },
  };
}
