import type { Schema, Struct } from '@strapi/strapi';

export interface DiscoverroomsList extends Struct.ComponentSchema {
  collectionName: 'components_discoverrooms_lists';
  info: {
    description: '';
    displayName: 'list';
  };
  attributes: {
    city: Schema.Attribute.String;
    cover: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    pic: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    price: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'discoverrooms.list': DiscoverroomsList;
    }
  }
}
