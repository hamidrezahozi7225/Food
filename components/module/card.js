import Link from 'next/link';

const Card = ({ food }) => {
  const { id, name, price, discount } = food;

  return (
    <div className='rounded-3 mb-4'>
      <img
        className='rounded-top-3'
        style={{ height: '210px' }}
        src={`/images/${id}.jpeg`}
      />
      <div>
        <h4 className='fw-bold text-start p-2'>{name}</h4>
        <div className='d-flex justify-content-between px-2'>
          <p>Price: {price}$</p>
          <p>
            Discount: <span className='badge bg-danger'>{discount}%</span>
          </p>
        </div>
        <div className='bg-success text-white m-2 text-center rounded p-1'>
          <Link
            className='text-white text-decoration-none '
            href={`/products/${id}`}
          >
            see details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
