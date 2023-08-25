import Image, { StaticImageData } from 'next/image';
import {
  RenderSlideProps,
  isImageFitCover,
  useLightboxProps,
  isImageSlide,
  Slide,
} from 'yet-another-react-lightbox';
import Box from '@/app/common/Box';

const isNextJsImage = (slide: Slide): slide is StaticImageData =>
  isImageSlide(slide) && typeof slide.width === 'number' && typeof slide.height === 'number';

const ImageSlides = ({ slide, rect }: RenderSlideProps) => {
  const { imageFit } = useLightboxProps().carousel;
  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  if (!isNextJsImage(slide)) return undefined;

  const width = !cover
    ? Math.round(Math.min(rect.width, (rect.height / slide.height) * slide.width))
    : rect.width;

  const height = !cover
    ? Math.round(Math.min(rect.height, (rect.width / slide.width) * slide.height))
    : rect.height;

  return (
    <Box style={{ position: 'relative', width, height }}>
      <Image
        fill
        alt=""
        src={slide}
        loading="eager"
        draggable={false}
        placeholder={slide.blurDataURL ? 'blur' : undefined}
        style={{ objectFit: cover ? 'cover' : 'contain' }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
      />
    </Box>
  );
};

export default ImageSlides;
