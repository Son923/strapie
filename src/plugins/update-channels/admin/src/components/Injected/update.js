import { Button } from '@strapi/design-system/Button';
import Refresh from '@strapi/icons/Refresh';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';

import getTrad from '../../utils/getTrad';

export const Update = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <Button startIcon={<Refresh />} onClick={''}>
        {formatMessage({ id: getTrad('plugin.cta.update') })}
      </Button>
    </>
  );
};