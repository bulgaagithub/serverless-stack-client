const config = {
  STRIPE_KEY:
    "pk_test_51INbVXIX0KbRZO0kYqJDAKUHHzXobXknTQddq09UhaxdNZHMlnTk38LPms4ZgjJbmfXFktRg7CDcVqhHlJflOAHH00VmEATtUg",
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
    IDENTITY_POOL_ID: "us-east-1:870a3118-a995-454b-b367-0dc481aac417",
  },
};

export default config;
