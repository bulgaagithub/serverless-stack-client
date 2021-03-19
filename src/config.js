const dev = {
  STRIPE_KEY:
    "pk_test_51INbVXIX0KbRZO0kYqJDAKUHHzXobXknTQddq09UhaxdNZHMlnTk38LPms4ZgjJbmfXFktRg7CDcVqhHlJflOAHH00VmEATtUg",
  s3: {
    REGION: "us-east-1",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-1wp7ee0jzb0b8",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://9pdafqgi2j.execute-api.us-east-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_AL8MO4K3a",
    APP_CLIENT_ID: "3kvodjrpbspu29govab6a1l70u",
    IDENTITY_POOL_ID: "us-east-1:f1969e5d-93be-47ec-af26-d83a0321fc56",
  },
};

const prod = {
  STRIPE_KEY:
    "pk_test_51INbVXIX0KbRZO0kYqJDAKUHHzXobXknTQddq09UhaxdNZHMlnTk38LPms4ZgjJbmfXFktRg7CDcVqhHlJflOAHH00VmEATtUg",
  s3: {
    REGION: "us-east-1",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-12l0b9henvonf",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://a6cgc52btg.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ZICno73s2",
    APP_CLIENT_ID: "7k2eus7hbu1jj2bn0iq2j92hi7",
    IDENTITY_POOL_ID: "us-east-1:0c24cfd5-bb06-4e83-933a-034fb68787e2",
  },
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;
