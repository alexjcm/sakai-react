'use client';
import { Galleria } from 'primereact/galleria';
import { Image } from 'primereact/image';
import React, { useEffect, useState } from 'react';
import { PhotoService } from '../../../../demo/service/PhotoService';
import type { Demo } from '@/types';

const MediaDemo = () => {
    const [images, setImages] = useState<Demo.Photo[]>([]);

    const galleriaResponsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then((images) => setImages(images));
    }, []);

    const galleriaItemTemplate = (item: Demo.Photo) => <img src={`/${item.itemImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    const galleriaThumbnailTemplate = (item: Demo.Photo) => <img src={`/${item.thumbnailImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />;

    return (
        <div className="grid p-fluid">
            <div className="col-12">
                <div className="card">
                    <h5>Image</h5>
                    <div className="flex justify-content-center">
                        <Image src={`/demo/images/galleria/galleria10.jpg`} alt="Image" width="250" preview />
                    </div>
                </div>
            </div>

            <div className="col-12">
                <div className="card">
                    <h5>Galleria</h5>
                    <Galleria value={images} responsiveOptions={galleriaResponsiveOptions} numVisible={7} circular style={{ maxWidth: '800px', margin: 'auto' }} item={galleriaItemTemplate} thumbnail={galleriaThumbnailTemplate}></Galleria>
                </div>
            </div>
        </div>
    );
};

export default MediaDemo;
