import React from 'react';

import StepsWrapper, { StepsShape } from 'components/steps';

import ownersSchema from './ownersSchema';
import OwnersShape from './OwnersShape';


const Owners: React.FC<StepsShape> = ({ index }) => (
  <StepsWrapper
    index={index}
    schema={ownersSchema}
    shape={OwnersShape}
    lines={[
      'Who is the Ultimate Beneficial Owner(s)?',
      'UBO of a legal entity are the natural persons who directly or indirectly hold or control the stake of at least 25% in the capital or at least 25% of the voting rights of the company.',
      'Details on the person(s) acting as representative(s) (the undersigned)',
    ]}
    inits={{
      'name': {
        label: 'Full name',
        initial: '',
      },
      'role': {
        label: 'Role',
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
      'email': {
        label: 'Email',
        initial: '',
      },
    }}
  />
);

export default Owners;
