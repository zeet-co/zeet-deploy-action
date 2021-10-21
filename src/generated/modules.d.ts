
declare module '*/mutation.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const DeployResult: DocumentNode;
export const GetProject: DocumentNode;
export const UpdateProject: DocumentNode;
export const DeployBranch: DocumentNode;
export const GetDeployment: DocumentNode;

  export default defaultDocument;
}
    