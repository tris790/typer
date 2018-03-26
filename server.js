const fastify = require("fastify");
const next = require("next");
const cheerio = require("cheerio");
const { join } = require("path");
const { parse } = require("url");
const fetch = require("isomorphic-unfetch");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const RANDOM_ARTICLE_URL = "https://en.wikipedia.org/wiki/Special:Random";

const articles = [];
const notes = { body: "bla bla" };

const getRandomArticle = async () => {
    return fetch(RANDOM_ARTICLE_URL)
        .then(x => x.text())
        .then(html => {
            const wiki = cheerio.load(html);
            const title = wiki("#firstHeading").text();
            const content = wiki("#mw-content-text p").text();

            const article = {
                content,
                title,
                url: ""
            };
            return article;
        })
        .catch(e => console.log(e));
};

const run = async () => {
    await app.prepare();

    const server = fastify();

    server.get("/notes", (req, reply) => {
        reply.send(notes);
    });

    server.get("/random", async (req, reply) => {
        if (articles.length < 5) {
            const article = await getRandomArticle();
            articles.push(article);
        }

        const current = articles[Math.floor(Math.random() * articles.length)];

        reply.send(current);
    });

    server.get("*", ({ req }, { res }) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
};

run();
