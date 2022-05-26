'use strict';

import { Box } from '@strapi/design-system/Box';
import { Button } from '@strapi/design-system/Button';
import { ContentLayout, HeaderLayout, Layout } from '@strapi/design-system/Layout';
import { Plus } from '@strapi/icons';
import React from 'react';
import EmailModal from '../EmailModel';
import MailTable from '../MailTable';
import SideNav from '../SideNav';


const TestLayOut = () => {

  return <Box background="neutral100">
          <Layout sideNav={<SideNav />}>
            <>
              <HeaderLayout primaryAction={<Button startIcon={<Plus />}>Add an entry</Button>} title="Email" subtitle="36 entries found" as="h2" />

              <ContentLayout>
                <MailTable />
              </ContentLayout>
              {showModal && <TodoModal setShowModal={setShowModal} addTodo={addTodo} />}
            </>
          </Layout>
        </Box>;
};

export default TestLayOut;