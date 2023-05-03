import { useEffect, useState } from 'react';
import Image from 'next/image';
import { createCanvas, loadImage, CanvasRenderingContext2D } from 'canvas';
import {DEFAULT_BLUR_URL} from "../../../utils/constants";

async function convertImageToBase64(imageUrl: string): Promise<string> {
    const response = await fetch(imageUrl);
    const buffer = await response.arrayBuffer();
    const base64 = btoa(
        new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
    return base64;
}

async function fetchBlurDataUrl(base64: string, blurRadius: number, formatImage: string): Promise<string> {
    const canvas = createCanvas(0, 0);

    const img = await loadImage(`data:image/${formatImage};base64,${base64}`);

    const { naturalWidth: width, naturalHeight: height } = img;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    // @ts-ignore
    ctx.filter = `blur(${blurRadius}px)`;
    ctx.drawImage(img, 0, 0, width, height);
    const dataUrl = canvas.toDataURL();
    return dataUrl;
}

interface Props {
    src: string;
    alt: string;
    typeObject: string;
    formatImage?: 'jpeg';
    blurRadius?: number;
}

const Blur = ({ src, alt, typeObject, formatImage, blurRadius = 10 }: Props): JSX.Element => {
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);
    const [imageBase64, setImageBase64] = useState<string>();
    const [blurDataUrl, setBlurDataUrl] = useState<string>();

    useEffect(() => {
        const generateImageBase64 = async () => {
            const base64 = await convertImageToBase64(src);
            setImageBase64(base64);
            setImageLoaded(true);
        };
        generateImageBase64();
    }, [src]);

    useEffect(() => {
        if (!imageLoaded || !imageBase64) return;

        const generateBlurDataUrl = async () => {
            const dataUrl = await fetchBlurDataUrl(imageBase64, blurRadius as number, formatImage);
            setBlurDataUrl(dataUrl);
        };
        generateBlurDataUrl();
    }, [imageLoaded, imageBase64, blurRadius]);
    return (
        <>
            <Image src={src} alt={alt} fill objectFit={`${typeObject}`} />
            {blurDataUrl && (
                <div>
                    <Image
                        src={blurDataUrl}
                        alt={alt}
                        fill
                        objectFit={`${typeObject}`}
                        placeholder="blur"
                        blurDataURL={blurDataUrl}
                    />
                    <Image src={src} alt={alt} fill objectFit={`${typeObject}`} />
                </div>
            )}
        </>
    );

};

export default Blur;
