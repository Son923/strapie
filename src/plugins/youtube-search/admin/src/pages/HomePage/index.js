/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import { BaseHeaderLayout, HeaderLayout } from '@strapi/design-system/Layout';
import { Box } from '@strapi/design-system/Box';
import { Button } from '@strapi/design-system/Button';
import { Plus } from '@strapi/icons';
import { TwoColsLayout } from '@strapi/design-system/Layout';
import { Typography } from '@strapi/design-system/Typography';
import LeftCol from '../../components/LeftCol';

const HomePage = () => {  
  return (
    <div>
      <Box background="neutral100">
        <BaseHeaderLayout primaryAction={<Button startIcon={<Plus />}>Search</Button>} title="Youtube Search" subtitle="Find a Channel ID and related channel information, like Channel owner, Channel start date, Subscriber Count, total views and total videos of any YouTube user."/>
      </Box>
      <Box padding={8} background="neutral100">
        <TwoColsLayout startCol={<LeftCol />} endCol={<Box padding={4}><Typography>Create channels</Typography></Box>} />
      </Box>
    </div>  
  );
};

export default memo(HomePage);
  