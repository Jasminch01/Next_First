import Image from 'next/image';
import React from 'react';
import image from '@/assets/pexels-pixabay-158361.jpg'

const AlbumPage = () => {
    return (
        <div>
            <Image src={`https://i.ibb.co/F4f5J0d/pexels-julia-m-cameron-4144294.jpg`} alt='album image' height={300} width={500}/>

            <Image src={image} alt='album image' height={300} width={500}/>
        </div>
    );
};

export default AlbumPage;