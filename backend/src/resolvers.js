const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
    },
    async login(parents, args, ctx, info) {
      const { email, password } = args;
      const user = await ctx.db.query.user({ where: { email } });
      if (!user) {
        throw new Error("No user with that email.");
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw new Error("Incorrect password.");
      }
      const token = jwt.sign(
        {
          id: user.id,
          username: user.email
        },
        process.env.APP_SECRET,
        {
          expiresIn: "30d"
        }
      );
      return {
        token,
        user
      };
    }
  }
};

module.exports = resolvers;
