const { Prisma } = require("prisma-binding");
const { GraphQLResolveInfo } = require("graphql");

const typeDefs = `
type AggregatePost {
  count: Int!
}

type BatchPayload {
  """
  The number of nodes that have been affected by the Batch operation.
  """
  count: Long!
}

"""
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""
An object with an ID
"""
interface Node {
  """
  The id of the object.
  """
  id: ID!
}

"""
Information about pagination in a connection.
"""
type PageInfo {
  """
  When paginating forwards, are there more items?
  """
  hasNextPage: Boolean!
  """
  When paginating backwards, are there more items?
  """
  hasPreviousPage: Boolean!
  """
  When paginating backwards, the cursor to continue.
  """
  startCursor: String
  """
  When paginating forwards, the cursor to continue.
  """
  endCursor: String
}

type Post implements Node {
  id: ID!
  isPublished: Boolean!
  title: String!
  text: String!
}

"""
A connection to a list of items.
"""
type PostConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  isPublished: Boolean!
  title: String!
  text: String!
}

"""
An edge in a connection.
"""
type PostEdge {
  """
  The item at the end of the edge.
  """
  node: Post!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  isPublished_ASC
  isPublished_DESC
  title_ASC
  title_DESC
  text_ASC
  text_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PostPreviousValues {
  id: ID!
  isPublished: Boolean!
  title: String!
  text: String!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [PostSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [PostSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [PostSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PostWhereInput
}

input PostUpdateInput {
  isPublished: Boolean
  title: String
  text: String
}

input PostWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [PostWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [PostWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [PostWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  isPublished: Boolean
  """
  All values that are not equal to given value.
  """
  isPublished_not: Boolean
  title: String
  """
  All values that are not equal to given value.
  """
  title_not: String
  """
  All values that are contained in given list.
  """
  title_in: [String!]
  """
  All values that are not contained in given list.
  """
  title_not_in: [String!]
  """
  All values less than the given value.
  """
  title_lt: String
  """
  All values less than or equal the given value.
  """
  title_lte: String
  """
  All values greater than the given value.
  """
  title_gt: String
  """
  All values greater than or equal the given value.
  """
  title_gte: String
  """
  All values containing the given string.
  """
  title_contains: String
  """
  All values not containing the given string.
  """
  title_not_contains: String
  """
  All values starting with the given string.
  """
  title_starts_with: String
  """
  All values not starting with the given string.
  """
  title_not_starts_with: String
  """
  All values ending with the given string.
  """
  title_ends_with: String
  """
  All values not ending with the given string.
  """
  title_not_ends_with: String
  text: String
  """
  All values that are not equal to given value.
  """
  text_not: String
  """
  All values that are contained in given list.
  """
  text_in: [String!]
  """
  All values that are not contained in given list.
  """
  text_not_in: [String!]
  """
  All values less than the given value.
  """
  text_lt: String
  """
  All values less than or equal the given value.
  """
  text_lte: String
  """
  All values greater than the given value.
  """
  text_gt: String
  """
  All values greater than or equal the given value.
  """
  text_gte: String
  """
  All values containing the given string.
  """
  text_contains: String
  """
  All values not containing the given string.
  """
  text_not_contains: String
  """
  All values starting with the given string.
  """
  text_starts_with: String
  """
  All values not starting with the given string.
  """
  text_not_starts_with: String
  """
  All values ending with the given string.
  """
  text_ends_with: String
  """
  All values not ending with the given string.
  """
  text_not_ends_with: String
}

input PostWhereUniqueInput {
  id: ID
}

type Mutation {
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  deletePost(where: PostWhereUniqueInput!): Post
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput): BatchPayload!
  deleteManyPosts(where: PostWhereInput): BatchPayload!
}

type Query {
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  post(where: PostWhereUniqueInput!): Post
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  """
  Fetches an object given its ID
  """
  node("""
  The ID of an object
  """
  id: ID!): Node
}

type Subscription {
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
}
`;

module.exports.Prisma = class Binding extends Prisma {
  constructor({ endpoint, secret, fragmentReplacements, debug }) {
    super({ typeDefs, endpoint, secret, fragmentReplacements, debug });

    var self = this;
    this.exists = {
      Post(where) {
        return super.existsDelegate("query", "posts", { where }, {}, "{ id }");
      }
    };

    this.query = {
      posts(args, info) {
        return self.delegate("query", "posts", args, {}, info);
      },
      post(args, info) {
        return self.delegate("query", "post", args, {}, info);
      },
      postsConnection(args, info) {
        return self.delegate("query", "postsConnection", args, {}, info);
      },
      node(args, info) {
        return self.delegate("query", "node", args, {}, info);
      }
    };

    this.mutation = {
      createPost(args, info) {
        return self.delegate("mutation", "createPost", args, {}, info);
      },
      updatePost(args, info) {
        return self.delegate("mutation", "updatePost", args, {}, info);
      },
      deletePost(args, info) {
        return self.delegate("mutation", "deletePost", args, {}, info);
      },
      upsertPost(args, info) {
        return self.delegate("mutation", "upsertPost", args, {}, info);
      },
      updateManyPosts(args, info) {
        return self.delegate("mutation", "updateManyPosts", args, {}, info);
      },
      deleteManyPosts(args, info) {
        return self.delegate("mutation", "deleteManyPosts", args, {}, info);
      }
    };

    this.subscription = {
      post(args, infoOrQuery) {
        return self.delegateSubscription("post", args, {}, infoOrQuery);
      }
    };
  }

  delegate(operation, field, args, context, info) {
    return super.delegate(operation, field, args, context, info);
  }
};
