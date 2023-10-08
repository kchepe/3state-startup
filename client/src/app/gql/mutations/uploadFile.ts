import { gql } from '@apollo/client';

const UPLOAD_FILES = gql`
  mutation UploadImageToS3($files: [Upload!]!) {
    uploadImageToS3(files: $files)
  }
`;

export default UPLOAD_FILES;
