import { gql } from '@apollo/client';

const GET_PROVINCES = gql`
  query Provinces {
    provinces {
      provinceName
      provinceCode
      cities {
        cityName
        cityCode
        barangays {
          brgyCode
          brgyName
        }
      }
    }
  }
`;

export default GET_PROVINCES;
