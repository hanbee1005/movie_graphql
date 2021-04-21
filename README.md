# movie_graphql
Movie API with Graphql

## graphql-yoga 란?
https://github.com/prisma-labs/graphql-yoga

GraphQL을 사용할 경우 원하는 요청에 대한 응답을 정확하게 받을 수 있습니다.
- over-fetch: 원하는 정보에 비해 필요 이상으로 더 많은 응답 받는 경우
- under-fetch: 원하는 최종 정보를 얻기 위해 여러번의 요청을 보내야하는 경우

Schema
: 서버와 주고 받을 정보에 대한 서술

Resolver
: Schema에 대한 요청이 오는 경우 어떤 처리를 할지에 대한 방법을 구현

Mutation
: Database의 상태가 변할 떄 사용되는 정보

## 프로젝트 설정
- movie_graphql 이라는 이름의 디렉토리를 생성
- github 에 같은 이름의 리포지토리를 생성
- 디렉토리 내부에서 yarn init 명령어로 기본 package.json 구성
- git 설정하기 (remote repository 연결)
- yarn add graphql-yoga 명령어로 설치
- yarn start 로 서버 실행하고
- http://localhost:4000으로 접속하기