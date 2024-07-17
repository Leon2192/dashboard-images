import React from 'react';
import Image from 'next/image';

const Home = () => {
  const images = [
    'https://imgdashboard.blob.core.windows.net/images/amdryzen.jpg',
    'https://imgdashboard.blob.core.windows.net/images/bannerwebaruba.jpg',

  ];

  return (
    <div>
      <h1>Imágenes desde Azure Blob Storage</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((imageUrl, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <Image src={imageUrl} alt={`Imagen ${index}`} width={200} height={300} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
