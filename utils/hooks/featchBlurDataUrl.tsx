const fetchBlurDataUrl = async (base64: string, blurRadius: number): Promise<string> => {
  const image = new Image();
  image.src = `data:image/jpeg;base64,${base64}`;

  const loadImage = () => {
    // @ts-ignore
    return new Promise((resolve, reject) => {
      image.onload = () => {
        // @ts-ignore
        resolve();
      };
      image.onerror = () => {
        reject();
      };
    });
  };

  await loadImage(); // wait for the image to load

  const canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;

  const context = canvas.getContext('2d');
  // @ts-ignore
  context.filter = `blur(${blurRadius}px)`;
  // @ts-ignore
  context.drawImage(image, 0, 0);

  return canvas.toDataURL();
};

export default fetchBlurDataUrl;
