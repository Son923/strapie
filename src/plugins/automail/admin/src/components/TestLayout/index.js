'use strict';

import { Avatar } from '@strapi/design-system/Avatar';
import { BaseCheckbox } from '@strapi/design-system/BaseCheckbox';
import { Box } from '@strapi/design-system/Box';
import { Button } from '@strapi/design-system/Button';
import { Flex } from '@strapi/design-system/Flex';
import { IconButton } from '@strapi/design-system/IconButton';
import { ActionLayout, ContentLayout, HeaderLayout, Layout } from '@strapi/design-system/Layout';
import {
  SubNav,
  SubNavHeader, SubNavLink,
  SubNavLinkSection, SubNavSection,
  SubNavSections
} from '@strapi/design-system/SubNav';
import { Table, Tbody, Td, TFooter, Th, Thead, Tr } from '@strapi/design-system/Table';
import { Tag } from '@strapi/design-system/Tag';
import { Typography } from '@strapi/design-system/Typography';
import { Apps, ExclamationMarkCircle, Pencil, Plus, Trash } from '@strapi/icons';
import SideNav from '../SideNav';
import React from 'react';

const TestLayOut = () => {
  const links = [{
    id: 1,
    label: 'Schedule',
    icon: <ExclamationMarkCircle />,
    to: '/address'
  }, {
    id: 2,
    label: 'Sent',
    to: '/category'
  }, {
    id: 3,
    label: 'Draft',
    icon: <Apps />,
    to: '/city',
    active: true
  }, {
    id: 4,
    label: 'trash',
    to: '/country'
  },{
    id: 5,
    label: 'Follow-up',
    to: '/country'
  }];
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
  }

  return <Box background="neutral100">
          <Layout sideNav={<SideNav />}>
            <>
              <HeaderLayout primaryAction={<Button startIcon={<Plus />}>Add an entry</Button>} title="Email" subtitle="36 entries found" as="h2" />

              <ContentLayout>
                <Table colCount={COL_COUNT} rowCount={ROW_COUNT}>
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
                </Table>
              </ContentLayout>
            </>
          </Layout>
        </Box>;
};

export default TestLayOut;