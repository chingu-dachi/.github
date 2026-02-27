<!-- language toggle -->
<p align="center">
  <a href="https://github.com/chingu-dachi/.github/blob/main/profile/README.md"><b>한국어</b></a>
  &nbsp;|&nbsp;
  <a href="https://github.com/chingu-dachi/.github/blob/main/README.ja.md">日本語</a>
</p>

<!-- hero -->
<h1 align="center">친구다치 (chinguDachi)</h1>

<p align="center">
  <b>한국어 '친구' + 일본어 '友達(도모다치)' = 친구다치</b><br/>
  언어 장벽 없는 한일 실시간 AI 번역 채팅 플랫폼
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-MVP_개발중-FF6B6B?style=flat-square" alt="Status" />
  <img src="https://img.shields.io/badge/AI-Realtime_Translation-6366F1?style=flat-square" alt="AI" />
  <img src="https://img.shields.io/badge/stack-Spring_·_React_·_TypeScript-333?style=flat-square" alt="Stack" />
  <img src="https://img.shields.io/badge/lang-한국어_·_日本語-10B981?style=flat-square" alt="Languages" />
</p>

<p align="center">
  <a href="https://chingu-dachi.github.io/.github/">🌐 소개 사이트</a>
  &nbsp;·&nbsp;
  <a href="https://github.com/chingu-dachi/.github/tree/main/articles">📝 Tech Blog</a>
</p>

---

## 친구다치란?

한국과 일본 간 여행 수요가 폭발적으로 늘고 있지만, **언어 장벽**이 가장 큰 허들입니다.

친구다치는 **AI 실시간 번역**으로 한국어와 일본어 사이의 벽을 허물어, 양국 사용자가 **모국어로 자연스럽게 대화**할 수 있는 채팅 기반 네트워킹 플랫폼입니다.

> 내가 한국어로 보내면, 상대방에게는 자연스러운 일본어로.
> 相手が日本語で送れば、私には自然な韓国語で。

---

## 핵심 기능

### 1. AI 실시간 번역 채팅

메시지를 보내면 AI가 **2초 이내에 자동 번역**합니다. 번역문(크게)과 원문(작게)이 동시에 표시되어 언어 학습에도 도움이 됩니다.

```
🇰🇷 나: "도쿄 여행 어땠어요?"
          ↓ AI 번역 (< 2초)
🇯🇵 상대방 화면: "東京旅行はどうでしたか？"
                  도쿄 여행 어땠어요?  ← 원문(작게)
```

### 2. 관심사 기반 매칭

15개 관심사 태그(여행, 맛집, 카페, 음악, 패션 등)로 취향이 맞는 상대를 찾습니다. 유저 카드에서 프로필을 확인하고 바로 대화를 시작할 수 있습니다.

### 3. 이중 언어 UI

국적 선택 즉시 UI 전체가 해당 언어로 전환됩니다. 한국 유저는 한국어 UI, 일본 유저는 일본어 UI로 자연스럽게 사용합니다.

### 4. 간편한 시작

Google 로그인 한 번이면 바로 시작. 복잡한 가입 과정 없이 프로필 설정 후 즉시 채팅할 수 있습니다.

---

## 기술 스택

| 영역 | 기술 |
|------|------|
| **프론트엔드** | React + Vite (Web), Expo (Mobile), Turborepo 모노레포 |
| **백엔드** | Kotlin + Spring Boot 3.x |
| **실시간 통신** | WebSocket |
| **AI 번역** | LLM 기반 실시간 번역 |
| **데이터베이스** | PostgreSQL |
| **인증** | Google OAuth 2.0 |
| **스타일링** | Tailwind CSS + NativeWind |
| **상태 관리** | TanStack Query + Zustand |

---

## Tech Blog

개발 과정에서의 기술적 도전과 의사결정을 기록합니다.

> **[articles/](https://github.com/chingu-dachi/.github/tree/main/articles)** 에서 글 목록을 확인하세요.

---

## 로드맵

| Phase | 시기 | 주요 기능 |
|-------|------|----------|
| **Phase 1 (MVP)** | 현재 개발 중 | 간편 로그인, 1:1 AI 번역 채팅, 관심사 매칭, 이중 언어 UI |
| **Phase 2** | 출시 후 | SNS 피드, 추가 로그인 수단, 오프라인 모임 |
| **Phase 3** | 장기 | 지도 연동, 어학 스터디 기능 |

---

## 레포 구조

| 레포 | 설명 | 상태 |
|------|------|------|
| [**.github**](https://github.com/chingu-dachi/.github) | Organization 소개 + Tech Blog | Active |
| **frontend** | React + Expo 모노레포 (Turborepo) | 개발 중 |
| **backend** | Kotlin + Spring Boot API 서버 | 준비 중 |

---

## 개발자

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/shoeone96">
        <img src="https://github.com/shoeone96.png" width="100px;" alt=""/>
        <br />
        <sub><b>Won</b></sub>
      </a>
      <br />
      <sub>Backend (Java/Spring) · Frontend (React/TS)</sub>
    </td>
  </tr>
</table>

---

<p align="center">
  <sub>Built with ❤️ for 한일 교류</sub><br/>
  <sub>한국어 '친구' + 日本語 '友達' = <b>친구다치</b></sub>
</p>
