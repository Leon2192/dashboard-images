import React from 'react';
import Image from 'next/image';

const NotFound = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <div>
                    <h1 className="text-center text-3xl text-rose-600">LA PAGINA NO EXISTE</h1>
                    <Image
                        src="/images/notfound.png"
                        alt="Not Found"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </>
    );
}

export default NotFound;
