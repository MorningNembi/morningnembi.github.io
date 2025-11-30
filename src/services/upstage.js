import { content } from '../data/content';
import SENDBIRD_CONFIG from '../config/sendbird';

// Construct System Prompt from Portfolio Data
const generateSystemPrompt = () => {
  const data = content.kr; // Use Korean data for better context in Korean queries

  let prompt = `You are an AI Assistant for JeongTaek Lee (이정택)'s portfolio website.
Your role is to answer questions about JeongTaek Lee based on the following information.
Be polite, professional, and concise. If you don't know the answer, say you don't know.
Do not make up information.

IMPORTANT: Respond in plain text only. Do NOT use markdown formatting (no **, *, #, -, etc.). 
Just write naturally as if you're speaking to someone.

--- PORTFOLIO DATA ---

Name: JeongTaek Lee (이정택)
Role: AI Engineer & Tech Lover
Description: ${data.hero.description}

[Introduction & Values]
${data.about.intro.join('\n')}

[Experience]
${data.about.experience.map(exp => `
- ${exp.title} at ${exp.company} (${exp.period})
  ${exp.description.join('\n  ')}
  Tags: ${exp.tags.join(', ')}
`).join('\n')}

[Education]
${data.about.education.map(edu => `
- ${edu.title} (${edu.degree})
  ${edu.period}
  ${edu.description.join('\n  ')}
`).join('\n')}

[Activities]
${data.about.activities.map(act => `
- ${act.title} (${act.role})
  ${act.period}
  ${act.description ? act.description.join('\n  ') : ''}
`).join('\n')}

[Projects]
${data.portfolio.projects.map(proj => `
- ${proj.title} (${proj.category})
  Description: ${proj.description}
  Role: ${proj.details.role}
  Tech Stack: ${proj.details.tech.join(', ')}
  Key Features:
  ${proj.details.features.join('\n  ')}
  ${proj.details.achievement ? `Achievement: ${proj.details.achievement}` : ''}
  ${proj.details.troubleshooting ? `Problem Solving: ${proj.details.troubleshooting}` : ''}
`).join('\n')}

[Awards]
${data.about.awards.map(award => `
- ${award.title} (${award.issuer}, ${award.date})
  ${award.description.join('\n  ')}
`).join('\n')}

[Certifications]
${data.about.certs.map(cert => `
- ${cert.title} (${cert.issuer}, ${cert.date})
`).join('\n')}

--- END DATA ---

Answer in the language the user asked (Korean or English).
If asked about contact info, suggest checking the footer or contact section.
`;

  return prompt;
};

export const getUpstageResponse = async (userMessage, history = []) => {
  try {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    console.log(`[OpenAI] Configuration Check:`);
    console.log(`- API Key: ${apiKey ? `${apiKey.substring(0, 7)}...` : 'MISSING'}`);

    if (!apiKey) {
      throw new Error('OpenAI API Key is missing');
    }

    const systemPrompt = generateSystemPrompt();

    // Format messages for API
    const messages = [
      { role: 'system', content: systemPrompt },
      ...history.map(msg => ({
        role: msg.sender.userId === SENDBIRD_CONFIG.botId ? 'assistant' : 'user',
        content: msg.message
      })),
      { role: 'user', content: userMessage }
    ];

    console.log('[OpenAI] Sending request to GPT-4o-mini API. Messages payload:');
    console.table(messages);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('[OpenAI] API Error Response:', errorData);
      throw new Error(`OpenAI API Error: ${errorData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    console.log('[OpenAI] API Response Data:', data);
    console.log('[OpenAI] AI Reply Content:', data.choices[0].message.content);
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return "죄송합니다. 현재 AI 응답을 생성할 수 없습니다. (API Key 설정을 확인해주세요)";
  }
};
