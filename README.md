# Node Express Template

This is a node-express-template repository which comes in with the following things baked in and pre-configured:

- [x] Typescript
- [x] Eslint
- [x] Prettier
- [x] Nodemon
- [x] Jest
- [x] Husky
  - [x] Pre-Commit Hook
  - [x] Pre-Push Hook
- [x] Lint Staged

## Directory structure

```
./src
├── config.ts
├── core
│   ├── definition
│   │   ├── index.ts
│   │   ├── RequestDTO.ts
│   │   ├── Result.ts
│   │   ├── __tests__
│   │   │   ├── Result.ts
│   │   │   └── UseCaseError.ts
│   │   ├── UseCaseError.ts
│   │   └── UseCase.ts
│   ├── entities
│   │   └── index.ts
│   └── usecases
├── data
│   └── index.ts
├── entrypoint
│   ├── cli
│   └── web
│       ├── controllers
│       ├── defintions
│       │   ├── Controller.ts
│       │   ├── index.ts
│       │   └── Router.ts
│       ├── ExpressApp.ts
│       ├── index.ts
│       └── routers
├── index.ts
├── setup
│   ├── core
│   ├── data
│   ├── entrypoint
│   │   ├── cli
│   │   └── web
│   └── Main.ts
└── utils
    ├── index.ts
    └── logger.ts

```

**_This template is highly opiniated and is based on my experience working with node.js and typescipt in production environment. It tries to strictly adhere to the Bob Martin's clean architecture_**

## NOTES:

1. Change the thresholds in jest.config.js as per the project needs, it is set to lower here as it is a template repository.
1. Please see https://github.com/utkarsh-pro/clean-api to see how a real project can be setup using this template.
