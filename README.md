# 돌봄 준비 안내서

방문요양센터 개설과 요양보호사 자격증 취득을 안내하는 Next.js App Router 프로젝트입니다. 체크리스트는 현재 브라우저의 로컬 저장소에 저장됩니다.

## 로컬 실행

Node.js 24에서 프로젝트 폴더를 열고 실행합니다.

```powershell
npm ci
npm run dev
```

브라우저에서 http://localhost:3000 을 엽니다. 프로덕션 빌드는 `npm run build`로 확인할 수 있습니다.

## Vercel 배포

프로젝트 폴더에서 아래 명령을 실행하고 본인 Vercel 계정으로 로그인합니다. 배포 중 처음 생성하는 프로젝트라면 사용할 계정 또는 팀을 선택합니다.

```powershell
npx vercel@latest login
npx vercel@latest deploy
```

미리보기 URL에서 내용을 확인한 후 프로덕션에 배포합니다.

```powershell
npx vercel@latest deploy --prod
```

Git 저장소를 연결하는 경우 이 프로젝트가 있는 폴더를 Root Directory로 선택하고 Framework Preset을 Next.js로 설정합니다. 별도 환경 변수는 필요하지 않습니다.
