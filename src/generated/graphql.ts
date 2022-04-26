import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  Time: Date;
  URL: string;
  UUID: any;
  Upload: any;
  YAML: any;
};

export type ApiKey = {
  __typename?: 'APIKey';
  createdAt: Scalars['Time'];
  description: Scalars['String'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  token: Scalars['String'];
};

export type AwsAccount = {
  __typename?: 'AWSAccount';
  accountID?: Maybe<Scalars['String']>;
  cloudFormationURL: Scalars['String'];
  clusters?: Maybe<Array<Cluster>>;
  connected?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['Time'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  projects?: Maybe<ProjectConnection>;
  roleARN?: Maybe<Scalars['String']>;
  state: AwsAccountState;
  updatedAt: Scalars['Time'];
};


export type AwsAccountProjectsArgs = {
  input?: Maybe<ProjectsInput>;
};

export enum AwsAccountState {
  Error = 'ERROR',
  Success = 'SUCCESS',
  Waiting = 'WAITING'
}

export type AwsLambda = {
  __typename?: 'AWSLambda';
  apiGatewayUrl?: Maybe<Scalars['String']>;
  arn?: Maybe<Scalars['String']>;
  awsAccount?: Maybe<AwsAccount>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  region?: Maybe<Scalars['String']>;
};

export type AwsLinks = {
  __typename?: 'AWSLinks';
  apiGateway?: Maybe<Scalars['String']>;
  cloudformation?: Maybe<Scalars['String']>;
  cloudwatchLogs?: Maybe<Scalars['String']>;
  cloudwatchMetrics?: Maybe<Scalars['String']>;
  ec2?: Maybe<Scalars['String']>;
  eks?: Maybe<Scalars['String']>;
  iam?: Maybe<Scalars['String']>;
  lambda?: Maybe<Scalars['String']>;
  rds?: Maybe<Scalars['String']>;
  vpc?: Maybe<Scalars['String']>;
};

export type AddAwsAccountInput = {
  accountID: Scalars['String'];
  userID: Scalars['UUID'];
};

export type AddCdnInput = {
  domains?: Maybe<Array<Scalars['String']>>;
  id: Scalars['UUID'];
  provider: CdnProvider;
};

export type AddClusterInput = {
  awsAccountID?: Maybe<Scalars['UUID']>;
  gcpAccountID?: Maybe<Scalars['UUID']>;
  kubeconfig?: Maybe<Scalars['Upload']>;
  name?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  userID: Scalars['UUID'];
};

export type AddContainerRegistryInput = {
  name: Scalars['String'];
  password: Scalars['String'];
  registry: Scalars['URL'];
  userID: Scalars['UUID'];
  username: Scalars['String'];
};

export type AddCoreWeaveAccountInput = {
  kubeconfig?: Maybe<Scalars['Upload']>;
  userID: Scalars['UUID'];
};

export type AddDoAccountInput = {
  accessToken: Scalars['String'];
  userID: Scalars['UUID'];
};

export type AddGcpAccountInput = {
  credentials: Scalars['Upload'];
  projectID: Scalars['String'];
  userID: Scalars['UUID'];
};

export type AddProjectCollaboratorInput = {
  id: Scalars['ID'];
  role: ProjectCollaboratorRole;
  user: Scalars['String'];
};

export type AddRepoCustomDomainInput = {
  domain: Scalars['String'];
  id: Scalars['UUID'];
};

export type AddTeamMemberInput = {
  id: Scalars['UUID'];
  role: TeamMemberRole;
  userID?: Maybe<Scalars['UUID']>;
  username?: Maybe<Scalars['String']>;
};

export type Autoscaling = {
  __typename?: 'Autoscaling';
  coolDownPeriod?: Maybe<Scalars['Int']>;
  maxReplicas: Scalars['Int'];
  minReplicas: Scalars['Int'];
  triggers?: Maybe<Array<AutoscalingTrigger>>;
};

export type AutoscalingInput = {
  coolDownPeriod?: Maybe<Scalars['Int']>;
  maxReplicas: Scalars['Int'];
  minReplicas: Scalars['Int'];
  triggers?: Maybe<Array<AutoscalingTriggerInput>>;
};

export type AutoscalingTrigger = {
  __typename?: 'AutoscalingTrigger';
  spec: Scalars['YAML'];
  type: AutoscalingType;
};

export type AutoscalingTriggerInput = {
  spec: Scalars['YAML'];
  type: AutoscalingType;
};

export enum AutoscalingType {
  Cpu = 'CPU',
  Custom = 'CUSTOM',
  Memory = 'MEMORY',
  Prometheus = 'PROMETHEUS'
}

export type BranchInput = {
  active?: Maybe<Scalars['Boolean']>;
};

export type Build = {
  __typename?: 'Build';
  backend?: Maybe<Scalars['String']>;
  buildID?: Maybe<Scalars['String']>;
  createdAt: Scalars['Time'];
  errorMessage?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  image?: Maybe<Scalars['String']>;
  logs?: Maybe<Logs>;
  metrics?: Maybe<Array<Metric>>;
  state: BuildState;
  updatedAt: Scalars['Time'];
  version?: Maybe<Scalars['String']>;
};


export type BuildMetricsArgs = {
  name: Scalars['String'];
};

export type BuildLogsInput = {
  after?: Maybe<Scalars['String']>;
  deploymentID: Scalars['ID'];
};

export type BuildMethod = {
  __typename?: 'BuildMethod';
  buildCommand?: Maybe<Scalars['String']>;
  dockerfilePath?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nodejsVersion?: Maybe<Scalars['String']>;
  releaseCommand?: Maybe<Scalars['String']>;
  runCommand?: Maybe<Scalars['String']>;
  staticPath?: Maybe<Scalars['String']>;
  type: BuildType;
  workingDirectory?: Maybe<Scalars['String']>;
};

export type BuildStage = IPipelineStage & {
  __typename?: 'BuildStage';
  build?: Maybe<Build>;
  id: Scalars['UUID'];
  job?: Maybe<JobRun>;
  logs?: Maybe<Logs>;
  metrics?: Maybe<Array<Metric>>;
};


export type BuildStageMetricsArgs = {
  name: Scalars['String'];
};

export enum BuildState {
  BuildFailed = 'BUILD_FAILED',
  BuildInProgress = 'BUILD_IN_PROGRESS',
  BuildStarting = 'BUILD_STARTING',
  BuildSucceeded = 'BUILD_SUCCEEDED'
}

export enum BuildType {
  Buildpacks = 'BUILDPACKS',
  Docker = 'DOCKER',
  ElixirPhoenix = 'ELIXIR_PHOENIX',
  GolangModules = 'GOLANG_MODULES',
  Herokuish = 'HEROKUISH',
  Node = 'NODE',
  NodeNextjs = 'NODE_NEXTJS',
  NodeNextjsFast = 'NODE_NEXTJS_FAST',
  NodeStatic = 'NODE_STATIC',
  Python = 'PYTHON',
  PythonDjango = 'PYTHON_DJANGO',
  Ubuntu = 'UBUNTU'
}

export type Cdn = {
  __typename?: 'CDN';
  certificate?: Maybe<Certificate>;
  domains?: Maybe<Array<CdnDomain>>;
  endpoint?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  origin?: Maybe<Scalars['String']>;
  provider: CdnProvider;
  state: Scalars['String'];
};

export type CdnDomain = {
  __typename?: 'CDNDomain';
  certReady?: Maybe<Scalars['Boolean']>;
  domain: Scalars['String'];
  instruction?: Maybe<DnsRecord>;
  routeReady?: Maybe<Scalars['Boolean']>;
};

export enum CdnProvider {
  AwsCloudfront = 'AWS_CLOUDFRONT'
}

export type CiSource = {
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  owner: Scalars['String'];
  url: Scalars['URL'];
};

export type Certificate = {
  __typename?: 'Certificate';
  challenges?: Maybe<Array<CertificateChallenge>>;
  createdAt: Scalars['Time'];
  dnsNames?: Maybe<Array<Scalars['String']>>;
  instructions?: Maybe<Array<DnsRecord>>;
  issuing: Scalars['Boolean'];
  provider?: Maybe<CertificateProivder>;
  ready: Scalars['Boolean'];
  updatedAt: Scalars['Time'];
};

export type CertificateChallenge = {
  __typename?: 'CertificateChallenge';
  dnsName: Scalars['String'];
  solver: Scalars['String'];
  statusReason: Scalars['String'];
  statusState: Scalars['String'];
  type: Scalars['String'];
  wildcard: Scalars['Boolean'];
};

export enum CertificateProivder {
  AwsAcm = 'AWS_ACM',
  CertManager = 'CERT_MANAGER'
}

export type CheckPriceInput = {
  cpu?: Maybe<Scalars['String']>;
  dedicated?: Maybe<Scalars['Boolean']>;
  dockerImage?: Maybe<Scalars['String']>;
  gpu?: Maybe<Scalars['String']>;
  installation?: Maybe<Scalars['ID']>;
  memory?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  ports?: Maybe<Scalars['JSON']>;
  replication?: Maybe<Array<ReplicationInput>>;
  repo?: Maybe<Scalars['String']>;
  source?: Maybe<RepoSourceType>;
  teamId?: Maybe<Scalars['UUID']>;
  volumes?: Maybe<Scalars['JSON']>;
};

export type CheckPriceOutput = {
  __typename?: 'CheckPriceOutput';
  bandwidth: PriceComponent;
  canBeFreeTier: Scalars['Boolean'];
  cpu: PriceComponent;
  gpu: PriceComponent;
  memory: PriceComponent;
  misc: PriceComponent;
  subTotal: PriceComponent;
  total: PriceComponent;
  volumes: PriceComponent;
};

export type CheckProjectNameInput = {
  name: Scalars['String'];
};

export type CloudAccount = AwsAccount | DoAccount | GcpAccount;

export enum CloudAccountState {
  Error = 'ERROR',
  Success = 'SUCCESS',
  Waiting = 'WAITING'
}

export enum CloudProvider {
  Alibaba = 'ALIBABA',
  Aws = 'AWS',
  Azure = 'AZURE',
  Coreweave = 'COREWEAVE',
  Do = 'DO',
  Gcp = 'GCP',
  Ibm = 'IBM',
  Linode = 'LINODE',
  Oci = 'OCI',
  Ovh = 'OVH',
  Scaleway = 'SCALEWAY',
  Tencent = 'TENCENT',
  Unknown = 'UNKNOWN',
  Vultr = 'VULTR',
  Zeet = 'ZEET'
}

export type Cluster = {
  __typename?: 'Cluster';
  awsAccount?: Maybe<AwsAccount>;
  cloudAccount?: Maybe<CloudAccount>;
  cloudProvider?: Maybe<CloudProvider>;
  clusterIssuers?: Maybe<Array<Scalars['String']>>;
  clusterProvider?: Maybe<ClusterProvider>;
  connected?: Maybe<Scalars['Boolean']>;
  containerCacheRepository?: Maybe<Scalars['String']>;
  containerRegistry?: Maybe<ContainerRegistry>;
  containerRepository?: Maybe<Scalars['String']>;
  createdAt: Scalars['Time'];
  cwAccount?: Maybe<CoreWeaveAccount>;
  doAccount?: Maybe<DoAccount>;
  domain?: Maybe<Scalars['String']>;
  gcpAccount?: Maybe<GcpAccount>;
  grafana?: Maybe<Grafana>;
  id: Scalars['UUID'];
  ingressDNS?: Maybe<Scalars['String']>;
  ingressIP?: Maybe<Scalars['String']>;
  kubeconfig?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
  private: Scalars['Boolean'];
  projects?: Maybe<ProjectConnection>;
  prometheus?: Maybe<Prometheus>;
  region?: Maybe<Scalars['String']>;
  state: ClusterState;
  staticIPs?: Maybe<Array<Scalars['String']>>;
  updatedAt: Scalars['Time'];
};


export type ClusterProjectsArgs = {
  input?: Maybe<ProjectsInput>;
};

export type ClusterDomains = {
  __typename?: 'ClusterDomains';
  cdns?: Maybe<Array<Cdn>>;
  cluster: Cluster;
  domains?: Maybe<Array<CustomDomain>>;
  id: Scalars['ID'];
};

export enum ClusterProvider {
  Coreweave = 'COREWEAVE',
  Doks = 'DOKS',
  Eks = 'EKS',
  Generic = 'GENERIC',
  Gke = 'GKE'
}

export enum ClusterState {
  Creating = 'CREATING',
  Deleting = 'DELETING',
  Error = 'ERROR',
  ErrorDeleting = 'ERROR_DELETING',
  Healthy = 'HEALTHY',
  Pending = 'PENDING'
}

export type Container = {
  __typename?: 'Container';
  id: Scalars['UUID'];
  status: ContainerStatus;
};

export type ContainerRegistry = {
  __typename?: 'ContainerRegistry';
  credentialProvider?: Maybe<ContainerRegistryCredentialProvider>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  registry: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export enum ContainerRegistryCredentialProvider {
  Docker = 'DOCKER',
  Docr = 'DOCR',
  Ecr = 'ECR',
  Gcr = 'GCR'
}

export type ContainerSpec = {
  __typename?: 'ContainerSpec';
  cpu?: Maybe<Scalars['Float']>;
  gpu?: Maybe<Scalars['Float']>;
  memory?: Maybe<Scalars['Float']>;
};

export type ContainerStatus = {
  __typename?: 'ContainerStatus';
  ready: Scalars['Boolean'];
  running: Scalars['Boolean'];
  scheduled: Scalars['Boolean'];
};

export type CoreWeaveAccount = {
  __typename?: 'CoreWeaveAccount';
  clusters?: Maybe<Array<Cluster>>;
  connected?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['Time'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
  state: CloudAccountState;
  updatedAt: Scalars['Time'];
};

export type CreateApiKeyInput = {
  name: Scalars['String'];
  userID: Scalars['UUID'];
};

export type CreateClusterInput = {
  awsAccountID?: Maybe<Scalars['UUID']>;
  doAccountID?: Maybe<Scalars['UUID']>;
  gcpAccountID?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  region: Scalars['String'];
  userID: Scalars['UUID'];
};

export type CreateDatabaseInput = {
  deployTarget: DatabaseDeployTargetInput;
  engine: DatabaseEngineType;
  name: Scalars['String'];
  options?: Maybe<DatabaseOptions>;
  userID: Scalars['UUID'];
  version: Scalars['String'];
};

export type CreateDatadogIntegrationInput = {
  apiKey: Scalars['String'];
  userID: Scalars['UUID'];
};

export type CreateIpfsServiceInput = {
  awsAccountID: Scalars['UUID'];
  clusterID: Scalars['UUID'];
  name: Scalars['String'];
  userID: Scalars['UUID'];
};

export type CreateProjectDockerInput = {
  cpu?: Maybe<Scalars['String']>;
  dedicated?: Maybe<Scalars['Boolean']>;
  deployTarget?: Maybe<ProjectDeployInput>;
  dockerImage: Scalars['String'];
  envs?: Maybe<Array<EnvVarInput>>;
  gpu?: Maybe<Scalars['String']>;
  memory?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ports?: Maybe<Scalars['JSON']>;
  replication?: Maybe<Array<ReplicationInput>>;
  teamID?: Maybe<Scalars['ID']>;
  volumes?: Maybe<Scalars['JSON']>;
};

export type CreateProjectFromProjectTemplateInput = {
  deployTarget?: Maybe<ProjectDeployInput>;
  envs?: Maybe<Array<EnvVarInput>>;
  id: Scalars['ID'];
};

export type CreateProjectGitInput = {
  build?: Maybe<ProjectBuildInput>;
  deployTarget?: Maybe<ProjectDeployInput>;
  envs?: Maybe<Array<EnvVarInput>>;
  name?: Maybe<Scalars['String']>;
  ports?: Maybe<Array<PortInput>>;
  resources?: Maybe<ProjectResourcesInput>;
  runCommand?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  userID?: Maybe<Scalars['UUID']>;
  volumes?: Maybe<Array<VolumeInput>>;
};

export type CreateProjectHelmInput = {
  chart: Scalars['String'];
  deployTarget: ProjectDeployInput;
  githubConnection?: Maybe<GithubConnectionInput>;
  name: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
  releaseName: Scalars['String'];
  repository: Scalars['String'];
  userID: Scalars['UUID'];
  values?: Maybe<Scalars['String']>;
  valuesRef?: Maybe<Scalars['String']>;
};

export type CreateProjectInput = {
  buildCommand?: Maybe<Scalars['String']>;
  buildType?: Maybe<Scalars['String']>;
  cpu?: Maybe<Scalars['String']>;
  dedicated?: Maybe<Scalars['Boolean']>;
  deployTarget?: Maybe<ProjectDeployInput>;
  envs?: Maybe<Array<EnvVarInput>>;
  gpu?: Maybe<Scalars['String']>;
  installation: Scalars['ID'];
  memory?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  ports?: Maybe<Scalars['JSON']>;
  replication?: Maybe<Array<ReplicationInput>>;
  repo: Scalars['String'];
  runCommand?: Maybe<Scalars['String']>;
  staticPath?: Maybe<Scalars['String']>;
  teamID?: Maybe<Scalars['ID']>;
  volumes?: Maybe<Scalars['JSON']>;
};

export type CreateProjectsFromTemplateInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  projects?: Maybe<Array<CreateProjectFromProjectTemplateInput>>;
  userID?: Maybe<Scalars['UUID']>;
};

export type CreateTeamInput = {
  avatar?: Maybe<Scalars['String']>;
  billingEmail: Scalars['String'];
  billingPeriod?: Maybe<PlanBillingPeriod>;
  login?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  paymentMethod?: Maybe<Scalars['String']>;
  tier?: Maybe<PlanTier>;
};

export type CreateWeb3ChallengeInput = {
  address: Scalars['String'];
};

export type CreateWebhookIntegrationInput = {
  url: Scalars['String'];
  userID: Scalars['UUID'];
};

export type CustomDomain = {
  __typename?: 'CustomDomain';
  certificate?: Maybe<Certificate>;
  cnameTargets?: Maybe<Array<Scalars['String']>>;
  disableCertManager?: Maybe<Scalars['Boolean']>;
  domain: Scalars['String'];
  id: Scalars['ID'];
  instructions?: Maybe<Array<DnsRecord>>;
  ipTargets?: Maybe<Array<Scalars['String']>>;
  isApex: Scalars['Boolean'];
};

export type DnsRecord = {
  __typename?: 'DNSRecord';
  domain: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type: DnsRecordType;
  value?: Maybe<Scalars['String']>;
};

export enum DnsRecordType {
  A = 'A',
  Cname = 'CNAME',
  Txt = 'TXT'
}

export type DoAccount = {
  __typename?: 'DOAccount';
  accessTokenPrefix?: Maybe<Scalars['String']>;
  clusters?: Maybe<Array<Cluster>>;
  connected?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['Time'];
  defaultProject?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  state: DoAccountState;
  updatedAt: Scalars['Time'];
};

export enum DoAccountState {
  Error = 'ERROR',
  Success = 'SUCCESS',
  Waiting = 'WAITING'
}

export type DatabaseDeployTargetInput = {
  awsAccountID?: Maybe<Scalars['UUID']>;
  clusterID?: Maybe<Scalars['UUID']>;
  doAccountID?: Maybe<Scalars['UUID']>;
  gcpAccountID?: Maybe<Scalars['UUID']>;
  provider: DatabaseProviderType;
};

export enum DatabaseEngineType {
  Kafka = 'KAFKA',
  Mongodb = 'MONGODB',
  Mysql = 'MYSQL',
  Nats = 'NATS',
  Postgres = 'POSTGRES',
  Redis = 'REDIS'
}

export type DatabaseLink = {
  __typename?: 'DatabaseLink';
  database: Repo;
  envPrefix?: Maybe<Scalars['String']>;
  envs: Array<EnvVar>;
  id: Scalars['UUID'];
  repo: Repo;
};

export type DatabaseOptions = {
  database?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export enum DatabaseProviderType {
  AwsRds = 'AWS_RDS',
  Docker = 'DOCKER',
  DoDatabase = 'DO_DATABASE',
  GcpCloudSql = 'GCP_CLOUD_SQL'
}

export type DatadogIntegration = Integration & {
  __typename?: 'DatadogIntegration';
  apiKey?: Maybe<Scalars['String']>;
  createdAt: Scalars['Time'];
  description: Scalars['String'];
  id: Scalars['UUID'];
  image: Scalars['String'];
  name: Scalars['String'];
  type: IntegrationType;
  updatedAt: Scalars['Time'];
};

export type DatadogLogIntegration = {
  __typename?: 'DatadogLogIntegration';
  key: Scalars['String'];
};

export type DatadogLogIntegrationInput = {
  key: Scalars['String'];
};

export type DeployRepoBranchInput = {
  branch: Scalars['String'];
  id: Scalars['UUID'];
};

export type DeployStatus = {
  __typename?: 'DeployStatus';
  active: Scalars['Boolean'];
  errorMessage?: Maybe<Scalars['String']>;
  publicIPs?: Maybe<Array<Scalars['String']>>;
  readyReplicas: Scalars['Int'];
  replicas: Scalars['Int'];
  runningReplicas: Scalars['Int'];
  state: Scalars['String'];
};

export enum DeployStrategy {
  BlueGreen = 'BLUE_GREEN',
  Canary = 'CANARY',
  RedBlack = 'RED_BLACK',
  Restart = 'RESTART',
  Rolling = 'ROLLING'
}

export enum DeployTarget {
  AwsSam = 'AWS_SAM',
  GcpCloudRun = 'GCP_CLOUD_RUN',
  Kubernetes = 'KUBERNETES',
  Serverless = 'SERVERLESS',
  Terraform = 'TERRAFORM'
}

export type Deployment = {
  __typename?: 'Deployment';
  awsLinks?: Maybe<AwsLinks>;
  branch?: Maybe<Scalars['String']>;
  build?: Maybe<Build>;
  buildStage?: Maybe<BuildStage>;
  containers?: Maybe<Array<Container>>;
  createdAt: Scalars['Time'];
  deleteStage?: Maybe<PipelineStage>;
  deployStage?: Maybe<PipelineStage>;
  deployStatus?: Maybe<DeployStatus>;
  deployStep?: Maybe<PipelineStep>;
  description?: Maybe<Scalars['String']>;
  endpoints?: Maybe<Array<Scalars['String']>>;
  errorMessage?: Maybe<Scalars['String']>;
  events: Array<Event>;
  gcpLinks?: Maybe<GcpLinks>;
  helmRelease?: Maybe<HelmRelease>;
  id: Scalars['ID'];
  loadBalancers?: Maybe<Array<LoadBalancer>>;
  logs?: Maybe<Array<LogEntry>>;
  metrics?: Maybe<Array<Metric>>;
  privateEndpoint?: Maybe<Scalars['String']>;
  release?: Maybe<Release>;
  releaseStage?: Maybe<PipelineStage>;
  repo?: Maybe<Repo>;
  status: DeploymentStatus;
  testStage?: Maybe<PipelineStage>;
  updatedAt: Scalars['Time'];
  version: Scalars['String'];
  volumes?: Maybe<Array<Volume>>;
};


export type DeploymentMetricsArgs = {
  name: Scalars['String'];
};

export type DeploymentConnection = {
  __typename?: 'DeploymentConnection';
  nodes: Array<Deployment>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum DeploymentStatus {
  BuildAborted = 'BUILD_ABORTED',
  BuildFailed = 'BUILD_FAILED',
  BuildInProgress = 'BUILD_IN_PROGRESS',
  BuildPending = 'BUILD_PENDING',
  BuildSucceeded = 'BUILD_SUCCEEDED',
  DeployCrashing = 'DEPLOY_CRASHING',
  DeployFailed = 'DEPLOY_FAILED',
  DeployHealhty = 'DEPLOY_HEALHTY',
  DeployInProgress = 'DEPLOY_IN_PROGRESS',
  DeployPending = 'DEPLOY_PENDING',
  DeployStopped = 'DEPLOY_STOPPED',
  DeploySucceeded = 'DEPLOY_SUCCEEDED',
  ReleaseInProgress = 'RELEASE_IN_PROGRESS'
}

export type DeploymentsInput = {
  after?: Maybe<Scalars['String']>;
  branch?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};

export enum DisableReason {
  FreeTrialEnded = 'FREE_TRIAL_ENDED',
  PaymentError = 'PAYMENT_ERROR',
  UserAction = 'USER_ACTION',
  UserBanned = 'USER_BANNED'
}

export type DiscordIntegration = Integration & {
  __typename?: 'DiscordIntegration';
  createdAt: Scalars['Time'];
  description: Scalars['String'];
  id: Scalars['UUID'];
  image: Scalars['String'];
  name: Scalars['String'];
  type: IntegrationType;
  updatedAt: Scalars['Time'];
};

export type DiscordWebhookIntegration = Integration & {
  __typename?: 'DiscordWebhookIntegration';
  createdAt: Scalars['Time'];
  description: Scalars['String'];
  id: Scalars['UUID'];
  image: Scalars['String'];
  name: Scalars['String'];
  type: IntegrationType;
  updatedAt: Scalars['Time'];
  url?: Maybe<Scalars['String']>;
};

export type DockerImage = {
  __typename?: 'DockerImage';
  digest: Scalars['String'];
  id: Scalars['ID'];
  repository: DockerRepository;
  tag: Scalars['String'];
};

export type DockerRepository = CiSource & {
  __typename?: 'DockerRepository';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<DockerImage>;
  images?: Maybe<Array<DockerImage>>;
  isPrivate: Scalars['Boolean'];
  name: Scalars['String'];
  owner: Scalars['String'];
  ports?: Maybe<Array<Port>>;
  url: Scalars['URL'];
  volumes?: Maybe<Array<VolumeSpec>>;
};


export type DockerRepositoryImageArgs = {
  tag: Scalars['String'];
};

export type DuplicateProjectInput = {
  enabled: Scalars['Boolean'];
  id: Scalars['UUID'];
  name: Scalars['String'];
};

export type EnvVar = {
  __typename?: 'EnvVar';
  createdAt: Scalars['Time'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['Time'];
  value: Scalars['String'];
  visible: Scalars['Boolean'];
};

export type EnvVarInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type EnvVarTemplate = {
  __typename?: 'EnvVarTemplate';
  description: Scalars['String'];
  generator?: Maybe<Scalars['String']>;
  hidden: Scalars['Boolean'];
  locked: Scalars['Boolean'];
  name: Scalars['String'];
  options?: Maybe<Array<Scalars['String']>>;
  reference?: Maybe<Scalars['String']>;
  required: Scalars['Boolean'];
  value?: Maybe<Scalars['String']>;
};

export enum ErrorCode {
  CardDeclined = 'CardDeclined',
  InternalServerError = 'InternalServerError',
  NeedAuth = 'NeedAuth',
  NeedPaymentDetails = 'NeedPaymentDetails',
  NoActiveBuildMethodError = 'NoActiveBuildMethodError',
  NoContainers = 'NoContainers',
  NoDockerfilePresent = 'NoDockerfilePresent',
  NoPortsExposed = 'NoPortsExposed'
}

export type Event = {
  __typename?: 'Event';
  count: Scalars['Int'];
  id: Scalars['String'];
  lastSeenAt: Scalars['Time'];
  message: Scalars['String'];
  source: Scalars['String'];
  type: EventType;
};

export enum EventType {
  Error = 'ERROR',
  Info = 'INFO',
  Warning = 'WARNING'
}

export type GcpAccount = {
  __typename?: 'GCPAccount';
  clientEmail?: Maybe<Scalars['String']>;
  clusters?: Maybe<Array<Cluster>>;
  connected?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['Time'];
  error?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  projectID?: Maybe<Scalars['String']>;
  projects?: Maybe<ProjectConnection>;
  state: GcpAccountState;
  updatedAt: Scalars['Time'];
};


export type GcpAccountProjectsArgs = {
  input?: Maybe<ProjectsInput>;
};

export enum GcpAccountState {
  Error = 'ERROR',
  Success = 'SUCCESS',
  Waiting = 'WAITING'
}

export type GcpLinks = {
  __typename?: 'GCPLinks';
  cloudFunctions?: Maybe<Scalars['String']>;
  cloudFunctionsTrigger?: Maybe<Scalars['String']>;
  cloudLogging?: Maybe<Scalars['String']>;
  cloudMonitoring?: Maybe<Scalars['String']>;
  cloudRun?: Maybe<Scalars['String']>;
  deploymentManager?: Maybe<Scalars['String']>;
  gke?: Maybe<Scalars['String']>;
};

export type GpuInput = {
  count: Scalars['Int'];
  type?: Maybe<Scalars['String']>;
};

export type GpuSpec = {
  __typename?: 'GPUSpec';
  count: Scalars['Int'];
  type?: Maybe<Scalars['String']>;
};

export type GitBranch = {
  __typename?: 'GitBranch';
  commit: GitCommit;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type GitCommit = {
  __typename?: 'GitCommit';
  abbreviatedOid: Scalars['String'];
  createdAt: Scalars['Time'];
  id: Scalars['ID'];
  message: Scalars['String'];
  oid: Scalars['String'];
};

export type GitHubInstallation = {
  __typename?: 'GitHubInstallation';
  account: GitHubUser;
  appID: Scalars['Int'];
  id: Scalars['ID'];
  repositories?: Maybe<Array<GitHubRepository>>;
  repositorySelection: Scalars['String'];
};

export type GitHubRepository = CiSource & GitRepository & {
  __typename?: 'GitHubRepository';
  branches?: Maybe<Array<GitBranch>>;
  buildMethodSuggestions?: Maybe<Array<BuildMethod>>;
  defaultBranch?: Maybe<GitBranch>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isFork: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  name: Scalars['String'];
  owner: Scalars['String'];
  ports?: Maybe<Array<Port>>;
  primaryLanguage?: Maybe<Scalars['String']>;
  provider: GitProvider;
  providerID: Scalars['ID'];
  serverless?: Maybe<ServerlessConfig>;
  updatedAt: Scalars['Time'];
  url: Scalars['URL'];
  volumes?: Maybe<Array<VolumeSpec>>;
};

export type GitHubUser = {
  __typename?: 'GitHubUser';
  avatar: Scalars['URL'];
  id: Scalars['ID'];
  login: Scalars['String'];
  type: GithubUserType;
};

export enum GitProvider {
  Bitbucket = 'BITBUCKET',
  Github = 'GITHUB',
  Gitlab = 'GITLAB'
}

export type GitRepository = {
  branches?: Maybe<Array<GitBranch>>;
  defaultBranch?: Maybe<GitBranch>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isFork: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  name: Scalars['String'];
  owner: Scalars['String'];
  primaryLanguage?: Maybe<Scalars['String']>;
  provider: GitProvider;
  providerID: Scalars['ID'];
  updatedAt: Scalars['Time'];
  url: Scalars['URL'];
};

export type GithubConnectionInput = {
  endpoint?: Maybe<Scalars['String']>;
  installation: Scalars['String'];
};

export enum GithubUserType {
  Organization = 'Organization',
  User = 'User'
}

export type Grafana = {
  __typename?: 'Grafana';
  password?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  user?: Maybe<Scalars['String']>;
};

export type HttpProbe = {
  __typename?: 'HTTPProbe';
  host?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  port: Scalars['String'];
};

export type HelmChart = {
  __typename?: 'HelmChart';
  app_version?: Maybe<Scalars['String']>;
  deprecated?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  logoImage?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  normalized_name?: Maybe<Scalars['String']>;
  repository: HelmRepository;
  stars?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['String']>;
};

export type HelmChartConnection = {
  __typename?: 'HelmChartConnection';
  nodes: Array<HelmChart>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type HelmRelease = {
  __typename?: 'HelmRelease';
  chart: HelmChart;
  id: Scalars['String'];
  version: Scalars['String'];
};

export type HelmRepository = {
  __typename?: 'HelmRepository';
  chart: HelmChart;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  organization_name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type HelmRepositoryChartArgs = {
  name: Scalars['String'];
};

export type IpfsService = {
  __typename?: 'IPFSService';
  accessToken?: Maybe<Scalars['String']>;
  api?: Maybe<Project>;
  apiURL?: Maybe<Scalars['String']>;
  cluster?: Maybe<Cluster>;
  id: Scalars['UUID'];
  nodeURL?: Maybe<Scalars['String']>;
  owner: User;
  state: IpfsServiceState;
};

export enum IpfsServiceState {
  Creating = 'CREATING',
  Deleting = 'DELETING',
  Error = 'ERROR',
  Healthy = 'HEALTHY'
}

export type IPipelineStage = {
  id: Scalars['UUID'];
  job?: Maybe<JobRun>;
  logs?: Maybe<Logs>;
  metrics?: Maybe<Array<Metric>>;
};


export type IPipelineStageMetricsArgs = {
  name: Scalars['String'];
};

export type Integration = {
  createdAt: Scalars['Time'];
  description: Scalars['String'];
  id: Scalars['UUID'];
  image: Scalars['String'];
  name: Scalars['String'];
  type: IntegrationType;
  updatedAt: Scalars['Time'];
};

export enum IntegrationType {
  Datadog = 'DATADOG',
  Discord = 'DISCORD',
  DiscordWebhook = 'DISCORD_WEBHOOK',
  Slack = 'SLACK',
  SlackWebhook = 'SLACK_WEBHOOK'
}

export type InviteTeamMemberInput = {
  email?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['Time']>;
  id: Scalars['UUID'];
  role: TeamMemberRole;
};

export type JobRun = {
  __typename?: 'JobRun';
  build?: Maybe<Build>;
  command: Scalars['String'];
  createdAt?: Maybe<Scalars['Time']>;
  exitCode?: Maybe<Scalars['Int']>;
  id: Scalars['UUID'];
  logs?: Maybe<Logs>;
  metrics?: Maybe<Array<Metric>>;
  project?: Maybe<Repo>;
  state: JobRunState;
};


export type JobRunMetricsArgs = {
  name: Scalars['String'];
};

export type JobRunConnection = {
  __typename?: 'JobRunConnection';
  nodes: Array<JobRun>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum JobRunState {
  JobRunFailed = 'JOB_RUN_FAILED',
  JobRunRunning = 'JOB_RUN_RUNNING',
  JobRunStarting = 'JOB_RUN_STARTING',
  JobRunSucceeded = 'JOB_RUN_SUCCEEDED'
}

export type LinkDatabaseInput = {
  databaseID: Scalars['UUID'];
  envPrefix?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

export type LoadBalancer = {
  __typename?: 'LoadBalancer';
  dns: Array<Scalars['String']>;
  ips: Array<Scalars['String']>;
  name: Scalars['String'];
  ports?: Maybe<Array<Scalars['Int']>>;
};

export type LogDnaIntegration = {
  __typename?: 'LogDNAIntegration';
  key: Scalars['String'];
};

export type LogDnaIntegrationInput = {
  key: Scalars['String'];
};

export type LogEntry = {
  __typename?: 'LogEntry';
  text: Scalars['String'];
  timestamp?: Maybe<Scalars['Time']>;
};

export type LogShipper = {
  __typename?: 'LogShipper';
  datadog?: Maybe<DatadogLogIntegration>;
  logDNA?: Maybe<LogDnaIntegration>;
  logz?: Maybe<LogzIntegration>;
  syslog?: Maybe<SyslogIntegration>;
  type: LogShipperType;
};

export type LogShipperInput = {
  datadog?: Maybe<DatadogLogIntegrationInput>;
  logDNA?: Maybe<LogDnaIntegrationInput>;
  logz?: Maybe<LogzIntegrationInput>;
  syslog?: Maybe<SyslogIntegrationInput>;
  type?: Maybe<LogShipperType>;
};

export enum LogShipperType {
  Datadog = 'DATADOG',
  Logdna = 'LOGDNA',
  Logzio = 'LOGZIO',
  Syslog = 'SYSLOG'
}

export type Logs = {
  __typename?: 'Logs';
  completed: Scalars['Boolean'];
  cursor?: Maybe<Scalars['String']>;
  entries?: Maybe<Array<LogEntry>>;
  id: Scalars['ID'];
};

export type LogzIntegration = {
  __typename?: 'LogzIntegration';
  token: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type LogzIntegrationInput = {
  token: Scalars['String'];
  url: Scalars['String'];
};

export type Metric = {
  __typename?: 'Metric';
  timestamp: Scalars['Time'];
  value?: Maybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  abortBuild: Repo;
  acceptTeamMemberInvitation: Team;
  addAWSAccount: AwsAccount;
  addCDN: Cdn;
  addCluster: Cluster;
  addContainerRegistry: ContainerRegistry;
  addCoreWeaveAccount: CoreWeaveAccount;
  addDOAccount: DoAccount;
  addGCPAccount: GcpAccount;
  addProjectCollaborator: Repo;
  addRepoCustomDomain: Repo;
  addTeamMember: Team;
  buildRepo: Repo;
  copyEnvVars?: Maybe<Repo>;
  createAPIKey: ApiKey;
  createCluster: Cluster;
  createDatabase: Repo;
  createDatadogIntegration: DatadogIntegration;
  createDiscordWebhookIntegration: DiscordWebhookIntegration;
  createIPFSService: IpfsService;
  createProject: Repo;
  createProjectDocker: Repo;
  createProjectGit: Repo;
  createProjectHelm: Repo;
  createProjectsFromTemplate: Array<Repo>;
  createSlackWebhookIntegration: SlackWebhookIntegration;
  createTeam: Team;
  createWeb3Challenge: Web3Challenge;
  deleteAPIKey: Scalars['Boolean'];
  deleteCluster: Scalars['Boolean'];
  deleteProjectBranch: Scalars['Boolean'];
  deleteRepo: Scalars['Boolean'];
  deleteTeam: Scalars['Boolean'];
  deleteTeamMemberInvitation: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  deployRepo: Repo;
  deployRepoBranch: Repo;
  disableRepo: Repo;
  duplicateProject: Repo;
  enableRepo: Repo;
  freezeRepo: Template;
  invalidateCDNCache: Cdn;
  inviteTeamMember: TeamMemberInvitation;
  linkDatabase: Repo;
  migrateGithubConnection: Repo;
  reissueCustomDomainCertificate: Repo;
  removeAWSAccount: Scalars['Boolean'];
  removeCDN: Scalars['Boolean'];
  removeContainerRegistry: Scalars['Boolean'];
  removeCoreWeaveAccount: Scalars['Boolean'];
  removeDOAccount: Scalars['Boolean'];
  removeGCPAccount: Scalars['Boolean'];
  removeLogShipper: Scalars['Boolean'];
  removeProbe: Repo;
  removeProjectCollaborator: Repo;
  removeRepoCustomDomain: Repo;
  removeTeamMember: Team;
  removeUserIntegration: Scalars['Boolean'];
  resendTeamMemberInvitation: Scalars['Boolean'];
  rollbackProjectToDeployment: Repo;
  runJob: JobRun;
  setPaymentMethod: User;
  setRepoEnvs: Repo;
  signInWithWeb3: UserAuth;
  transferProject: Repo;
  unlinkDatabase?: Maybe<Scalars['Boolean']>;
  updateBranch: RepoBranchV2;
  updateCDN: Cdn;
  updateCluster: Cluster;
  updateDatabaseLink: Repo;
  updateDiscordWebhookIntegration: DiscordWebhookIntegration;
  updateProject: Repo;
  updateRepoCustomDomain: Repo;
  updateSlackWebhookIntegration: SlackWebhookIntegration;
  updateTeam: Team;
  updateTeamMemberRole: UserTeamEdge;
  updateUser: User;
  uploadDockerCompose: Template;
  verifyAWSAccount: AwsAccount;
};


export type MutationAbortBuildArgs = {
  id: Scalars['UUID'];
};


export type MutationAcceptTeamMemberInvitationArgs = {
  token: Scalars['String'];
};


export type MutationAddAwsAccountArgs = {
  input: AddAwsAccountInput;
};


export type MutationAddCdnArgs = {
  input: AddCdnInput;
};


export type MutationAddClusterArgs = {
  input: AddClusterInput;
};


export type MutationAddContainerRegistryArgs = {
  input: AddContainerRegistryInput;
};


export type MutationAddCoreWeaveAccountArgs = {
  input: AddCoreWeaveAccountInput;
};


export type MutationAddDoAccountArgs = {
  input: AddDoAccountInput;
};


export type MutationAddGcpAccountArgs = {
  input: AddGcpAccountInput;
};


export type MutationAddProjectCollaboratorArgs = {
  input: AddProjectCollaboratorInput;
};


export type MutationAddRepoCustomDomainArgs = {
  input: AddRepoCustomDomainInput;
};


export type MutationAddTeamMemberArgs = {
  input: AddTeamMemberInput;
};


export type MutationBuildRepoArgs = {
  branch?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  noCache?: Maybe<Scalars['Boolean']>;
};


export type MutationCopyEnvVarsArgs = {
  from: Scalars['ID'];
  to: Scalars['ID'];
};


export type MutationCreateApiKeyArgs = {
  input?: Maybe<CreateApiKeyInput>;
};


export type MutationCreateClusterArgs = {
  input: CreateClusterInput;
};


export type MutationCreateDatabaseArgs = {
  input: CreateDatabaseInput;
};


export type MutationCreateDatadogIntegrationArgs = {
  input: CreateDatadogIntegrationInput;
};


export type MutationCreateDiscordWebhookIntegrationArgs = {
  input: CreateWebhookIntegrationInput;
};


export type MutationCreateIpfsServiceArgs = {
  input: CreateIpfsServiceInput;
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationCreateProjectDockerArgs = {
  input: CreateProjectDockerInput;
};


export type MutationCreateProjectGitArgs = {
  input: CreateProjectGitInput;
};


export type MutationCreateProjectHelmArgs = {
  input: CreateProjectHelmInput;
};


export type MutationCreateProjectsFromTemplateArgs = {
  input: CreateProjectsFromTemplateInput;
};


export type MutationCreateSlackWebhookIntegrationArgs = {
  input: CreateWebhookIntegrationInput;
};


export type MutationCreateTeamArgs = {
  input: CreateTeamInput;
};


export type MutationCreateWeb3ChallengeArgs = {
  input: CreateWeb3ChallengeInput;
};


export type MutationDeleteApiKeyArgs = {
  id: Scalars['UUID'];
};


export type MutationDeleteClusterArgs = {
  id: Scalars['UUID'];
};


export type MutationDeleteProjectBranchArgs = {
  branch: Scalars['String'];
  id: Scalars['UUID'];
};


export type MutationDeleteRepoArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTeamArgs = {
  id: Scalars['UUID'];
};


export type MutationDeleteTeamMemberInvitationArgs = {
  id: Scalars['UUID'];
};


export type MutationDeployRepoArgs = {
  id: Scalars['ID'];
};


export type MutationDeployRepoBranchArgs = {
  input: DeployRepoBranchInput;
};


export type MutationDisableRepoArgs = {
  id: Scalars['ID'];
};


export type MutationDuplicateProjectArgs = {
  input: DuplicateProjectInput;
};


export type MutationEnableRepoArgs = {
  id: Scalars['ID'];
};


export type MutationFreezeRepoArgs = {
  id: Scalars['UUID'];
};


export type MutationInvalidateCdnCacheArgs = {
  id: Scalars['UUID'];
};


export type MutationInviteTeamMemberArgs = {
  input: InviteTeamMemberInput;
};


export type MutationLinkDatabaseArgs = {
  input: LinkDatabaseInput;
};


export type MutationMigrateGithubConnectionArgs = {
  id: Scalars['UUID'];
  installationID: Scalars['String'];
};


export type MutationReissueCustomDomainCertificateArgs = {
  input: ReissueCustomDomainCertificateInput;
};


export type MutationRemoveAwsAccountArgs = {
  id: Scalars['UUID'];
};


export type MutationRemoveCdnArgs = {
  id: Scalars['UUID'];
};


export type MutationRemoveContainerRegistryArgs = {
  id: Scalars['UUID'];
};


export type MutationRemoveCoreWeaveAccountArgs = {
  id: Scalars['UUID'];
};


export type MutationRemoveDoAccountArgs = {
  id: Scalars['UUID'];
};


export type MutationRemoveGcpAccountArgs = {
  id: Scalars['UUID'];
};


export type MutationRemoveLogShipperArgs = {
  id: Scalars['UUID'];
};


export type MutationRemoveProbeArgs = {
  input: RemoveProbeInput;
};


export type MutationRemoveProjectCollaboratorArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveRepoCustomDomainArgs = {
  input: RemoveRepoCustomDomainInput;
};


export type MutationRemoveTeamMemberArgs = {
  input: RemoveTeamMemberInput;
};


export type MutationRemoveUserIntegrationArgs = {
  input: RemoveUserIntegrationInput;
};


export type MutationResendTeamMemberInvitationArgs = {
  id: Scalars['UUID'];
};


export type MutationRollbackProjectToDeploymentArgs = {
  deploymentID: Scalars['UUID'];
  projectID: Scalars['UUID'];
};


export type MutationRunJobArgs = {
  input: RunJobInput;
};


export type MutationSetPaymentMethodArgs = {
  paymentMethod: Scalars['String'];
};


export type MutationSetRepoEnvsArgs = {
  input: SetRepoEnvsInput;
};


export type MutationSignInWithWeb3Args = {
  input: SignInWithWeb3Input;
};


export type MutationTransferProjectArgs = {
  input: TransferProjectInput;
};


export type MutationUnlinkDatabaseArgs = {
  id: Scalars['UUID'];
};


export type MutationUpdateBranchArgs = {
  input: UpdateBranchInput;
};


export type MutationUpdateCdnArgs = {
  input: UpdateCdnInput;
};


export type MutationUpdateClusterArgs = {
  input: UpdateClusterInput;
};


export type MutationUpdateDatabaseLinkArgs = {
  input: UpdateDatabaseLinkInput;
};


export type MutationUpdateDiscordWebhookIntegrationArgs = {
  input: UpdateWebhookIntegrationInput;
};


export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};


export type MutationUpdateRepoCustomDomainArgs = {
  input: UpdateRepoCustomDomainInput;
};


export type MutationUpdateSlackWebhookIntegrationArgs = {
  input: UpdateWebhookIntegrationInput;
};


export type MutationUpdateTeamArgs = {
  input: UpdateTeamInput;
};


export type MutationUpdateTeamMemberRoleArgs = {
  input: UpdateTeamMemberRoleInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUploadDockerComposeArgs = {
  contents: Scalars['String'];
};


export type MutationVerifyAwsAccountArgs = {
  id: Scalars['UUID'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

export type PageInput = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};

export type PipelineStage = IPipelineStage & {
  __typename?: 'PipelineStage';
  id: Scalars['UUID'];
  job?: Maybe<JobRun>;
  logs?: Maybe<Logs>;
  metrics?: Maybe<Array<Metric>>;
};


export type PipelineStageMetricsArgs = {
  name: Scalars['String'];
};

export type PipelineStep = {
  __typename?: 'PipelineStep';
  id: Scalars['UUID'];
  logs?: Maybe<Logs>;
};

export type Plan = {
  __typename?: 'Plan';
  billingPeriod?: Maybe<PlanBillingPeriod>;
  stripeSubscription?: Maybe<StripeSubscription>;
  tier: PlanTier;
};

export enum PlanBillingPeriod {
  Annually = 'ANNUALLY',
  Monthly = 'MONTHLY'
}

export enum PlanTier {
  Basic = 'BASIC',
  Legacy = 'LEGACY',
  Pro = 'PRO'
}

export type Port = {
  __typename?: 'Port';
  grpc: Scalars['Boolean'];
  https: Scalars['Boolean'];
  loadBalancer: Scalars['Boolean'];
  port: Scalars['String'];
  protocol: Scalars['String'];
  public: Scalars['Boolean'];
};

export type PortInput = {
  grpc?: Maybe<Scalars['Boolean']>;
  https: Scalars['Boolean'];
  port: Scalars['String'];
  protocol: PortProtocol;
  public: Scalars['Boolean'];
};

export enum PortProtocol {
  Tcp = 'tcp',
  Udp = 'udp'
}

export type PriceComponent = {
  __typename?: 'PriceComponent';
  cost: Scalars['Int'];
  explanation: Scalars['String'];
};

export type Prices = {
  __typename?: 'Prices';
  cpuCore: Scalars['Float'];
  dedicatedCpuCore: Scalars['Float'];
  dedicatedGPU: Scalars['Float'];
  dedicatedRamGB: Scalars['Float'];
  ramGB: Scalars['Float'];
  storageGB: Scalars['Float'];
};

export type Probe = {
  __typename?: 'Probe';
  command?: Maybe<Scalars['String']>;
  failureThreshold: Scalars['Int'];
  http?: Maybe<HttpProbe>;
  initialDelaySeconds: Scalars['Int'];
  periodSeconds: Scalars['Int'];
  successThreshold: Scalars['Int'];
  tcp?: Maybe<TcpProbe>;
  timeoutSeconds: Scalars['Int'];
};

export type ProbeInput = {
  command?: Maybe<Scalars['String']>;
  failureThreshold?: Maybe<Scalars['Int']>;
  httpEndpoint?: Maybe<Scalars['String']>;
  initialDelaySeconds?: Maybe<Scalars['Int']>;
  periodSeconds?: Maybe<Scalars['Int']>;
  successThreshold?: Maybe<Scalars['Int']>;
  tcpEndpoint?: Maybe<Scalars['String']>;
  timeoutSeconds?: Maybe<Scalars['Int']>;
};

export type ProfileOwner = {
  avatar: Scalars['URL'];
  login: Scalars['String'];
  name: Scalars['String'];
};

export type Project = {
  __typename?: 'Project';
  id: Scalars['UUID'];
  repo?: Maybe<Repo>;
};

export type ProjectBuildInput = {
  buildCommand?: Maybe<Scalars['String']>;
  buildType?: Maybe<BuildType>;
  dockerfilePath?: Maybe<Scalars['String']>;
  staticPath?: Maybe<Scalars['String']>;
  workingDirectory?: Maybe<Scalars['String']>;
};

export type ProjectCollaborator = {
  __typename?: 'ProjectCollaborator';
  id: Scalars['ID'];
  role: ProjectCollaboratorRole;
  user: User;
};

export type ProjectCollaboratorInvitation = {
  __typename?: 'ProjectCollaboratorInvitation';
  email: Scalars['String'];
  id: Scalars['ID'];
  link: Scalars['String'];
  project: Repo;
  role: ProjectCollaboratorRole;
};

export enum ProjectCollaboratorRole {
  Editor = 'EDITOR',
  Owner = 'OWNER',
  Viewer = 'VIEWER'
}

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  edges: Array<ProjectEdge>;
  nodes: Array<Project>;
  pageInfo: PageInfo;
};

export type ProjectDeployInput = {
  awsAccountID?: Maybe<Scalars['UUID']>;
  clusterID?: Maybe<Scalars['UUID']>;
  deployTarget: DeployTarget;
  doAccountID?: Maybe<Scalars['UUID']>;
  gcpAccountID?: Maybe<Scalars['UUID']>;
  region?: Maybe<Scalars['String']>;
};

export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  cursor: Scalars['String'];
  node: Project;
};

export type ProjectOwner = {
  projects: ProjectConnection;
};


export type ProjectOwnerProjectsArgs = {
  input?: Maybe<ProjectsInput>;
};

export type ProjectResourcesInput = {
  cpu?: Maybe<Scalars['String']>;
  dedicated?: Maybe<Scalars['Boolean']>;
  gpu?: Maybe<Scalars['String']>;
  memory?: Maybe<Scalars['String']>;
  replication?: Maybe<Array<Maybe<ReplicationInput>>>;
};

export type ProjectTemplate = {
  __typename?: 'ProjectTemplate';
  cpu: Scalars['Float'];
  dedicated?: Maybe<Scalars['Boolean']>;
  description: Scalars['String'];
  envs?: Maybe<Array<EnvVarTemplate>>;
  gpu?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  image: Scalars['String'];
  memory: Scalars['Float'];
  name: Scalars['String'];
  ports?: Maybe<Array<Port>>;
  replication?: Maybe<Array<Replication>>;
  source: RepoSource;
  volumes?: Maybe<Array<VolumeSpec>>;
};

export type ProjectsInput = {
  page?: Maybe<PageInput>;
};

export type Prometheus = {
  __typename?: 'Prometheus';
  password?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  user?: Maybe<Scalars['String']>;
};

export type PrometheusScrape = {
  __typename?: 'PrometheusScrape';
  path: Scalars['String'];
  port: Scalars['Int'];
};

export type PrometheusScrapeInput = {
  path: Scalars['String'];
  port: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  checkPrice: CheckPriceOutput;
  currentUser: User;
  dockerRepository?: Maybe<DockerRepository>;
  helmRepository: HelmRepository;
  prices: Prices;
  project?: Maybe<Project>;
  searchHelmCharts: HelmChartConnection;
  team?: Maybe<Team>;
  template: Template;
  user: User;
};


export type QueryCheckPriceArgs = {
  input: CheckPriceInput;
};


export type QueryDockerRepositoryArgs = {
  image: Scalars['String'];
};


export type QueryHelmRepositoryArgs = {
  url: Scalars['String'];
};


export type QueryProjectArgs = {
  id?: Maybe<Scalars['UUID']>;
  path?: Maybe<Scalars['String']>;
};


export type QuerySearchHelmChartsArgs = {
  input: SearchHelmChartsInput;
};


export type QueryTeamArgs = {
  id?: Maybe<Scalars['UUID']>;
  path?: Maybe<Scalars['String']>;
};


export type QueryTemplateArgs = {
  id?: Maybe<Scalars['UUID']>;
  slug?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type ReissueCustomDomainCertificateInput = {
  id: Scalars['UUID'];
};

export type Release = {
  __typename?: 'Release';
  id: Scalars['UUID'];
  logs?: Maybe<Logs>;
};

export type RemoveProbeInput = {
  id: Scalars['ID'];
  livenessProbe?: Maybe<Scalars['Boolean']>;
  readinessProbe?: Maybe<Scalars['Boolean']>;
  startupProbe?: Maybe<Scalars['Boolean']>;
};

export type RemoveRepoCustomDomainInput = {
  domainID: Scalars['UUID'];
  id: Scalars['UUID'];
};

export type RemoveTeamMemberInput = {
  id: Scalars['UUID'];
  userID: Scalars['UUID'];
};

export type RemoveUserIntegrationInput = {
  id: Scalars['UUID'];
  userID: Scalars['UUID'];
};

export type Replication = {
  __typename?: 'Replication';
  cluster?: Maybe<Cluster>;
  region: Scalars['String'];
  replicas?: Maybe<Scalars['Int']>;
};

export type ReplicationInput = {
  clusterID?: Maybe<Scalars['UUID']>;
  region: Scalars['String'];
  replicas: Scalars['Int'];
};

export type Repo = {
  __typename?: 'Repo';
  autoRetry?: Maybe<Scalars['Boolean']>;
  autoscaling?: Maybe<Autoscaling>;
  awsAccount?: Maybe<AwsAccount>;
  branch?: Maybe<RepoBranchV2>;
  branchIgnore?: Maybe<Scalars['String']>;
  branches?: Maybe<Array<RepoBranch>>;
  branchesV2?: Maybe<RepoBranchConnection>;
  buildMethod?: Maybe<BuildMethod>;
  buildSpec?: Maybe<ContainerSpec>;
  canDeploy?: Maybe<Scalars['Boolean']>;
  cdns?: Maybe<Array<Cdn>>;
  cluster?: Maybe<Cluster>;
  clusterDomains?: Maybe<Array<ClusterDomains>>;
  clusterIssuerName?: Maybe<Scalars['String']>;
  collaboratorInvitations?: Maybe<Array<ProjectCollaboratorInvitation>>;
  collaborators?: Maybe<Array<ProjectCollaborator>>;
  containerRegistry?: Maybe<ContainerRegistry>;
  cpu?: Maybe<Scalars['String']>;
  createdAt: Scalars['Time'];
  cronJobSchedule?: Maybe<Scalars['String']>;
  databaseEngine?: Maybe<DatabaseEngineType>;
  databaseEnvs: Array<EnvVar>;
  databaseLinks: Array<DatabaseLink>;
  databaseProvider?: Maybe<DatabaseProviderType>;
  databaseVersion?: Maybe<Scalars['String']>;
  dedicated?: Maybe<Scalars['Boolean']>;
  deployBranch?: Maybe<Scalars['Boolean']>;
  deployPullRequest?: Maybe<Scalars['Boolean']>;
  deployService?: Maybe<Scalars['Boolean']>;
  deployStrategy?: Maybe<DeployStrategy>;
  deployTarget?: Maybe<DeployTarget>;
  deployment?: Maybe<Deployment>;
  deployments?: Maybe<Array<Deployment>>;
  disableReason?: Maybe<DisableReason>;
  enabled: Scalars['Boolean'];
  envs?: Maybe<Array<EnvVar>>;
  ephemeralStorage?: Maybe<Scalars['Float']>;
  free?: Maybe<Scalars['Boolean']>;
  gcpAccount?: Maybe<GcpAccount>;
  githubRepository?: Maybe<GitHubRepository>;
  gpu?: Maybe<GpuSpec>;
  hasBuildStage?: Maybe<Scalars['Boolean']>;
  hasDeployStage?: Maybe<Scalars['Boolean']>;
  helmChart?: Maybe<HelmChart>;
  helmValues?: Maybe<Scalars['String']>;
  hostNetwork?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  jobRun: JobRun;
  jobRuns?: Maybe<JobRunConnection>;
  linkedProjects: Array<DatabaseLink>;
  livenessProbe?: Maybe<Probe>;
  logShipper?: Maybe<LogShipper>;
  manualDeploy?: Maybe<Scalars['Boolean']>;
  memory?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
  nodeSelector?: Maybe<Scalars['JSON']>;
  owner: User;
  path: Scalars['String'];
  ports?: Maybe<Array<Port>>;
  preStopSleep?: Maybe<Scalars['Int']>;
  productionBranch?: Maybe<Scalars['String']>;
  productionBranchV2?: Maybe<RepoBranchV2>;
  productionDeployment?: Maybe<Deployment>;
  prometheusScrape?: Maybe<PrometheusScrape>;
  readinessProbe?: Maybe<Probe>;
  replication?: Maybe<Array<Replication>>;
  source: RepoSource;
  startupProbe?: Maybe<Probe>;
  staticIP?: Maybe<Scalars['Boolean']>;
  terminationGracePeriodSeconds?: Maybe<Scalars['Int']>;
  terraformVariables?: Maybe<Scalars['JSON']>;
  terraformVersion?: Maybe<Scalars['String']>;
  tpu?: Maybe<TpuSpec>;
  updatedAt: Scalars['Time'];
  volumes?: Maybe<Array<VolumeSpec>>;
};


export type RepoBranchArgs = {
  id?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
};


export type RepoBranchesV2Args = {
  input?: Maybe<BranchInput>;
  page?: Maybe<PageInput>;
};


export type RepoDeploymentArgs = {
  id: Scalars['ID'];
};


export type RepoDeploymentsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  input?: Maybe<DeploymentsInput>;
};


export type RepoJobRunArgs = {
  id: Scalars['UUID'];
};

export type RepoBranch = {
  __typename?: 'RepoBranch';
  deployments?: Maybe<Array<Deployment>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  state?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Time']>;
};

export type RepoBranchConnection = {
  __typename?: 'RepoBranchConnection';
  nodes: Array<RepoBranchV2>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RepoBranchV2 = {
  __typename?: 'RepoBranchV2';
  awsLinks?: Maybe<AwsLinks>;
  branchSlug?: Maybe<Scalars['String']>;
  createdAt: Scalars['Time'];
  deployments?: Maybe<DeploymentConnection>;
  endpoints?: Maybe<Array<Scalars['String']>>;
  environmentSlug?: Maybe<Scalars['String']>;
  gcpLinks?: Maybe<GcpLinks>;
  id: Scalars['UUID'];
  image?: Maybe<Scalars['String']>;
  latestDeployment?: Maybe<Deployment>;
  loadBalancers?: Maybe<Array<LoadBalancer>>;
  metrics?: Maybe<Array<Metric>>;
  name: Scalars['String'];
  privateEndpoints?: Maybe<Array<Scalars['String']>>;
  repo?: Maybe<Repo>;
  state?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Time'];
};


export type RepoBranchV2DeploymentsArgs = {
  page?: Maybe<PageInput>;
};


export type RepoBranchV2MetricsArgs = {
  name: Scalars['String'];
};

export type RepoSource = {
  __typename?: 'RepoSource';
  id: Scalars['ID'];
  name: Scalars['String'];
  type: RepoSourceType;
};

export enum RepoSourceType {
  Docker = 'DOCKER',
  DockerHub = 'DOCKER_HUB',
  Git = 'GIT',
  Github = 'GITHUB',
  GithubPublic = 'GITHUB_PUBLIC',
  Gitlab = 'GITLAB',
  Helm = 'HELM',
  Terraform = 'TERRAFORM'
}

export type ReposInput = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  showDisabled?: Maybe<Scalars['Boolean']>;
  team?: Maybe<Scalars['ID']>;
};

export type RunJobInput = {
  build?: Maybe<Scalars['Boolean']>;
  id: Scalars['UUID'];
  runCommand?: Maybe<Scalars['String']>;
};

export type SearchHelmChartsInput = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
};

export type ServerlessConfig = {
  __typename?: 'ServerlessConfig';
  awsStackName?: Maybe<Scalars['String']>;
  functions?: Maybe<Array<ServerlessFunction>>;
  provider?: Maybe<ServerlessProvider>;
  service?: Maybe<Scalars['String']>;
};

export type ServerlessFunction = {
  __typename?: 'ServerlessFunction';
  handler?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ServerlessProvider = {
  __typename?: 'ServerlessProvider';
  name?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  runtime?: Maybe<Scalars['String']>;
  stackName?: Maybe<Scalars['String']>;
  stage?: Maybe<Scalars['String']>;
};

export type SetRepoEnvsInput = {
  envs: Array<EnvVarInput>;
  id: Scalars['ID'];
};

export type SignInWithWeb3Input = {
  challengeId: Scalars['UUID'];
  signature: Scalars['String'];
};

export type SlackIntegration = Integration & {
  __typename?: 'SlackIntegration';
  createdAt: Scalars['Time'];
  description: Scalars['String'];
  id: Scalars['UUID'];
  image: Scalars['String'];
  name: Scalars['String'];
  type: IntegrationType;
  updatedAt: Scalars['Time'];
};

export type SlackWebhookIntegration = Integration & {
  __typename?: 'SlackWebhookIntegration';
  createdAt: Scalars['Time'];
  description: Scalars['String'];
  id: Scalars['UUID'];
  image: Scalars['String'];
  name: Scalars['String'];
  type: IntegrationType;
  updatedAt: Scalars['Time'];
  url?: Maybe<Scalars['String']>;
};

export type StripePrice = {
  __typename?: 'StripePrice';
  id: Scalars['ID'];
  product: StripeProduct;
  unitAmount: Scalars['Int'];
};

export type StripeProduct = {
  __typename?: 'StripeProduct';
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type StripeSubscription = {
  __typename?: 'StripeSubscription';
  createdAt: Scalars['Time'];
  id: Scalars['ID'];
  items: Array<StripeSubscriptionItem>;
  status: StripeSubscriptionStatus;
};

export type StripeSubscriptionItem = {
  __typename?: 'StripeSubscriptionItem';
  id: Scalars['ID'];
  price: StripePrice;
  quantity: Scalars['Int'];
};

export enum StripeSubscriptionStatus {
  Active = 'active',
  Canceled = 'canceled',
  Incomplete = 'incomplete',
  IncompleteExpired = 'incomplete_expired',
  PastDue = 'past_due',
  Trialing = 'trialing',
  Unpaid = 'unpaid'
}

export type StripeUser = {
  __typename?: 'StripeUser';
  balance: Scalars['Int'];
  id: Scalars['ID'];
};

export type Subscription = {
  __typename?: 'Subscription';
  deploymentBuildLogsAdded: LogEntry;
  deploymentUpdated: Deployment;
  repoUpdated: Repo;
};


export type SubscriptionDeploymentBuildLogsAddedArgs = {
  input: BuildLogsInput;
};


export type SubscriptionDeploymentUpdatedArgs = {
  id: Scalars['ID'];
};


export type SubscriptionRepoUpdatedArgs = {
  id: Scalars['UUID'];
};

export type SuggestProjectNameInput = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SuggestTemplateNameInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type SyslogIntegration = {
  __typename?: 'SyslogIntegration';
  host: Scalars['String'];
  mode: Scalars['String'];
  port: Scalars['String'];
};

export type SyslogIntegrationInput = {
  host: Scalars['String'];
  mode: Scalars['String'];
  port: Scalars['String'];
};

export type TcpProbe = {
  __typename?: 'TCPProbe';
  host?: Maybe<Scalars['String']>;
  port: Scalars['String'];
};

export type TpuInput = {
  cores: Scalars['Int'];
  tfVersion: Scalars['String'];
  type: Scalars['String'];
};

export type TpuSpec = {
  __typename?: 'TPUSpec';
  cores: Scalars['Int'];
  tfVersion: Scalars['String'];
  type: Scalars['String'];
};

export type Team = ProfileOwner & ProjectOwner & {
  __typename?: 'Team';
  avatar: Scalars['URL'];
  children?: Maybe<Array<Team>>;
  id: Scalars['UUID'];
  login: Scalars['String'];
  memberInvitations: Array<TeamMemberInvitation>;
  members: Array<UserTeamEdge>;
  name: Scalars['String'];
  parent?: Maybe<Team>;
  plan: Plan;
  projects: ProjectConnection;
  user: User;
};


export type TeamProjectsArgs = {
  input?: Maybe<ProjectsInput>;
};

export type TeamMemberInvitation = {
  __typename?: 'TeamMemberInvitation';
  createdAt: Scalars['Time'];
  email?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['Time']>;
  id: Scalars['UUID'];
  link: Scalars['String'];
  role: TeamMemberRole;
  team: Team;
};

export enum TeamMemberRole {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Owner = 'OWNER',
  Viewer = 'VIEWER'
}

export type Template = {
  __typename?: 'Template';
  description: Scalars['String'];
  homepageURL?: Maybe<Scalars['URL']>;
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  projects: Array<ProjectTemplate>;
  repositoryURL?: Maybe<Scalars['URL']>;
  stats?: Maybe<TemplateStats>;
};

export type TemplateStats = {
  __typename?: 'TemplateStats';
  deploys: Scalars['Int'];
  forks: Scalars['Int'];
  stars: Scalars['Int'];
};

export type TransferProjectInput = {
  id: Scalars['ID'];
  to: Scalars['ID'];
};

export type UpdateBranchInput = {
  build?: Maybe<Scalars['Boolean']>;
  deploy?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['UUID']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  repoID?: Maybe<Scalars['UUID']>;
};

export type UpdateCdnInput = {
  domains?: Maybe<Array<Scalars['String']>>;
  id: Scalars['UUID'];
};

export type UpdateClusterInput = {
  containerCacheRepository?: Maybe<Scalars['String']>;
  containerRegistryID?: Maybe<Scalars['UUID']>;
  containerRepository?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

export type UpdateIpfsServiceInput = {
  accessToken?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

export type UpdateProjectInput = {
  autoRetry?: Maybe<Scalars['Boolean']>;
  autoscaling?: Maybe<AutoscalingInput>;
  branchIgnore?: Maybe<Scalars['String']>;
  buildCPU?: Maybe<Scalars['Float']>;
  buildCommand?: Maybe<Scalars['String']>;
  buildMemory?: Maybe<Scalars['Float']>;
  buildType?: Maybe<Scalars['String']>;
  clusterIssuerName?: Maybe<Scalars['String']>;
  containerRegistry?: Maybe<Scalars['UUID']>;
  cpu?: Maybe<Scalars['String']>;
  cronJobSchedule?: Maybe<Scalars['String']>;
  dedicated?: Maybe<Scalars['Boolean']>;
  deployBranch?: Maybe<Scalars['Boolean']>;
  deployService?: Maybe<Scalars['Boolean']>;
  deployStrategy?: Maybe<DeployStrategy>;
  deployTarget?: Maybe<ProjectDeployInput>;
  dockerImage?: Maybe<Scalars['String']>;
  dockerfilePath?: Maybe<Scalars['String']>;
  ephemeralStorage?: Maybe<Scalars['Float']>;
  githubInstallationID?: Maybe<Scalars['String']>;
  githubRepository?: Maybe<Scalars['String']>;
  gpu?: Maybe<GpuInput>;
  helmValues?: Maybe<Scalars['String']>;
  helmVersion?: Maybe<Scalars['String']>;
  hostNetwork?: Maybe<Scalars['Boolean']>;
  iamPolicies?: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  livenessProbe?: Maybe<ProbeInput>;
  logShipper?: Maybe<LogShipperInput>;
  manualDeploy?: Maybe<Scalars['Boolean']>;
  memory?: Maybe<Scalars['String']>;
  nodeSelector?: Maybe<Scalars['JSON']>;
  nodejsVersion?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  ports?: Maybe<Scalars['JSON']>;
  preStopSleep?: Maybe<Scalars['Int']>;
  productionBranch?: Maybe<Scalars['String']>;
  prometheusScrape?: Maybe<PrometheusScrapeInput>;
  readinessProbe?: Maybe<ProbeInput>;
  releaseCommand?: Maybe<Scalars['String']>;
  replication?: Maybe<Array<ReplicationInput>>;
  runCommand?: Maybe<Scalars['String']>;
  startupProbe?: Maybe<ProbeInput>;
  staticIP?: Maybe<Scalars['Boolean']>;
  staticPath?: Maybe<Scalars['String']>;
  terminationGracePeriodSeconds?: Maybe<Scalars['Int']>;
  terraformVariables?: Maybe<Scalars['String']>;
  terraformVersion?: Maybe<Scalars['String']>;
  tpu?: Maybe<TpuInput>;
  volumes?: Maybe<Scalars['JSON']>;
  workingDirectory?: Maybe<Scalars['String']>;
};

export type UpdateRepoCustomDomainInput = {
  disableCertManager?: Maybe<Scalars['Boolean']>;
  id: Scalars['UUID'];
};

export type UpdateTeamInput = {
  id: Scalars['UUID'];
  paymentMethod?: Maybe<Scalars['String']>;
  plan?: Maybe<UpdateTeamPlanInput>;
};

export type UpdateTeamMemberRoleInput = {
  id: Scalars['UUID'];
  role: TeamMemberRole;
};

export type UpdateTeamPlanInput = {
  billingPeriod: PlanBillingPeriod;
  tier: PlanTier;
};

export type UpdateUserInput = {
  avatar?: Maybe<Scalars['URL']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  login?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateWebhookIntegrationInput = {
  id: Scalars['UUID'];
  url: Scalars['String'];
  userID: Scalars['UUID'];
};

export type User = ProfileOwner & ProjectOwner & {
  __typename?: 'User';
  advanced?: Maybe<Scalars['Boolean']>;
  apiKeys?: Maybe<Array<ApiKey>>;
  avatar: Scalars['URL'];
  awsAccounts?: Maybe<Array<AwsAccount>>;
  billingEmail?: Maybe<Scalars['String']>;
  billingURL?: Maybe<Scalars['String']>;
  canDeploy?: Maybe<Scalars['Boolean']>;
  checkProjectName: Scalars['Boolean'];
  cloudAccount?: Maybe<CloudAccount>;
  cluster?: Maybe<Cluster>;
  clusters?: Maybe<Array<Cluster>>;
  containerRegistries?: Maybe<Array<ContainerRegistry>>;
  coreweaveAccounts?: Maybe<Array<CoreWeaveAccount>>;
  createdAt?: Maybe<Scalars['Time']>;
  defaultCluster?: Maybe<Cluster>;
  deployment?: Maybe<Deployment>;
  doAccounts?: Maybe<Array<DoAccount>>;
  dockerRepository?: Maybe<DockerRepository>;
  email?: Maybe<Scalars['String']>;
  freeLimitExceeded?: Maybe<Scalars['Boolean']>;
  freeQuota?: Maybe<Scalars['Int']>;
  freeTrialEndsAt?: Maybe<Scalars['Time']>;
  gcpAccounts?: Maybe<Array<GcpAccount>>;
  githubInstallations?: Maybe<Array<GitHubInstallation>>;
  githubRepositories?: Maybe<Array<GitHubRepository>>;
  githubRepository?: Maybe<GitHubRepository>;
  hasOnboarded?: Maybe<Scalars['Boolean']>;
  hasPaymentMethod?: Maybe<Scalars['Boolean']>;
  hasZeetCloud?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  integrations?: Maybe<Array<Integration>>;
  ipfsServices?: Maybe<Array<IpfsService>>;
  isTeam?: Maybe<Scalars['Boolean']>;
  jobRun: JobRun;
  login: Scalars['String'];
  name: Scalars['String'];
  needsPaymentMethod?: Maybe<Scalars['Boolean']>;
  paymentAuthorizationError?: Maybe<Scalars['String']>;
  paymentError?: Maybe<Scalars['String']>;
  projects: ProjectConnection;
  repo?: Maybe<Repo>;
  repos?: Maybe<Array<Repo>>;
  stripe?: Maybe<StripeUser>;
  suggestProjectName: Scalars['String'];
  suggestTemplateName: Scalars['String'];
  team?: Maybe<Team>;
  teams?: Maybe<Array<UserTeamEdge>>;
};


export type UserCheckProjectNameArgs = {
  input: CheckProjectNameInput;
};


export type UserCloudAccountArgs = {
  id: Scalars['ID'];
};


export type UserClusterArgs = {
  id: Scalars['UUID'];
};


export type UserDeploymentArgs = {
  id: Scalars['ID'];
};


export type UserDockerRepositoryArgs = {
  image: Scalars['String'];
};


export type UserGithubRepositoriesArgs = {
  installationID: Scalars['ID'];
};


export type UserGithubRepositoryArgs = {
  installationID: Scalars['ID'];
  owner: Scalars['String'];
  repo: Scalars['String'];
};


export type UserJobRunArgs = {
  id: Scalars['UUID'];
};


export type UserProjectsArgs = {
  input?: Maybe<ProjectsInput>;
};


export type UserRepoArgs = {
  id: Scalars['ID'];
};


export type UserReposArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  input?: Maybe<ReposInput>;
};


export type UserSuggestProjectNameArgs = {
  input: SuggestProjectNameInput;
};


export type UserSuggestTemplateNameArgs = {
  input: SuggestTemplateNameInput;
};


export type UserTeamArgs = {
  id: Scalars['ID'];
};

export enum UserAction {
  EditBilling = 'EDIT_BILLING',
  ReadPrivate = 'READ_PRIVATE'
}

export type UserAuth = {
  __typename?: 'UserAuth';
  authToken: Scalars['String'];
};

export type UserTeamEdge = {
  __typename?: 'UserTeamEdge';
  id: Scalars['UUID'];
  role: TeamMemberRole;
  team: Team;
  user: User;
};

export type Volume = {
  __typename?: 'Volume';
  id: Scalars['ID'];
  spec: VolumeSpec;
};

export type VolumeInput = {
  mountPath: Scalars['String'];
  size: Scalars['Int'];
};

export type VolumeSpec = {
  __typename?: 'VolumeSpec';
  mountPath: Scalars['String'];
  size: Scalars['Int'];
};

export type Web3Challenge = {
  __typename?: 'Web3Challenge';
  address: Scalars['String'];
  id: Scalars['UUID'];
  nonce: Scalars['String'];
};

export type UpdateDatabaseLinkInput = {
  envPrefix?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

export type DeployResultFragment = { __typename?: 'Deployment', id: string };

export type GetProjectQueryVariables = Exact<{
  path: Scalars['String'];
}>;


export type GetProjectQuery = { __typename?: 'Query', project?: Maybe<{ __typename?: 'Project', id: any }> };

export type UpdateProjectMutationVariables = Exact<{
  input: UpdateProjectInput;
}>;


export type UpdateProjectMutation = { __typename?: 'Mutation', updateProject: { __typename?: 'Repo', id: string, productionDeployment?: Maybe<{ __typename?: 'Deployment', id: string }> } };

export type UpdateBranchMutationVariables = Exact<{
  input: UpdateBranchInput;
}>;


export type UpdateBranchMutation = { __typename?: 'Mutation', updateBranch: { __typename?: 'RepoBranchV2', id: any, latestDeployment?: Maybe<{ __typename?: 'Deployment', id: string }> } };

export type DeployBranchMutationVariables = Exact<{
  id: Scalars['ID'];
  branch?: Maybe<Scalars['String']>;
}>;


export type DeployBranchMutation = { __typename?: 'Mutation', buildRepo: { __typename?: 'Repo', id: string, productionDeployment?: Maybe<{ __typename?: 'Deployment', id: string }> } };

export type GetDeploymentQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetDeploymentQuery = { __typename?: 'Query', currentUser: { __typename?: 'User', id: string, deployment?: Maybe<{ __typename?: 'Deployment', id: string, status: DeploymentStatus }> } };

export const DeployResultFragmentDoc = gql`
    fragment DeployResult on Deployment {
  id
}
    `;
export const GetProjectDocument = gql`
    query GetProject($path: String!) {
  project(path: $path) {
    id
  }
}
    `;
export const UpdateProjectDocument = gql`
    mutation UpdateProject($input: UpdateProjectInput!) {
  updateProject(input: $input) {
    id
    productionDeployment {
      ...DeployResult
    }
  }
}
    ${DeployResultFragmentDoc}`;
export const UpdateBranchDocument = gql`
    mutation UpdateBranch($input: UpdateBranchInput!) {
  updateBranch(input: $input) {
    id
    latestDeployment {
      ...DeployResult
    }
  }
}
    ${DeployResultFragmentDoc}`;
export const DeployBranchDocument = gql`
    mutation DeployBranch($id: ID!, $branch: String) {
  buildRepo(id: $id, branch: $branch) {
    id
    productionDeployment {
      ...DeployResult
    }
  }
}
    ${DeployResultFragmentDoc}`;
export const GetDeploymentDocument = gql`
    query GetDeployment($id: ID!) {
  currentUser {
    id
    deployment(id: $id) {
      id
      status
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetProject(variables: GetProjectQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProjectQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProjectQuery>(GetProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetProject');
    },
    UpdateProject(variables: UpdateProjectMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateProjectMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateProjectMutation>(UpdateProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateProject');
    },
    UpdateBranch(variables: UpdateBranchMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateBranchMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateBranchMutation>(UpdateBranchDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateBranch');
    },
    DeployBranch(variables: DeployBranchMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeployBranchMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeployBranchMutation>(DeployBranchDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeployBranch');
    },
    GetDeployment(variables: GetDeploymentQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDeploymentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDeploymentQuery>(GetDeploymentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetDeployment');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "CISource": [
      "DockerRepository",
      "GitHubRepository"
    ],
    "CloudAccount": [
      "AWSAccount",
      "DOAccount",
      "GCPAccount"
    ],
    "GitRepository": [
      "GitHubRepository"
    ],
    "IPipelineStage": [
      "BuildStage",
      "PipelineStage"
    ],
    "Integration": [
      "DatadogIntegration",
      "DiscordIntegration",
      "DiscordWebhookIntegration",
      "SlackIntegration",
      "SlackWebhookIntegration"
    ],
    "ProfileOwner": [
      "Team",
      "User"
    ],
    "ProjectOwner": [
      "Team",
      "User"
    ]
  }
};
      export default result;
    