export const SENDBIRD_CONFIG = {
  // Replace with your Sendbird Application ID
  appId: import.meta.env.VITE_SENDBIRD_APP_ID || 'YOUR_SENDBIRD_APP_ID',

  // Bot user details
  botId: 'morningnembi-bot', // Fixed ID for the bot user
  botNickname: 'Assistant',

  // Upstage AI Configuration
  upstageApiKey: import.meta.env.VITE_UPSTAGE_API_KEY || '',

  // Sendbird Bot Token (for Platform API)
  botApiToken: import.meta.env.VITE_SENDBIRD_BOT_TOKEN || '',
};

export default SENDBIRD_CONFIG;
