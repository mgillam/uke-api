const restify = require('restify');
const graphqlHttp = require('express-graphql');
const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const cookieRouter = require('./router/cookieAuth.router');
const bearerRouter = require('./router/bearerAuth.router');

const gqlSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        }
      }
    }
  })
});

const app = restify.createServer();

app.post(
  '/gquery',
  graphqlHttp({
    schema: gqlSchema,
    graphiql: false
  })
);

app.get(
  '/gquery',
  graphqlHttp({
    schema: gqlSchema,
    graphiql: true
  })
);

app.get('/', require('./help-page'));

cookieRouter.addToRestify(app, '/legacy');
bearerRouter.addToRestify(app, '/v2');

app.listen(4000, () => console.log(`Uke Api Listening on 4000`));
