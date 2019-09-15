## Setup 

For node and Typescript

```
$ npm i typescript nodemon ts-node --save-dev
$ npx tsc --init --rootDir src --outDir dist --lib dom,es6 --module commonjs --removeComments
```

For Apollo GraphQL server

```
npm i apollo-server-express compression cors express graphql http ncp
npm i @types/compression @types/express @types/graphql @types/graphql-depth-limit @types/node graphql-depth-limit graphql-import graphql-import-node --save-dev
```