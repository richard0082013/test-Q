const { ApolloServer, gql } = require("apollo-server");
const { faqs, homepage } = require("./data");

const typeDefs = gql`
  type Homepage {
    heading: String
    subheading: String
    heroImageUrl: String
  }

  type Faq {
    title: String
    body: String
  }

  type Query {
    faqs: [Faq]
    homepage: Homepage
  }
`;
const resolvers = {
  Query: {
    faqs: () => faqs,
    homepage: () => homepage
  }
};
const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
