const Ably = require('ably/promises');

exports.handler = async (event) => {
  // CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
      body: ''
    };
  }

  try {
    const apiKey = process.env.ABLY_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'Missing ABLY_API_KEY env var' })
      };
    }

    const client = new Ably.Rest(apiKey);

    // Extract clientId from query string, default to 'guest'
    const params = new URLSearchParams(event.rawQuery || '');
    const clientId = params.get('clientId') || 'guest';

    // Restrict capabilities to the specific channel used by the app
    const capability = {
      'public:chat': ['publish', 'subscribe', 'presence']
    };

    const tokenRequest = await client.auth.createTokenRequest({ clientId, capability });
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(tokenRequest)
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: String(err) })
    };
  }
};
