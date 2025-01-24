async function generateJwt() {
  const fs = await import('fs').catch((error) => {
    throw error;
  });
  const authApp = await import('@octokit/auth-app').catch((error) => {
    throw error;
  });

  const appId = process.env.SEMANTIC_APP_ID;
  const privateKey = process.env.SEMANTIC_APP_PRIVATE_KEY;
  const clientId = process.env.SEMANTIC_APP_CLIENT_ID;
  const clientSecret = process.env.SEMANTIC_APP_CLIENT_SECRET;

  const auth = authApp.createAppAuth({
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
}

generateJwt().catch((error) => {
  console.error(error);
  process.exit(1);
});
