import { gql } from '@apollo/client';

const UPLOAD_FILES = gql`
  mutation UploadImageToS3($files: [Upload!]!, $propertyTitle: String!) {
    uploadImageToS3(files: $files, propertyTitle: $propertyTitle)
  }
`;

export default UPLOAD_FILES;
