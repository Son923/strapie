import React, { useState, useEffect } from 'react';
import { SettingsPageTitle, auth } from '@strapi/helper-plugin';
import Refresh from '@strapi/icons/Refresh';
import { Box } from '@strapi/design-system/Box';
import { Button } from '@strapi/design-system/Button';
import { Grid, GridItem } from '@strapi/design-system/Grid';
import { HeaderLayout, ContentLayout } from '@strapi/design-system/Layout';
import { Main } from '@strapi/design-system/Main';
import { TextInput } from '@strapi/design-system/TextInput';
import { Typography } from '@strapi/design-system/Typography';
import { Link } from '@strapi/design-system/Link';
import { Flex } from '@strapi/design-system/Flex';
import { Loader } from '@strapi/design-system/Loader';
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
          {/* <Box>
            <Grid gap={5}>
              <GridItem col={6} s={12}>
                <Box paddingTop={5} paddingBottom={2}>
                  <TextInput
                    name="url"
                    label="BigBlueButton URL"
                    value={url}
                    error={errorUrl || ''}
                    onChange={handleChangeUrl}
                  />
                </Box>
              </GridItem>
              <GridItem col={6} s={12}>
                <Box paddingTop={5} paddingBottom={2}>
                  <TextInput
                    name="secret"
                    label="BigBlueButton Secret"
                    value={secret}
                    error={errorSecret || ''}
                    onChange={handleChangeSecret}
                  />
                </Box>
              </GridItem>
            </Grid>

            <Grid gap={5}>
              <GridItem col={9} s={11}>
                <Box paddingTop={5}>
                  {error ? <Typography textColor="danger500">{error}</Typography> : ''}
                  {isCorrectUrl ? (
                    <Typography textColor="success500">Connection Verified</Typography>
                  ) : (
                    ''
                  )}
                  {isSubmitting ? (
                    <Flex>
                      <Loader small>Loading content...</Loader>&nbsp;
                      <Typography textColor="primary600">Verifying Connection</Typography>
                    </Flex>
                  ) : (
                    ''
                  )}
                </Box>
              </GridItem>
              <GridItem col={3} s={2}>
                <Flex justifyContent="end" paddingTop={4}>
                  <Button
                    type="submit"
                    loading={isSubmitting}
                    onClick={handleSubmit}
                    startIcon={<Check />}
                    size="L"
                  >
                    Save
                  </Button>
                </Flex>
              </GridItem>
            </Grid>
          </Box> */}
        </Box>
        <br />
        {/* <Box
          shadow="tableShadow"
          background="neutral0"
          paddingTop={6}
          paddingLeft={7}
          paddingRight={7}
          paddingBottom={6}
          hasRadius
        >
          <Box paddingTop={2}>
            <Grid gap={4}>
              <GridItem col={6} s={12}>
                <Link href="https://higheredlab.com/" isExternal>
                  Start Free Trial of BigBlueButton
                </Link>
              </GridItem>
              <GridItem col={6} s={12}>
                <Typography variant="pi">
                  Need help? Contact us at : support@higheredlab.com
                </Typography>
              </GridItem>
            </Grid>
          </Box>
        </Box> */}

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