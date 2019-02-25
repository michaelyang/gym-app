const bcrypt = require("bcryptjs");

const resolvers = {
  Query: {
    currentUser(parent, args, ctx, info) {
      return ctx.db.query.user(
        { where: { id: "cjsjwl3zi4bgx0b86eo2yrofa" } },
        info
      );
    }
  },
  Mutation: {
    async register(parents, args, ctx, info) {
      const { name, email, password } = args;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await ctx.db.mutation.createUser(
        {
          data: {
            name,
            email,
            password: hashedPassword
          }
        },
        info
      );
      return user;
    }
  }
};

module.exports = resolvers;
