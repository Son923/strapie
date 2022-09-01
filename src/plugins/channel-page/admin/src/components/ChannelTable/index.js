import React, { useEffect, useState } from 'react';

import { BaseCheckbox } from '@strapi/design-system/BaseCheckbox';
import { Box } from '@strapi/design-system/Box';
import { Flex } from '@strapi/design-system/Flex';
import { IconButton } from '@strapi/design-system/IconButton';
import { Table } from '@strapi/design-system/Table';
import { Typography } from '@strapi/design-system/Typography';
import { Pencil } from '@strapi/icons/';
import ExternalLink from '@strapi/icons/ExternalLink';
import axiosInstance from '../../utils/axiosInstance';
import { BaseLink } from '@strapi/design-system/BaseLink';
import TableRows from './TableRows';

const ChannelTable = ({
  channels,
  checkedItems,
  setCheckedItems
}) => {
  const ROW_COUNT = channels.length;
  const COL_COUNT = 10;  

  return <Box padding={2} background="neutral100">
  <Table colCount={COL_COUNT} rowCount={ROW_COUNT}>

    <TableRows rows={channels} checkedItems={checkedItems} setCheckedItems={setCheckedItems}/>
  </Table>
</Box>;
}

export default ChannelTable;  