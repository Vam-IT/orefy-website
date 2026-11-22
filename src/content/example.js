// The example environment shown on the website. It is the one in the demo (orefy-demo, web/src/demo/data.ts),
// so visitors see the same numbers in both places. None of it is a customer or a measured result.

export const EXAMPLE = {
  resources: 37,
  unmanaged: 34,
  share: 92, // percent
  hero: ['prod-main', 'web-public', 'web-01', 'app-runtime', 'orders-api', 'media-uploads'],
  inventory: [
    ['prod-main', 'VPC', 'clickops'],
    ['web-01', 'EC2 Instance', 'clickops'],
    ['app-runtime', 'IAM Role', 'clickops'],
    ['ci-deploy', 'IAM Role', 'iac'],
  ],
  files: ['versions.tf', 'providers.tf', 'variables.tf', 'network.tf', 'compute.tf', 'storage.tf', 'iam.tf', 'messaging.tf', 'imports.tf'],
  // Adopted resources per service; they add up to `unmanaged`.
  verified: [['EC2 & VPC', 14], ['S3', 7], ['IAM · Lambda', 6], ['SQS · SNS · DynamoDB', 7]],
};
