import { LatLngTuple } from 'leaflet';
import { IProperty } from '../types/types';

const getLongLatUtil = (property: IProperty): LatLngTuple =>
  [+property.latitude, +property.longitude] as LatLngTuple;

export default getLongLatUtil;
