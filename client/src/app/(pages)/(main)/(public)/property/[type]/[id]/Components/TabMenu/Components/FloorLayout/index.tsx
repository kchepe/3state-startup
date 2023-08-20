import { FC } from 'react';
import ImageSlider from '@/app/common/ImageSlider';

interface FloorLayoutProps {
  layoutUrl: string[];
}

const FloorLayout: FC<FloorLayoutProps> = ({ layoutUrl }) => (
  <div className="w-3/4 lg:w-2/5">
    <ImageSlider images={layoutUrl} size="small" />
  </div>
);

export default FloorLayout;
