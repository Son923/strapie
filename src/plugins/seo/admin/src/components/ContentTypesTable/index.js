/*
 *
 * HomePage
 *
 */

import { Box } from '@strapi/design-system/Box';
import { EmptyStateLayout } from '@strapi/design-system/EmptyStateLayout';
import { Flex } from '@strapi/design-system/Flex';
import { LinkButton } from '@strapi/design-system/LinkButton';
import { Table, Tbody, Td, Th, Thead, Tr } from '@strapi/design-system/Table';
import {
  Tab,
  TabGroup, TabPanel, TabPanels, Tabs
} from '@strapi/design-system/Tabs';
import { Typography } from '@strapi/design-system/Typography';
import { Plus, Puzzle } from '@strapi/icons';
import React from 'react';

const ContentTypesTable = ({ contentTypes }) => {
  return (
    <Box padding={8}>
      <TabGroup label="label" id="tabs">
        <Tabs>
          <Tab>
            <Typography variant="omega"> Collection Types</Typography>
          </Tab>
          <Tab>
            <Typography variant="omega"> Single Types</Typography>
          </Tab>
        </Tabs>
        <TabPanels>
          <TabPanel>
            {/* TABLE */}
            <Table colCount={2} rowCount={contentTypes.collectionTypes.length}>
              <Thead>
                <Tr>
                  <Th>
                    <Typography variant="sigma">Name</Typography>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {contentTypes &&
                contentTypes.collectionTypes &&
                !_.isEmpty(contentTypes.collectionTypes) ? (
                  contentTypes.collectionTypes.map((item) => (
                    <Tr key={item.uid}>
                      <Td>
                        <Typography textColor="neutral800">
                          {item.globalId}
                        </Typography>
                      </Td>
                      <Td>
                        <Flex justifyContent="right" alignItems="right">
                          <LinkButton>Link</LinkButton>
                        </Flex>
                      </Td>
                    </Tr>
                  ))
                ) : (
                  <Box padding={8} background="neutral0">
                    <EmptyStateLayout
                      icon={<Puzzle />}
                      content="You don't have any collection-types yet..."
                      action={
                        <LinkButton
                          to="/plugins/content-type-builder"
                          variant="secondary"
                          startIcon={<Plus />}
                        >
                          {"Create your first collection-type"}
                        </LinkButton>
                      }
                    />
                  </Box>
                )}
              </Tbody>
            </Table>

            {/* END TABLE */}
          </TabPanel>
          <TabPanel>
            {/* TABLE */}
            <Table colCount={2} rowCount={contentTypes.singleTypes.length}>
              <Thead>
                <Tr>
                  <Th>
                    <Typography variant="sigma">Name</Typography>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {contentTypes &&
                contentTypes.singleTypes &&
                !_.isEmpty(contentTypes.singleTypes) ? (
                  contentTypes.singleTypes.map((item) => (
                    <Tr key={item.uid}>
                      <Td>
                        <Typography textColor="neutral800">
                          {item.globalId}
                        </Typography>
                      </Td>
                      <Td>
                        <Flex justifyContent="right" alignItems="right">
                          <LinkButton>Link</LinkButton>
                        </Flex>
                      </Td>
                    </Tr>
                  ))
                ) : (
                  <Box padding={8} background="neutral0">
                    <EmptyStateLayout
                      icon={<Puzzle />}
                      content="You don't have any single-types yet..."
                      action={
                        <LinkButton
                          to="/plugins/content-type-builder"
                          variant="secondary"
                          startIcon={<Plus />}
                        >
                          {"You don't have any single-types yet..."}
                        </LinkButton>
                      }
                    />
                  </Box>
                )}
              </Tbody>
            </Table>

            {/* END TABLE */}
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Box>
  );
};

export default ContentTypesTable;