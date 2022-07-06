import {gql} from'apollo-server';

export const typeDefs = gql`
    # Schema definitions go here
    type Track {
        id: ID!
        title: String!
#        albums: [Album]
#        bands: [Band]
        duration: Int
        released: Int
        genres: [Genre]
        
    }
    type Genre {
        id: ID!
        name: String
        description: String
        country: String
        year: Int
    }
    type Query {
        tracks(limit: Int, offset: Int):[Track]
        track(id:ID!): Track
#        users(limit: Int, offset: Int):[User]
#        user(id:ID!): User
#        favourites (limit: Int, offset: Int):[Favourites]
#        favourite(id:ID!): Favourites
#        bands (limit: Int, offset: Int):[Band]
#        band(id:ID!): Band
#        artists (limit: Int, offset: Int):[Artist]
#        artist(id:ID!): Artist
#        albums (limit: Int, offset: Int):[Album]
#        album(id:ID!): Album
        genres (limit: Int, offset: Int):[Genre]
        genre(id:ID!): Genre
    }
#    type Mutation {
#        createGenre( name:String, description: String, country: String, year: Int): Genre
#    }
`;