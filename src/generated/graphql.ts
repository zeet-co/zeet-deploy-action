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
  connected?: Maybe<Scalars['Boolean']>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  roleARN?: Maybe<Scalars['String']>;
  state: AwsAccountState;
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
  eks?: Maybe<Scalars['String']>;
  lambda?: Maybe<Scalars['String']>;
};

export type AddAwsAccountInput = {
  accountID: Scalars['String'];
  userID: Scalars['UUID'];
};

export type AddClusterInput = {
  awsAccountID?: Maybe<Scalars['UUID']>;
  gcpAccountID?: Maybe<Scalars['UUID']>;
  kubeconfig?: Maybe<Scalars['Upload']>;
  name?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
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

export type Build = {
  __typename?: 'Build';
  backend?: Maybe<Scalars['String']>;
  buildID?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
  id: Scalars['UUID'];
  image?: Maybe<Scalars['String']>;
  logs?: Maybe<Logs>;
  metrics?: Maybe<Array<Metric>>;
  state: BuildState;
  updatedAt?: Maybe<Scalars['Time']>;
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
  releaseCommand?: Maybe<Scalars['String']>;
  runCommand?: Maybe<Scalars['String']>;
  staticPath?: Maybe<Scalars['String']>;
  type: BuildType;
  workingDirectory?: Maybe<Scalars['String']>;
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
  NodeNextjs_14 = 'NODE_NEXTJS_14',
  NodeStatic = 'NODE_STATIC',
  Python = 'PYTHON',
  PythonDjango = 'PYTHON_DJANGO',
  Ubuntu = 'UBUNTU'
}

export type CiSource = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  owner: Scalars['String'];
  url: Scalars['URL'];
};

export type Certificate = {
  __typename?: 'Certificate';
  challenges?: Maybe<Array<CertificateChallenge>>;
  createdAt: Scalars['Time'];
  dnsNames?: Maybe<Array<Scalars['String']>>;
  issuing: Scalars['Boolean'];
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

export enum CloudProvider {
  Aws = 'AWS',
  Gpc = 'GPC',
  Unknown = 'UNKNOWN'
}

export type Cluster = {
  __typename?: 'Cluster';
  awsAccount?: Maybe<AwsAccount>;
  cloudProvider?: Maybe<CloudProvider>;
  clusterProvider?: Maybe<ClusterProvider>;
  connected?: Maybe<Scalars['Boolean']>;
  domain?: Maybe<Scalars['String']>;
  gcpAccount?: Maybe<GcpAccount>;
  grafana?: Maybe<Grafana>;
  id: Scalars['UUID'];
  ingressDNS?: Maybe<Scalars['String']>;
  ingressIP?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  private: Scalars['Boolean'];
  prometheus?: Maybe<Prometheus>;
  region?: Maybe<Scalars['String']>;
  state: ClusterState;
  staticIPs?: Maybe<Array<Scalars['String']>>;
};

export enum ClusterProvider {
  Eks = 'EKS',
  Generic = 'GENERIC',
  Gke = 'GKE'
}

export enum ClusterState {
  Creating = 'CREATING',
  Error = 'ERROR',
  Healthy = 'HEALTHY'
}

export type Container = {
  __typename?: 'Container';
  id: Scalars['UUID'];
  status: ContainerStatus;
};

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

export type CreateApiKeyInput = {
  name: Scalars['String'];
  userID: Scalars['UUID'];
};

export type CreateClusterInput = {
  awsAccountID?: Maybe<Scalars['UUID']>;
  gcpAccountID?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  region: Scalars['String'];
  userID: Scalars['UUID'];
};

export type CreateDatadogIntegrationInput = {
  apiKey: Scalars['String'];
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
  domain: Scalars['String'];
  id: Scalars['ID'];
  ipTargets?: Maybe<Array<Scalars['String']>>;
  isApex: Scalars['Boolean'];
};

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

export type DeployStatus = {
  __typename?: 'DeployStatus';
  active: Scalars['Boolean'];
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
  Kubernetes = 'KUBERNETES',
  Serverless = 'SERVERLESS'
}

export type Deployment = {
  __typename?: 'Deployment';
  awsLinks?: Maybe<AwsLinks>;
  branch?: Maybe<Scalars['String']>;
  build?: Maybe<Build>;
  containers?: Maybe<Array<Container>>;
  createdAt?: Maybe<Scalars['Time']>;
  deployStatus?: Maybe<DeployStatus>;
  endpoint?: Maybe<Scalars['String']>;
  endpoints?: Maybe<Array<Scalars['String']>>;
  gcpLinks?: Maybe<GcpLinks>;
  helmRelease?: Maybe<HelmRelease>;
  id: Scalars['ID'];
  loadBalancers?: Maybe<Array<LoadBalancer>>;
  logs?: Maybe<Array<LogEntry>>;
  metrics?: Maybe<Array<Metric>>;
  privateEndpoint?: Maybe<Scalars['String']>;
  release?: Maybe<Release>;
  repo?: Maybe<Repo>;
  status: DeploymentStatus;
  updatedAt?: Maybe<Scalars['Time']>;
  version: Scalars['String'];
  volumes?: Maybe<Array<Volume>>;
};


export type DeploymentMetricsArgs = {
  name: Scalars['String'];
};

export enum DeploymentStatus {
  BuildFailed = 'BUILD_FAILED',
  BuildInProgress = 'BUILD_IN_PROGRESS',
  BuildPending = 'BUILD_PENDING',
  BuildSucceeded = 'BUILD_SUCCEEDED',
  DeployCrashing = 'DEPLOY_CRASHING',
  DeployFailed = 'DEPLOY_FAILED',
  DeployHealhty = 'DEPLOY_HEALHTY',
  DeployInProgress = 'DEPLOY_IN_PROGRESS',
  DeployStopped = 'DEPLOY_STOPPED',
  DeploySucceeded = 'DEPLOY_SUCCEEDED'
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

export type GcpAccount = {
  __typename?: 'GCPAccount';
  clientEmail?: Maybe<Scalars['String']>;
  connected?: Maybe<Scalars['Boolean']>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  projectID?: Maybe<Scalars['String']>;
  state: GcpAccountState;
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
  password: Scalars['String'];
  url: Scalars['String'];
  user: Scalars['String'];
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

export type JobRun = {
  __typename?: 'JobRun';
  build?: Maybe<Build>;
  command: Scalars['String'];
  createdAt?: Maybe<Scalars['Time']>;
  exitCode?: Maybe<Scalars['Int']>;
  id: Scalars['UUID'];
  logs?: Maybe<Logs>;
  project: Repo;
  state: JobRunState;
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
  logDNA?: Maybe<LogDnaIntegration>;
  logz?: Maybe<LogzIntegration>;
  syslog?: Maybe<SyslogIntegration>;
  type: LogShipperType;
};

export type LogShipperInput = {
  logDNA?: Maybe<LogDnaIntegrationInput>;
  logz?: Maybe<LogzIntegrationInput>;
  syslog?: Maybe<SyslogIntegrationInput>;
  type?: Maybe<LogShipperType>;
};

export enum LogShipperType {
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
  addAWSAccount: AwsAccount;
  addCluster: Cluster;
  addGCPAccount: GcpAccount;
  addProjectCollaborator: Repo;
  addRepoCustomDomain: Repo;
  addTeamMember: Team;
  buildRepo: Repo;
  copyEnvVars?: Maybe<Repo>;
  createAPIKey: ApiKey;
  createCluster: Cluster;
  createDatadogIntegration: DatadogIntegration;
  createDiscordWebhookIntegration: DiscordWebhookIntegration;
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
  deleteUser: Scalars['Boolean'];
  deployRepo: Repo;
  disableRepo: Repo;
  enableRepo: Repo;
  freezeRepo: Template;
  migrateGithubConnection: Repo;
  reissueCustomDomainCertificate: Repo;
  removeAWSAccount: Scalars['Boolean'];
  removeGCPAccount: Scalars['Boolean'];
  removeLogShipper: Scalars['Boolean'];
  removeProbe: Repo;
  removeProjectCollaborator: Repo;
  removeRepoCustomDomain: Repo;
  removeTeamMember: Team;
  removeUserIntegration: Scalars['Boolean'];
  repeatDeployment: Deployment;
  rollbackProjectToDeployment: Repo;
  runJob: JobRun;
  setPaymentMethod: User;
  setRepoEnvs: Repo;
  signInWithWeb3: UserAuth;
  transferProject: Repo;
  updateDiscordWebhookIntegration: DiscordWebhookIntegration;
  updateProject: Repo;
  updateSlackWebhookIntegration: SlackWebhookIntegration;
  updateTeam: Team;
  updateUser: User;
  uploadDockerCompose: Template;
  verifyAWSAccount: AwsAccount;
};


export type MutationAddAwsAccountArgs = {
  input: AddAwsAccountInput;
};


export type MutationAddClusterArgs = {
  input: AddClusterInput;
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


export type MutationCreateDatadogIntegrationArgs = {
  input: CreateDatadogIntegrationInput;
};


export type MutationCreateDiscordWebhookIntegrationArgs = {
  input: CreateWebhookIntegrationInput;
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


export type MutationDeployRepoArgs = {
  id: Scalars['ID'];
};


export type MutationDisableRepoArgs = {
  id: Scalars['ID'];
};


export type MutationEnableRepoArgs = {
  id: Scalars['ID'];
};


export type MutationFreezeRepoArgs = {
  id: Scalars['UUID'];
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


export type MutationRepeatDeploymentArgs = {
  id: Scalars['ID'];
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


export type MutationUpdateDiscordWebhookIntegrationArgs = {
  input: UpdateWebhookIntegrationInput;
};


export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};


export type MutationUpdateSlackWebhookIntegrationArgs = {
  input: UpdateWebhookIntegrationInput;
};


export type MutationUpdateTeamArgs = {
  input: UpdateTeamInput;
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
  https: Scalars['Boolean'];
  loadBalancer: Scalars['Boolean'];
  port: Scalars['String'];
  protocol: Scalars['String'];
  public: Scalars['Boolean'];
};

export type PortInput = {
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

export type ProjectDeployInput = {
  awsAccountID?: Maybe<Scalars['UUID']>;
  clusterID?: Maybe<Scalars['UUID']>;
  deployTarget: DeployTarget;
  gcpAccountID?: Maybe<Scalars['UUID']>;
};

export type ProjectOwner = {
  avatar: Scalars['URL'];
  id: Scalars['ID'];
  login: Scalars['String'];
  name: Scalars['String'];
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

export type Prometheus = {
  __typename?: 'Prometheus';
  password: Scalars['String'];
  url: Scalars['String'];
  user: Scalars['String'];
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
  project: Repo;
  searchHelmCharts: HelmChartConnection;
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
  region: Scalars['String'];
  replicas?: Maybe<Scalars['Int']>;
};

export type ReplicationInput = {
  region: Scalars['String'];
  replicas: Scalars['Int'];
};

export type Repo = {
  __typename?: 'Repo';
  autoscaling?: Maybe<Autoscaling>;
  awsAccount?: Maybe<AwsAccount>;
  branches?: Maybe<Array<RepoBranch>>;
  buildMethod?: Maybe<BuildMethod>;
  buildSpec?: Maybe<ContainerSpec>;
  cluster?: Maybe<Cluster>;
  collaboratorInvitations?: Maybe<Array<ProjectCollaboratorInvitation>>;
  collaborators?: Maybe<Array<ProjectCollaborator>>;
  cpu?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
  cronJobSchedule?: Maybe<Scalars['String']>;
  customDomains?: Maybe<Array<CustomDomain>>;
  dedicated?: Maybe<Scalars['Boolean']>;
  deployBranch?: Maybe<Scalars['Boolean']>;
  deployPullRequest?: Maybe<Scalars['Boolean']>;
  deployService?: Maybe<Scalars['Boolean']>;
  deployStrategy?: Maybe<DeployStrategy>;
  deployTarget?: Maybe<DeployTarget>;
  deployedBranches?: Maybe<Array<RepoBranch>>;
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
  helmChart?: Maybe<HelmChart>;
  helmValues?: Maybe<Scalars['String']>;
  hostNetwork?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  jobRun: JobRun;
  jobRuns?: Maybe<JobRunConnection>;
  livenessProbe?: Maybe<Probe>;
  logShipper?: Maybe<LogShipper>;
  manualDeploy?: Maybe<Scalars['Boolean']>;
  memory?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
  owner?: Maybe<User>;
  ports?: Maybe<Array<Port>>;
  preStopSleep?: Maybe<Scalars['Int']>;
  productionBranch?: Maybe<Scalars['String']>;
  productionDeployment?: Maybe<Deployment>;
  prometheusScrape?: Maybe<PrometheusScrape>;
  readinessProbe?: Maybe<Probe>;
  replication?: Maybe<Array<Replication>>;
  source: RepoSource;
  startupProbe?: Maybe<Probe>;
  staticIP?: Maybe<Scalars['Boolean']>;
  terminationGracePeriodSeconds?: Maybe<Scalars['Int']>;
  tpu?: Maybe<TpuSpec>;
  updatedAt?: Maybe<Scalars['Time']>;
  volumes?: Maybe<Array<VolumeSpec>>;
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
  Helm = 'HELM'
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

export type Team = {
  __typename?: 'Team';
  avatar: Scalars['URL'];
  id: Scalars['UUID'];
  login: Scalars['String'];
  memberInvitations: Array<TeamMemberInvitation>;
  members: Array<UserTeamEdge>;
  name: Scalars['String'];
  plan: Plan;
  repos?: Maybe<Array<Repo>>;
  user: User;
};


export type TeamReposArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  input?: Maybe<ReposInput>;
};

export type TeamMemberInvitation = {
  __typename?: 'TeamMemberInvitation';
  email: Scalars['String'];
  id: Scalars['UUID'];
  link: Scalars['String'];
  role: Scalars['String'];
  team: TeamMemberRole;
};

export enum TeamMemberRole {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Owner = 'OWNER'
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

export type UpdateProjectInput = {
  autoscaling?: Maybe<AutoscalingInput>;
  buildCPU?: Maybe<Scalars['Float']>;
  buildCommand?: Maybe<Scalars['String']>;
  buildMemory?: Maybe<Scalars['Float']>;
  buildType?: Maybe<Scalars['String']>;
  cpu?: Maybe<Scalars['String']>;
  cronJobSchedule?: Maybe<Scalars['String']>;
  dedicated?: Maybe<Scalars['Boolean']>;
  deployBranch?: Maybe<Scalars['Boolean']>;
  deployService?: Maybe<Scalars['Boolean']>;
  deployStrategy?: Maybe<DeployStrategy>;
  dockerImage?: Maybe<Scalars['String']>;
  dockerfilePath?: Maybe<Scalars['String']>;
  ephemeralStorage?: Maybe<Scalars['Float']>;
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
  tpu?: Maybe<TpuInput>;
  volumes?: Maybe<Scalars['JSON']>;
  workingDirectory?: Maybe<Scalars['String']>;
};

export type UpdateTeamInput = {
  id: Scalars['UUID'];
  paymentMethod?: Maybe<Scalars['String']>;
  plan?: Maybe<UpdateTeamPlanInput>;
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

export type User = ProjectOwner & {
  __typename?: 'User';
  advanced?: Maybe<Scalars['Boolean']>;
  apiKeys?: Maybe<Array<ApiKey>>;
  avatar: Scalars['URL'];
  awsAccounts?: Maybe<Array<AwsAccount>>;
  billingEmail?: Maybe<Scalars['String']>;
  billingURL?: Maybe<Scalars['String']>;
  canDeploy?: Maybe<Scalars['Boolean']>;
  checkProjectName: Scalars['Boolean'];
  clusters?: Maybe<Array<Cluster>>;
  createdAt?: Maybe<Scalars['Time']>;
  defaultCluster?: Maybe<Cluster>;
  deployment?: Maybe<Deployment>;
  dockerRepository?: Maybe<DockerRepository>;
  email?: Maybe<Scalars['String']>;
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
  isTeam?: Maybe<Scalars['Boolean']>;
  login: Scalars['String'];
  name: Scalars['String'];
  needsPaymentMethod?: Maybe<Scalars['Boolean']>;
  paymentAuthorizationError?: Maybe<Scalars['String']>;
  paymentError?: Maybe<Scalars['String']>;
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

export type DeployResultFragment = { __typename?: 'Repo', id: string, productionDeployment?: Maybe<{ __typename?: 'Deployment', id: string }> };

export type GetProjectQueryVariables = Exact<{
  path: Scalars['String'];
}>;


export type GetProjectQuery = { __typename?: 'Query', project: { __typename?: 'Repo', id: string } };

export type UpdateProjectMutationVariables = Exact<{
  input: UpdateProjectInput;
}>;


export type UpdateProjectMutation = { __typename?: 'Mutation', updateProject: { __typename?: 'Repo', id: string, productionDeployment?: Maybe<{ __typename?: 'Deployment', id: string }> } };

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
    fragment DeployResult on Repo {
  id
  productionDeployment {
    id
  }
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
    ...DeployResult
  }
}
    ${DeployResultFragmentDoc}`;
export const DeployBranchDocument = gql`
    mutation DeployBranch($id: ID!, $branch: String) {
  buildRepo(id: $id, branch: $branch) {
    ...DeployResult
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
    "GitRepository": [
      "GitHubRepository"
    ],
    "Integration": [
      "DatadogIntegration",
      "DiscordIntegration",
      "DiscordWebhookIntegration",
      "SlackIntegration",
      "SlackWebhookIntegration"
    ],
    "ProjectOwner": [
      "User"
    ]
  }
};
      export default result;
    