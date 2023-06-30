import Image from 'next/image';


const Blur = () => {
  return(
      <Image
          src='/hero-image.jpg'
          alt="company"
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcu39vPQAHNAK6RfwbhgAAAABJRU5ErkJggg=='
          placeholder="blur"
          layout="fill"
          objectFit="cover"
      />
  )
}
export default Blur;
