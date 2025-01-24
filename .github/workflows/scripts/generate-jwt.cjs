const fs = require('fs');
const { createAppAuth } = require('@octokit/auth-app');

const appId = process.env.SEMANTIC_APP_ID;
const privateKey = process.env.SEMANTIC_APP_PRIVATE_KEY;
const clientId = process.env.SEMANTIC_APP_CLIENT_ID;
const clientSecret = process.env.SEMANTIC_APP_CLIENT_SECRET;

const auth = createAppAuth({
  appId,
  privateKey,
  clientId,
  clientSecret
});

auth()
  .then(({ token }) => {
    fs.writeFileSync('../jwt.txt', token);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });