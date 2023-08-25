import { FC } from 'react';
import ImageSlider from '@/app/common/ImageSlider';
import Box from '@/app/common/Box';

interface FloorLayoutProps {
  layoutUrl: string[];
}

const FloorLayout: FC<FloorLayoutProps> = ({ layoutUrl }) => (
  <Box className="w-3/4 lg:w-2/5">
    <ImageSlider images={layoutUrl} size="small" />
  </Box>
);

export default FloorLayout;
