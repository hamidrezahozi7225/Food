import Swipers from 'components/module/swipers';

const DiscountFC = ({ data }) => {
  console.log('data', data);

  return (
    <div className='mt-5'>
      <Swipers data={data} />
    </div>
  );
};

export default DiscountFC;
