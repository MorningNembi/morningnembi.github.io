export const content = {
  kr: {
    hero: {
      greeting: "안녕하세요, 저는",
      name: "이정택",
      ending: "입니다.",
      subtitle: "AI Engineer & Resercher",
      description: "복잡한 기술을 직관적인 경험으로 바꿉니다.\n사용자의 삶에 가치를 더하는 AI 서비스를 만듭니다."
    },
    about: {
      experience: [
        {
          title: 'AI Synergy Planning Intern',
          company: 'NAVER Cloud',
          period: '2025.09 ~ 현재',
          description: [
            '**HyperClova X를 활용한 AI 경험 리서치 및 기획**',
            'MCP에서의 OAuth 리서치 및 네이버 로그인 통합 Naver Remote MCP 개발',
            '**Clova Studio 및 네이버 클라우드 블로그용 쿡북 제작**',
            'MCP 실전 쿡북 시리즈(3부: OAuth 인증이 통합된 MCP 서버 구축하기 메인 작성, 전반적인 작성 서포트)',
            'LangChain v1.0으로 멀티에이전트 만들기: 미들웨어로 완성하는 리포트 AI(작성 완료, 12월 중순 개시 예정)',
          ],
          tags: ['AI Research', 'MCP', 'Agent', 'HyperClova X', 'Planning']
        },
        {
          title: '생성형 AI 2기',
          company: 'Kakao Tech Bootcamp',
          period: '2025.02 ~ 2025.08',
          description: [
            '**위치 기반 공동구매 서비스 개발 (뭉치면 산다)**',
            'URL 기반 공동구매 공고글 자동 생성 기능 개발',
            '자연어 기반 서비스 이용(검색, 참여) Multi-Agent 개발',
            '**문서 기반 문제 생성 서비스 개발 (TestPrep AI)**',
            '카카오 테크 해커톤 본선 진출 (Top 6 / 26팀)',
            '핵심 RAG 파이프라인 구축 및 프롬프트 엔지니어링 수행'
          ],
          tags: ['Agent', 'RAG', 'LangChain', 'FastAPI', 'Python']
        }
      ],
      education: [
        {
          title: '서울시립대학교',
          degree: '공간정보공학과 학사',
          period: '2019.03 - 2025.08',
          description: ['학점 3.50/4.5']
        }
      ],
      certs: [
        {
          title: '빅데이터분석기사',
          issuer: '한국데이터산업진흥원',
          date: '2024.07.12'
        },
        {
          title: 'SQLD',
          issuer: '한국데이터산업진흥원',
          date: '2023.12.15'
        },
        {
          title: 'ADsP',
          issuer: '한국데이터산업진흥원',
          date: '2023.06.16'
        }
      ],
      awards: [
        {
          title: 'Kakaotech Bootcamp Hackathon Finalist',
          issuer: 'Kakaotech bootcamp',
          date: '2025',
          description: ['TestPrep AI 프로젝트', '26개 팀 중 상위 6팀 본선 진출']
        },
        {
          title: '공간정보산업진흥원장상',
          issuer: '공간정보산업진흥원',
          date: '2024',
          description: ['공간정보경진대회 본상']
        }
      ]
    },
    portfolio: {
      modal: {
        overview: "개요",
        role: "역할",
        techStack: "기술 스택",
        keyFeatures: "주요 기능",
        achievement: "성과",
        links: {
          github: "GitHub",
          demo: "Live",
          paper: "Paper"
        }
      },
      projects: [
        {
          id: 1,
          title: 'Clova Studio 쿡북 작성',
          category: 'Technical Writing',
          image: '/images/clova-cookbook.png',
          description: 'Clova Studio 및 네이버 클라우드 플랫폼 기술 활용 가이드 문서 작성',
          details: {
            problem: 'Clova Studio와 네이버 클라우드 블로그에 업로드 될 쿡북 작성',
            solution: 'LangChain, MCP, Agent 등 다양한 주제로 실무 중심의 쿡북 시리즈를 작성하여 개발자들의 학습 곡선을 낮췄습니다.',
            role: 'Technical Writer & Developer',
            tech: ['Clova Studio', 'MCP', 'LangChain', 'OAuth 2.0', 'FastMCP'],
            features: [
              'MCP 실전 쿡북 시리즈 3부: OAuth 인증이 통합된 MCP 서버 구축하기 (메인 작성)',
              'LangChain v1.0으로 멀티에이전트 만들기: 미들웨어로 완성하는 리포트 AI (작성 완료, 12월 중순 개시 예정)',
              'LangChain DeepAgent 관련 쿡북, Agentic RAG 관련 쿡북 작성 예정',
              '실무 중심의 코드 예제 및 상세한 설명 제공',
              '개발자 커뮤니티 피드백 반영 및 지속적인 업데이트'
            ],
            achievement: '쿡북 시리즈를 통해 개발자들이 MCP 및 LangChain 활용법을 학습하였으며, 네이버 클라우드 공식 블로그에 게재되어 높은 조회수를 기록했습니다.'
          },
          links: {
            demo: 'https://www.ncloud-forums.com/forum/6/',
            github: null
          }
        },
        {
          id: 2,
          title: '뭉치면 산다 (Moongsan)',
          category: 'AI & Data Science',
          image: '/images/moongsan.png',
          description: '판교 지역 기반 공동구매 서비스 & AI 자동화',
          details: {
            problem: '공동구매의 번거로운 절차(공고 생성, 참여 관리)와 정보 탐색의 어려움',
            solution: '생성형 AI를 활용하여 URL 기반 공고글 자동 생성 및 자연어 기반 챗봇으로 서비스 이용 편의성을 극대화했습니다.',
            role: 'AI Engineer & Architecture Design',
            tech: ['LangChain', 'LangGraph', 'FastAPI', 'MySQL', 'Vector DB'],
            features: [
              'URL 기반 공고글 자동 생성 (LangGraph 크롤링 파이프라인)',
              '자연어 기반 서비스 조작 (Multi-Agent Supervisor)',
              '하이브리드 검색 시스템 설계',
              'Docker 기반 컨테이너 배포'
            ],
            achievement: '서비스 출시 후 1개월 내 100+ 사용자 확보, 공고 생성 시간 80% 단축 달성',
            troubleshooting: 'Vector DB 검색 정확도 개선을 위해 하이브리드 검색(키워드 + 벡터) 방식을 도입하여 검색 정확도를 35% 향상시켰습니다.'
          },
          links: {
            demo: 'https://moongsan.com/',
            github: 'https://github.com/100-hours-a-week/14-YG-AI/tree/dev'
          }
        },
        {
          id: 3,
          title: 'TestPrep AI',
          category: 'AI & Data Science',
          image: '/images/testprep.png',
          description: '사용자 문서 기반 문제 자동 생성 서비스',
          details: {
            problem: '학습 자료를 바탕으로 스스로 문제를 만들어 공부하기 어려움',
            solution: 'RAG 파이프라인을 통해 업로드된 문서를 분석하고 LLM을 활용하여 객관식 문제를 자동 생성하는 서비스를 구축했습니다.',
            role: 'AI Pipeline Architect & Backend Dev',
            tech: ['Python', 'LangChain', 'OpenAI', 'Chroma', 'FastAPI'],
            features: [
              '문서 기반 문제 생성 (RAG)',
              'PDF/텍스트 문서 업로드 및 시각화',
              '문제 풀기 및 정답/해설 제공',
              'FastAPI 기반 LLM 추론 서버 구축'
            ],
            achievement: '카카오 테크 해커톤 본선 진출 (Top 6 / 26팀), 문제 생성 정확도 85% 달성',
            troubleshooting: 'PDF 파싱 시 표와 이미지 처리 문제를 해결하기 위해 PyMuPDF와 OCR을 결합한 하이브리드 파싱 방식을 적용했습니다.'
          },
          links: {
            demo: null,
            github: 'https://github.com/Test-Prep-AI/Model/tree/main'
          }
        },
        {
          id: 4,
          title: 'Remote MCP (Naver & Kakao)',
          category: 'Research',
          image: 'https://github.com/user-attachments/assets/5e38b6ae-78a9-4556-8678-9c2086912f7d',
          description: 'OAuth 인증 통합 MCP 서버 (네이버 검색/캘린더, 카카오톡 메시지)',
          details: {
            problem: 'MCP 서버에서 사용자 인증이 필요한 외부 서비스 연동의 필요성',
            solution: 'FastMCP와 OAuth 2.0을 연동하여 네이버 및 카카오 서비스를 통합한 MCP 서버를 구현했습니다.',
            role: 'Sole Developer',
            tech: ['FastMCP', 'Python', 'OAuth 2.0', 'OIDC', 'CLOVA Studio API'],
            features: [
              '네이버: OAuth 2.0 연동 (PKCE 지원), 웹 검색, 캘린더 일정 추가',
              '카카오: OAuth 2.0 & OIDC 연동, 메시지 발송, 친구 목록 조회',
              '반응형 메시지 뷰어 제공',
              '자동 동의 처리 및 토큰 관리'
            ],
            achievement: 'MCP 생태계에 OAuth 인증 통합 사례를 제시하여 커뮤니티에서 50+ 스타 획득',
            troubleshooting: 'PKCE 플로우 구현 시 state 파라미터 검증 오류를 해결하기 위해 세션 기반 상태 관리를 도입했습니다.'
          },
          links: {
            demo: null,
            github: null
          }
        }
      ]
    },
    resume: {
      skillsTitle: "Technical Skills"
    }
  },
  en: {
    hero: {
      greeting: "Hi, I am",
      name: "JeongTaek Lee.",
      ending: "",
      subtitle: "AI Developer & Tech Lover",
      description: "I am an AI Developer focusing on user-centric AI services.\nI strive to create intuitive and useful AI solutions."
    },
    about: {
      experience: [
        {
          title: 'AI Research & Planning Intern',
          company: 'NAVER Cloud',
          period: '2025.09 ~ Present',
          description: [
            '**AI Experience Research & Planning using HyperClova X**',
            'Researched OAuth in MCP and developed Naver Remote MCP with Naver Login integration',
            'AI industry research and feature planning',
            'Created cookbooks for Clova Studio and Naver Cloud blog'
          ],
          tags: ['AI Research', 'MCP', 'OAuth', 'HyperClova X', 'Planning']
        },
        {
          title: 'Generative AI Track 2nd Cohort',
          company: 'Kakao Tech Bootcamp',
          period: '2025.02 ~ 2025.08',
          description: [
            '**Moongsan - Location-based Group Buying Service Development**',
            'Developed automatic group buying post generation feature based on URLs',
            'Developed AI assistant for service usage (search, participation) using natural language',
            '**TestPrep AI - Document-based Question Generation Service Development**',
            'Advanced to finals (Top 6 out of 26 teams) in Kakao Tech Hackathon',
            'Built core RAG pipeline and conducted prompt engineering'
          ],
          tags: ['Generative AI', 'RAG', 'LangChain', 'FastAPI', 'Python']
        }
      ],
      education: [
        {
          title: 'University of Seoul',
          degree: 'Bachelor of Geoinformatics',
          period: '2019.03 - 2025.08',
          description: ['GPA 3.50/4.5']
        }
      ],
      certs: [
        {
          title: 'Big Data Analysis Engineer',
          issuer: 'K-Data',
          date: ''
        },
        {
          title: 'SQLD',
          issuer: 'K-Data',
          date: ''
        },
        {
          title: 'ADsP',
          issuer: 'K-Data',
          date: ''
        }
      ],
      awards: [
        {
          title: 'Kakaotech Bootcamp Hackathon Finalist',
          issuer: 'Kakaotech bootcamp',
          date: '2025',
          description: ['TestPrep AI Project', 'Selected as Top 6 out of 26 teams']
        },
        {
          title: 'Korea Spatial Information Industry Promotion Agency Award',
          issuer: 'Korea Spatial Information Industry Promotion Agency',
          date: '2024',
          description: ['Spatial Information Competition Award']
        }
      ]
    },
    portfolio: {
      modal: {
        overview: "Overview",
        role: "Role",
        techStack: "Tech Stack",
        keyFeatures: "Key Features",
        achievement: "Achievement",
        links: {
          github: "GitHub",
          demo: "Live",
          paper: "Paper"
        }
      },
      projects: [
        {
          id: 1,
          title: 'Clova Studio Cookbook Writing',
          category: 'Technical Writing',
          image: '/images/clova-cookbook.png',
          description: 'Technical documentation for Clova Studio and Naver Cloud Platform',
          details: {
            problem: 'Creating cookbooks for Clova Studio and Naver Cloud blog',
            solution: 'Authored a series of practical cookbooks on various topics including LangChain, MCP, and Agent to lower the learning curve for developers.',
            role: 'Technical Writer & Developer',
            tech: ['Clova Studio', 'MCP', 'LangChain', 'OAuth 2.0', 'FastMCP'],
            features: [
              'MCP Practical Cookbook Series Part 3: Building MCP Server with OAuth Integration (Main Author)',
              'Building Multi-Agent with LangChain v1.0: Report AI with Middleware (Completed, scheduled for mid-December)',
              'Upcoming cookbooks on LangChain DeepAgent and Agentic RAG',
              'Practical code examples and detailed explanations',
              'Continuous updates based on developer community feedback'
            ],
            achievement: 'The cookbook series helped developers learn MCP and LangChain usage, published on Naver Cloud official blog with high view counts.'
          },
          links: {
            demo: 'https://www.ncloud-forums.com/forum/6/',
            github: null
          }
        },
        {
          id: 2,
          title: 'Moongsan',
          category: 'AI & Data Science',
          image: '/images/moongsan.png',
          description: 'Location-based Group Buying Service & AI Automation',
          details: {
            problem: 'Cumbersome procedures for group buying (post creation, participation management) and difficulty in finding information',
            solution: 'Maximized convenience by using Generative AI to automatically create posts from URLs and a natural language chatbot for service interaction.',
            role: 'AI Engineer & Architecture Design',
            tech: ['LangChain', 'LangGraph', 'FastAPI', 'MySQL', 'Vector DB'],
            features: [
              'Auto Post Generation from URL (LangGraph crawling pipeline)',
              'Natural Language Service Control (Multi-Agent Supervisor)',
              'Hybrid Search System Design',
              'Docker-based Container Deployment'
            ],
            achievement: 'Acquired 100+ users within 1 month of service launch, achieved 80% reduction in post creation time',
            troubleshooting: 'Improved search accuracy by 35% by introducing hybrid search (keyword + vector) method to enhance Vector DB search accuracy.'
          },
          links: {
            demo: 'https://moongsan.com/',
            github: 'https://github.com/100-hours-a-week/14-YG-AI/tree/dev'
          }
        },
        {
          id: 3,
          title: 'TestPrep AI',
          category: 'AI & Data Science',
          image: '/images/testprep.png',
          description: 'Document-based Question Generation Service',
          details: {
            problem: 'Difficulty in creating self-study questions from learning materials',
            solution: 'Built a service that analyzes uploaded documents via RAG pipeline and automatically generates multiple-choice questions using LLM.',
            role: 'AI Pipeline Architect & Backend Dev',
            tech: ['Python', 'LangChain', 'OpenAI', 'Chroma', 'FastAPI'],
            features: [
              'Document-based Question Generation (RAG)',
              'PDF/Text Document Upload & Visualization',
              'Quiz Solving & Answer/Explanation',
              'FastAPI-based LLM Inference Server'
            ],
            achievement: 'Advanced to Kakao Tech Hackathon finals (Top 6 / 26 teams), achieved 85% question generation accuracy',
            troubleshooting: 'Applied hybrid parsing method combining PyMuPDF and OCR to solve table and image processing issues during PDF parsing.'
          },
          links: {
            demo: null,
            github: 'https://github.com/Test-Prep-AI/Model/tree/main'
          }
        },
        {
          id: 4,
          title: 'Remote MCP (Naver & Kakao)',
          category: 'Research',
          image: 'https://github.com/user-attachments/assets/5e38b6ae-78a9-4556-8678-9c2086912f7d',
          description: 'MCP Server with OAuth Integration (Naver Search/Calendar, KakaoTalk Messaging)',
          details: {
            problem: 'Need for integrating external services requiring user authentication in MCP server',
            solution: 'Implemented MCP servers integrating Naver and Kakao services by connecting FastMCP with OAuth 2.0.',
            role: 'Sole Developer',
            tech: ['FastMCP', 'Python', 'OAuth 2.0', 'OIDC', 'CLOVA Studio API'],
            features: [
              'Naver: OAuth 2.0 Integration (PKCE support), Web Search, Calendar Schedule Addition',
              'Kakao: OAuth 2.0 & OIDC Integration, Message Sending, Friend List Retrieval',
              'Responsive Message Viewer',
              'Auto Consent Processing & Token Management'
            ],
            achievement: 'Presented OAuth authentication integration case to MCP ecosystem, gained 50+ stars in community',
            troubleshooting: 'Introduced session-based state management to resolve state parameter validation errors during PKCE flow implementation.'
          },
          links: {
            demo: null,
            github: null
          }
        }
      ]
    },
    resume: {
      skillsTitle: "Technical Skills"
    }
  }
};
