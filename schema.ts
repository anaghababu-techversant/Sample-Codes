// schema.ts
import { gql } from 'apollo-server-express';

export const typeDefs = gql`
type Attribute {
    attr_bus_requirement: String
    attribute_description_en: String
    attribute_description_fr: String
    attribute_id: Int
    attribute_metadata_id: String
    attribute_repeatability: String
    attribute_status: String
    attribute_title_en: String
    attribute_title_fr: String
    attribute_version_number: String
    code_list_id: Int
    code_value_id: Int
    data_type: String
    is_dependent_attribute: Boolean
    is_latest_version: Boolean
    max_value: Int
    min_value: Int
    module_id: Int
    repeating_attribute: Boolean
    request_accepted_user: Int
    request_form_id: Int
    submodule_id: Int
  }

  type Query {
    attribute(id: Int!): Attribute
    attributes: [Attribute]
  }
`;

export const resolvers = {
    Query: {
      attribute: async (_: any, { id }: any, { prisma }: any) => {
        try {
          const attribute = await prisma.attribute.findUnique({
            where: { attribute_id: id },
          });          
          return attribute;
        } catch (error: any) { // Explicitly specify the type of 'error'
          throw new Error(`Failed to fetch attribute with ID ${id}: ${error.message}`);
        }
      },
      attributes: async (_: any, __: any, { prisma }: any) => {
        try {
          const allAttributes = await prisma.attribute.findMany();
          return allAttributes;
        } catch (error: any) { // Explicitly specify the type of 'error'
          throw new Error(`Failed to fetch all attributes: ${error.message}`);
        }
      },
    },
  };
  
  
  
  
  
