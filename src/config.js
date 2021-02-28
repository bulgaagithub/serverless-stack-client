const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-api-prod-serverlessdeploymentbucket-1jzuy884mv1a",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://yhes071skf.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_xk9MDdydg",
    APP_CLIENT_ID: "1pk5mrt2e5npbskdaslnka8g8f",
    IDENTITY_POOL_ID: "us-east-1:5a4c286d-cc4a-465a-942b-992e2b9f0796",
  },
};

export default config;
