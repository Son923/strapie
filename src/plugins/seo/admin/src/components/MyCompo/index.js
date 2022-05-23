import React from 'react';

import { Box } from '@strapi/design-system/Box';
import { Button } from '@strapi/design-system/Button';
import { Divider } from '@strapi/design-system/Divider';
import { Typography } from '@strapi/design-system/Typography';

import Eye from '@strapi/icons/Eye';

import { useCMEditViewDataManager } from '@strapi/helper-plugin';

const SeoChecker = () => {
  const { modifiedData } = useCMEditViewDataManager();
  console.log('Current data:', modifiedData);

  return (
    <Box
      as="aside"
      aria-labelledby="additional-informations"
      background="neutral0"
      borderColor="neutral150"
      hasRadius
      paddingBottom={4}
      paddingLeft={4}
      paddingRight={4}
      paddingTop={6}
      shadow="tableShadow"
    >
      <Box>
        <Typography variant="sigma" textColor="neutral600" id="seo">
          SEO Plugin
        </Typography>
        <Box paddingTop={2} paddingBottom={6}>
          <Divider />
        </Box>
        <Box paddingTop={1}>
          <Button
            fullWidth
            variant="secondary"
            startIcon={<Eye />}
            onClick={() =>
              console.log('Strapi is hiring: https://strapi.io/careers')
            }
          >
            One button
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SeoChecker;