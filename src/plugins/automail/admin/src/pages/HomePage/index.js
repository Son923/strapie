/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import { Box } from '@strapi/design-system/Box';
import { BaseHeaderLayout } from '@strapi/design-system/Layout';
import TestLayout from '../../components/TestLayout';
const HomePage = () => {
  return (
    <>
      <Box background="neutral100">
        <BaseHeaderLayout
          title="Auto Mail"
          subtitle="Automate sending your emails"
          as="h2"
        />
      </Box>

      <TestLayout />
    </>
  );
};

export default memo(HomePage);
