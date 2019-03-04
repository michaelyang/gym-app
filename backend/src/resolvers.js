const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const resolvers = {
    Query: {
        currentUser(parent, args, ctx, info) {
            const { db } = ctx;
            const { user } = ctx.req;
            if (!user) {
                return null;
            }
            return user;
        }
    },
    Mutation: {
        async register(parents, args, ctx, info) {
            const { email, password, name } = args;
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
            ctx.res.cookie("token", token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie
            });
            return user;
        }
    }
};

module.exports = resolvers;
