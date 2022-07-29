import React, { useState, useEffect } from 'react';
import { SettingsPageTitle, auth } from '@strapi/helper-plugin';
import Refresh from '@strapi/icons/Refresh';
import { Box } from '@strapi/design-system/Box';
import { Button } from '@strapi/design-system/Button';
import { HeaderLayout, ContentLayout } from '@strapi/design-system/Layout';
import { Main } from '@strapi/design-system/Main';
import { Typography } from '@strapi/design-system/Typography';
import { Alert } from '@strapi/design-system/Alert';
import channelRequest from '../../api/channel';

const Settings = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [channelData, setChannelData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const channels = await channelRequest.getAllChannels();
    setChannelData(channels);
    console.log(channels);
  }

  useEffect(() => {
    // fetchData();
  }, [])

  return (
    <Main>
      <SettingsPageTitle name="Update channels" />
      <HeaderLayout title="Update Channels" primaryAction="" />
      <ContentLayout>
        <Box paddingBottom={2}>
          {showAlert ? (
            <Alert
              closeLabel="Close alert"
              title="Update Channels"
              variant="success"
              onClose={() => {
                setShowAlert(false);
              }}
            >
              Update successfully.
            </Alert>
          ) : (
            ''
          )}
        </Box>
        <Box
          shadow="tableShadow"
          background="neutral0"
          paddingTop={6}
          paddingLeft={7}
          paddingRight={7}
          paddingBottom={6}
          hasRadius
        >
          <Box>
            <Typography variant="delta">Configuration</Typography>
          </Box>
          <Box paddingBottom={2} paddingTop={1}>
            <Typography variant="omega">
              You can test with the default update button. Later on, you can provide
              your own scheduled updates.
            </Typography>
          </Box>
        </Box>
        <br />

        <Box>
            <Button startIcon={<Refresh />} onClick={fetchData}>
                UPdaTe
            </Button>
        </Box>
      </ContentLayout>
    </Main>
  );
};

export default Settings;