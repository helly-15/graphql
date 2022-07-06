import {ApolloServer} from "apollo-server";
import {typeDefs} from './schema.js';

const mocks = {
    Query: () => ({
        tracks: () => [...new Array(6)],
        genres: () => [...new Array(6)]
    }),
    Track: () => ({
        id: () => 'track_01',
        title: () => 'Astro Kitty, Space Explorer',
    }),
    Genre: () => ({
        id: () => 'genre_01',
        name: () => 'Genrih',
    })
};


const server = new ApolloServer({typeDefs,
    mocks});
server.listen().then(() => {
    console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});