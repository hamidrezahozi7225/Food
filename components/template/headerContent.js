import Image from 'next/image';
import Link from 'next/link';

const HeaderContent = () => {
  return (
    <>
      <div className='d-flex justify-content-center border-bottom border-dark'>
        <div className='d-flex justify-content-center mt-5'>
          <div className='w-50'>
            <h1 className='fw-bold mb-2'>
              Be The fastest in Delivering Your Food
            </h1>
            <p className='mb-4'>
              Our job is to filling your tummy with delicous food and with fast
              and free delivery
            </p>
            <Link
              href='/products'
              className='bg-danger p-2 text-white rounded border border-danger text-decoration-none '
            >
              Get Start
            </Link>
          </div>
        </div>
        <div>
          <Image
            src='/images/banner.png'
            width={600}
            height={500}
            alt='banner'
          />
        </div>
      </div>
    </>
  );
};

export default HeaderContent;
