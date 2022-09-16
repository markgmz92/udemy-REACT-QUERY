/* eslint-disable simple-import-sort/imports */
import { Box, HStack, Heading } from '@chakra-ui/react';

import { ReactElement } from 'react';
import { Treatment } from './Treatment';
import { useTreatments } from './hooks/useTreatments';

export function Treatments(): ReactElement {
  // replace with data from React Query
  const treatments = useTreatments();
  return (
    <Box>
      <Heading mt={10} textAlign="center">
        Available Treatments
      </Heading>
      <HStack m={10} spacing={8} justify="center">
        {treatments.map((treatmentData) => (
          <Treatment key={treatmentData.id} treatmentData={treatmentData} />
        ))}
      </HStack>
    </Box>
  );
}
