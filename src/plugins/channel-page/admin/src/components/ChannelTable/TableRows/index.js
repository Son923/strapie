import { BaseCheckbox } from '@strapi/design-system/BaseCheckbox';
import { Box } from '@strapi/design-system/Box';
import { Flex } from '@strapi/design-system/Flex';
import { IconButton } from '@strapi/design-system/IconButton';
import Pencil from '@strapi/icons/Pencil';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { BaseLink } from '@strapi/design-system/BaseLink';
import { Typography } from '@strapi/design-system/Typography';
import { Tbody, Td, Th, Thead, Tr } from '@strapi/design-system/Table';


import ExternalLink from '@strapi/icons/ExternalLink';

const TableRows = ({

  checkedItems,
  setCheckedItems,
  onSelectRow,
  rows,
}) => {
  const channels = rows
  
  let allChecked = checkedItems.length===rows.length
  const isIndeterminate = (checkedItems.length > 0) && !allChecked;


  return (
    <>
    <Thead>
      <Tr>
        <Th>
          <BaseCheckbox 
            id="parent-checkbox"
            aria-label="Select all entries" 
            indeterminate={isIndeterminate}
            value={allChecked}
            onValueChange={value => {
                allChecked=value
                if (value===false) {
                  // setCheckedItems([])
                  setCheckedItems(checkedItems => [...checkedItems.filter((id) => !checkedItems.includes(id))])

                }
                if (value===true) {
                  let fullCheckedItems = rows.map(row => row.id);
                  setCheckedItems(fullCheckedItems)
                }
                
              }
            }
          />
        </Th>
        <Th>
          <Typography variant="sigma">Channel Name</Typography>          
        </Th>
        <Th>
          <Typography variant="sigma">Category</Typography>
        </Th>
        <Th>
          <Typography variant="sigma">Avg View</Typography>
        </Th>
        <Th>
          <Typography variant="sigma">Country</Typography>
        </Th>
        <Th>
          <Typography variant="sigma">Subscriber count</Typography>
        </Th>
        <Th>
          <Typography variant="sigma">Last Upload</Typography>
        </Th>
        <Th>
          <Typography variant="sigma">Created At</Typography>
        </Th>
        <Th>
          <Typography variant="sigma">Created By</Typography>
        </Th>
      </Tr>
    </Thead>
    <Tbody>
      {channels.map(entry => {
        let isChecked = checkedItems.findIndex((id) => id === entry.id) !== -1
        return (
        <Tr key={entry.id}>  
          <Td>
            <BaseCheckbox 
              aria-label={`Select ${entry.channelID}`}
              value={isChecked}
              onValueChange={value => {
                if ( value===true && !checkedItems.includes(entry.id) ) {
                  setCheckedItems(checkedItems => [...checkedItems, entry.id]);
                }

                if ( value===false && checkedItems.includes(entry.id)) {
                  setCheckedItems(checkedItems => [...checkedItems.filter((id) => id !== entry.id)])
                }
              }}
            />
          </Td>
          <Td>
            <BaseLink href={entry.channelLink} isExternal>
              <Typography textColor="neutral800">{entry.channelName}</Typography>
            </BaseLink>
          </Td>
          <Td>
            <Box maxWidth="120px">
              <Typography ellipsis>{entry.category}</Typography>
            </Box>
          </Td>
          <Td>
            <Typography textColor="neutral800">{entry.averageViews}</Typography>
          </Td>
          <Td>
            <Typography textColor="neutral800">{entry.country}</Typography>
          </Td>

          <Td>
            <Box maxWidth="120px">
              <Typography ellipsis>{entry.subscriberCount}</Typography>
            </Box>
          </Td>
          <Td>
            <Box maxWidth="150px">
              <Typography ellipsis>{entry.lastUpload}</Typography>
            </Box>
          </Td>
          <Td>
            <Box maxWidth="150px">
              <Typography ellipsis>{entry.createdAt}</Typography>
            </Box>
          </Td>
          <Td>
            <Box maxWidth="150px">
              <Typography ellipsis>{`${entry.createdBy.firstname} ${entry.createdBy.lastname}`}</Typography>
            </Box>
          </Td>
          

          <Td>
            <Flex>
              <IconButton onClick={() => console.log('edit')} label="Edit" noBorder icon={<Pencil />} />
              <Box paddingLeft={1}>
                <IconButton onClick={() => window.open(entry.channelLink,'_blank')} label="View on Youtube" noBorder icon={<ExternalLink />} />
              </Box>
            </Flex>
          </Td>
        </Tr>)}
        )
      }
        
    </Tbody>
    </>
  );
};

TableRows.defaultProps = {

  checkedItems: [],
  onSelectRow() {},
  rows: [],
};

TableRows.propTypes = {
  checkedItems: PropTypes.array,
  onSelectRow: PropTypes.func,
  rows: PropTypes.array,
};

export default TableRows;
