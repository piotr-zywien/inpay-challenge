import React from 'react';

import StepsWrapper, { StepsShape } from 'components/steps';

import detailsSchema from './detailsSchema';
import DetailsShape from './DetailsShape';


const Details: React.FC<StepsShape> = ({ index }) => (
  <StepsWrapper
    index={index}
    schema={detailsSchema}
    shape={DetailsShape}
    inits={{
      'name': {
        label: 'Company',
        initial: '',
      },
      'country': {
        label: 'Country',
        initial: '',
      },
      'address': {
        label: 'Address',
        initial: '',
      },
      'apartment': {
        label: 'Apartment, suite, etc.',
        initial: '',
      },
      'postCode': {
        label: 'Postal code/zip',
        initial: '',
      },
      'city': {
        label: 'City',
        initial: '',
      },
      'website': {
        label: 'Website',
        initial: '',
      },
      'registration': {
        label: 'Company registration from official register',
        initial: '',
      },
    }}
  />
);

export default Details;
