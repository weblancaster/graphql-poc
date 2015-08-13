import {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLList,
	GraphQLString,
} from 'graphql';

export const PersonType = new GraphQLObjectType({
	name: 'Person',
	description: 'Describe a Person',
	fields: () => ({
		name: {
			type: GraphQLString,
			description: 'Person name'
		},
		age: {
			type: GraphQLInt,
			description: 'Person age'
		},
		address: {
			street: {
				type: GraphQLString,
				description: 'Describe person address 1'
			},
			city: {
				type: GraphQLString,
				description: 'Describe person address 2'
			}
		}
	})
});