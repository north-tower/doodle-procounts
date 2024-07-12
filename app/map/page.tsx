import MainMap from '@/components/MainMap';
import * as React from 'react';

interface MainMapProps {
  className?: string;
}

function page({ }) {
  return (
    <div className='w-full h-screen'>
      <main className='flex flex-col h-full'>
        <section className="flex-1">
          <MainMap  />
        </section>
        <section className="flex-1 flex flex-wrap">
          <div className="max-w-md mx-auto text-center sm:w-1/2 px-4">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum libero nec justo blandit, id convallis massa volutpat. Ut sit amet nibh at felis eleifend ultrices.</p>
            <p className="mb-4">Duis non lobortis quam. Ut nec ante eu tellus efficitur efficitur. Nullam eget libero sit amet nisi lobortis feugiat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum libero nec justo blandit, id convallis massa volutpat. Ut sit amet nibh at felis eleifend ultrices. Duis non lobortis quam. Ut nec ante eu tellus efficitur efficitur.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default page;
