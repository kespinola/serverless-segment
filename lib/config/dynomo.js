import AWS from 'aws-sdk';

const dynamoConfig = {
  region: process.env.AWS_DYNAMO_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
};

export default new AWS.DynamoDB.DocumentClient(dynamoConfig);
