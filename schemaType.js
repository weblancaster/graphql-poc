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
		fname: {
			type: GraphQLString,
			description: 'Person first name'
		},
		lname: {
			type: GraphQLString,
			description: 'Person last name'
		},
		age: {
			type: GraphQLInt,
			description: 'Person age'
		},
		address: {
			streetAddres: {
				type: GraphQLString
			},
			city: {
				type: GraphQLString
			},
			zip: {
				type: GraphQLString
			}
		}
	})
});