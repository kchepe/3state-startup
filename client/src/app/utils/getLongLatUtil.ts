import { LatLngTuple } from 'leaflet';
import { IProperty } from '../types/types';

const getLongLatUtil = (property: IProperty): LatLngTuple =>
  [+property.longitude, +property.latitude] as LatLngTuple;

export default getLongLatUtil;
