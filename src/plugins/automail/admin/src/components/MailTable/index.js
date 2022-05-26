'use strict';

import React, { memo, useState } from 'react';
import { Table, Tbody, Td, Th, Thead, Tr } from '@strapi/design-system/Table';
import { Typography } from '@strapi/design-system/Typography';
import { IconButton } from '@strapi/design-system/IconButton';
import { BaseCheckbox } from '@strapi/design-system/BaseCheckbox';
import { Avatar } from '@strapi/design-system/Avatar';
import { Flex } from '@strapi/design-system/Flex';
import { Pencil, Trash } from '@strapi/icons';
import { Box } from '@strapi/design-system/Box';
const MailTable = () => {
    const ROW_COUNT = 6;
    const COL_COUNT = 10;
    const entry = {
        cover: 'https://avatars.githubusercontent.com/u/3874873?v=4',
        description: 'Chez Léon is a human sized Parisian',
        category: 'French cuisine',
        contact: 'Leon Lafrite'
      };
      const entries = [];
    
      for (let i = 0; i < 5; i++) {
        entries.push({ ...entry,
          id: i
        });
    };

    return <Table colCount={COL_COUNT} rowCount={ROW_COUNT}>
    <Thead>
      <Tr>
        <Th>
          <BaseCheckbox aria-label="Select all entries" />
        </Th>
        <Th>
          <Typography variant="sigma">ID</Typography>
        </Th>
        <Th>
          <Typography variant="sigma">Recipient</Typography>
        </Th>
        <Th>
          <Typography variant="sigma">Subject</Typography>
        </Th>
        <Th>
          <Typography variant="sigma">Categories</Typography>
        </Th>
        <Th>
          <Typography variant="sigma">Contact</Typography>
        </Th>
        <Th>More</Th>
      </Tr>
    </Thead>
    <Tbody>
      {entries.map(entry => <Tr key={entry.id}>
          <Td>
            <BaseCheckbox aria-label={`Select ${entry.contact}`} />
          </Td>
          <Td>
            <Typography textColor="neutral800">{entry.id}</Typography>
          </Td>
          <Td>
            <Avatar src={entry.cover} alt={entry.contact} />
          </Td>
          <Td>
            <Typography textColor="neutral800">{entry.description}</Typography>
          </Td>
          <Td>
            <Typography textColor="neutral800">{entry.category}</Typography>
          </Td>
          <Td>
            <Typography textColor="neutral800">{entry.contact}</Typography>
          </Td>

          <Td>
            <Flex>
              <IconButton onClick={() => console.log('edit')} label="Edit" icon={<Pencil />} />
              <Box paddingLeft={1}>
                <IconButton onClick={() => console.log('edit')} label="Delete" icon={<Trash />} />
              </Box>
            </Flex>
          </Td>
        </Tr>)}
    </Tbody>
  </Table>;
};

export default MailTable;