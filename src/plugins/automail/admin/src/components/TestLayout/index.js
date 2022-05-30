'use strict';

import { Box } from '@strapi/design-system/Box';
import { Button } from '@strapi/design-system/Button';
import { ContentLayout, HeaderLayout, Layout } from '@strapi/design-system/Layout';
import { Plus } from '@strapi/icons';
import React, { useState } from "react";
import EmailModal from '../EmailModel';
import MailTable from '../MailTable';
import SideNav from '../SideNav';
import { EmptyStateLayout } from '@strapi/design-system/EmptyStateLayout';
import { Illo } from '../Illo';

const TestLayOut = () => {
  const [emailData, setEmailData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  async function addEmail(data) {
    setEmailData([...emailData, { ...data, id: nanoid(), isDone: false }]);
  }

  return <Box background="neutral100">
          <Layout sideNav={<SideNav />}>
            <>
              <HeaderLayout primaryAction={<Button onClick={() => setShowModal(true)} startIcon={<Plus />}>Create an email</Button>} title="Email" subtitle="36 entries found" as="h2" />

              <ContentLayout>
                {
                  emailData.length === 0 ? (
                    <EmptyStateLayout
                      icon={<Illo />}
                      content="You don't have any email yet..."
                      action={
                        <Button
                          onClick={() => setShowModal(true)}
                          variant="secondary"
                          startIcon={<Plus />}
                        >
                          Create your first email
                        </Button>
                        
                      }
                    />
                  ) : (
                    <MailTable />
                  )
                }
              </ContentLayout>
              {showModal && <EmailModal setShowModal={setShowModal} addEmail={addEmail} />}
            </>
          </Layout>
        </Box>;
};

export default TestLayOut;