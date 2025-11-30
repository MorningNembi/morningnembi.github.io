
import SENDBIRD_CONFIG from '../config/sendbird';

export const sendBotMessage = async (channelUrl, message) => {
  try {
    const appId = SENDBIRD_CONFIG.appId;
    const token = SENDBIRD_CONFIG.botApiToken;
    
    console.log(`[SendbirdBot] Configuration Check:`);
    console.log(`- App ID: ${appId}`);
    console.log(`- Bot Token: ${token ? `${token.substring(0, 4)}...` : 'MISSING'}`);
    console.log(`- Bot ID: ${SENDBIRD_CONFIG.botId}`);

    if (!appId || !token) {
      throw new Error('Missing App ID or Bot Token');
    }

    const url = `https://api-${appId}.sendbird.com/v3/group_channels/${channelUrl}/messages`;
    
    console.log('Sending Bot Message to:', url);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf8',
        'Api-Token': SENDBIRD_CONFIG.botApiToken
      },
      body: JSON.stringify({
        message_type: 'MESG',
        user_id: SENDBIRD_CONFIG.botId,
        message: message
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Sendbird Bot API Error:', errorData);
      throw new Error(`Sendbird API Error: ${errorData.message}`);
    }

    console.log('Bot Message Sent Successfully');
    return await response.json();
  } catch (error) {
    console.error('Failed to send bot message:', error);
    throw error;
  }
};

export const joinBot = async (channelUrl) => {
  try {
    console.log(`[SendbirdBot] Attempting to join channel: ${channelUrl}`);
    // Try to accept invitation instead of join (for private channels)
    const url = `https://api-${SENDBIRD_CONFIG.appId}.sendbird.com/v3/group_channels/${channelUrl}/accept`;
    
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf8',
        'Api-Token': SENDBIRD_CONFIG.botApiToken
      },
      body: JSON.stringify({
        user_id: SENDBIRD_CONFIG.botId
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log('Bot Accept Invitation Result:', errorData);
      // It's okay if it fails (e.g., already member), just log it
    } else {
      console.log('Bot accepted invitation successfully');
    }
  } catch (error) {
    console.error('Failed to join bot:', error);
  }
};
