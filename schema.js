import {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLList,
	GraphQLString,
} from 'graphql';

import { PersonType } from './schemaType';
import { People } from './people';

let schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQueryType',
		fields: {
			people: {
				type: new GraphQLList(PersonType),
				resolve: () => People
			},
			count: {
				type: GraphQLInt,
				resolve: () => 20
			}
		}
	})
});

export default schema;