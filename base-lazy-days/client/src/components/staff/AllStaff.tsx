/* eslint-disable simple-import-sort/imports */
import { Box, HStack, Heading, Radio, RadioGroup } from '@chakra-ui/react';

import { ReactElement } from 'react';
import { Staff } from './Staff';
import { useStaff } from './hooks/useStaff';
import { useTreatments } from '../treatments/hooks/useTreatments';

export function AllStaff(): ReactElement {
  // replace with data from React Query
  const { staff, filter, setFilter } = useStaff();
  const treatments = useTreatments();

  return (
    <Box>
      <Heading mt={10} textAlign="center">
        Our Staff
      </Heading>
      <HStack m={10} spacing={8} justify="center">
        {staff.map((staffData) => (
          <Staff key={staffData.id} staffData={staffData} />
        ))}
      </HStack>
      <RadioGroup onChange={setFilter} value={filter}>
        <HStack my={10} spacing={8} justify="center">
          <Heading size="md">Filter by treatment:</Heading>
          <Radio value="all">All</Radio>
          {treatments.map((t) => (
            <Radio key={t.id} value={t.name}>
              {t.name}
            </Radio>
          ))}
        </HStack>
      </RadioGroup>
    </Box>
  );
}
