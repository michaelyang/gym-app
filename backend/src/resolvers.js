const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { forwardTo } = require("prisma-binding");

const resolvers = {
    Query: {
        currentUser(parent, args, ctx, info) {
            const { db } = ctx;
            const { user } = ctx.req;
            if (!user) {
                return null;
            }
            return user;
        },
        workouts: forwardTo("db")
    },
    Mutation: {
        async register(parents, args, ctx, info) {
            const { email, password, name } = args;
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await ctx.db.mutation.createUser({
                data: {
                    email,
                    password: hashedPassword,
                    name
                }
            });
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
        },
        logout(parents, args, ctx, info) {
            ctx.res.clearCookie("token");
            return { message: "Successfully logged out" };
        },
        async createWorkout(parents, args, ctx, info) {
            //if (!ctx.req.user) {
            //    throw new Error("Please log in first");
            //}
            const workout = await ctx.db.mutation.createWorkout({
                data: {
                    ...args
                }
            });
            return workout;
        }
    }
};

module.exports = resolvers;
