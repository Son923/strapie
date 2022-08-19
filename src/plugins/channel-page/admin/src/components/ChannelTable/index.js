import React, { useEffect, useState } from 'react';

import { BaseCheckbox } from '@strapi/design-system/BaseCheckbox';
import { Box } from '@strapi/design-system/Box';
import { Flex } from '@strapi/design-system/Flex';
import { IconButton } from '@strapi/design-system/IconButton';
import { Table, Tbody, Td, Th, Thead, Tr } from '@strapi/design-system/Table';
import { Typography } from '@strapi/design-system/Typography';
import { Pencil } from '@strapi/icons/';
import ExternalLink from '@strapi/icons/ExternalLink';
import axiosInstance from '../../utils/axiosInstance';

const ChannelTable = () => {
  const ROW_COUNT = 11;
  const COL_COUNT = 10;
  const entry = {
    channelID: '1',
    channelName: 'Chess Daily',
    channelLink: 'https://www.youtube.com/channel/UCW_SdSni4IOcm48QUMgLpRA',
    averageViews: '8934839',
    country: 'US',
    subscriberCount: '20',
    lastUpload:'2022-07-16',
    createdAt: '2022-07-16',
    createdBy: 'Son Nguyen',
    category: 'French cuisine',
  };
  const entries = [];
  const [channels, setChannels] = useState([]);
  
  for (let i = 0; i < 5; i++) {
    entries.push({ ...entry,
      id: i
    });
  }
  

  useEffect(() => {
    fetchChannels();
    
  }, [])

  const fetchChannels = async () => {
    try {
      const { data } = await axiosInstance.get(
        `/content-manager/collection-types/api::channel.channel?page=1&pageSize=10&sort=channelID:ASC`
        );
        setChannels(data.results);
      } catch (e) {
        console.log(e);
      }
      
    }
    
  console.log(channels)
  console.log(entries)

  return <Box padding={2} background="neutral100">
  <Table colCount={COL_COUNT} rowCount={ROW_COUNT}>
    <Thead>
      <Tr height={2}>
        <Th>
          <BaseCheckbox aria-label="Select all entries" />
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
      {channels.map(entry => <Tr key={entry.id}>
          <Td>
            <BaseCheckbox aria-label={`Select ${entry.channelID}`} />
          </Td>
          <Td>
            <Typography textColor="neutral800">{entry.channelName}</Typography>
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
          {/* <Td>
            <Box maxWidth="150px">
              <Typography ellipsis>{entry.createdBy}</Typography>
            </Box>
          </Td> */}
          

          <Td>
            <Flex>
              <IconButton onClick={() => console.log('edit')} label="Edit" noBorder icon={<Pencil />} />
              <Box paddingLeft={1}>
                <IconButton onClick={() => window.open(entry.channelLink,'_blank')} label="View on Youtube" noBorder icon={<ExternalLink />} />
              </Box>
            </Flex>
          </Td>
        </Tr>)}
    </Tbody>
  </Table>
</Box>;
}

export default ChannelTable;