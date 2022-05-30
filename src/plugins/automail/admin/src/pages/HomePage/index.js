/*
 *
 * HomePage
 *
 */

import { Box } from '@strapi/design-system/Box';
import { Button } from '@strapi/design-system/Button';
import { EmptyStateLayout } from '@strapi/design-system/EmptyStateLayout';
import { BaseHeaderLayout, ContentLayout } from '@strapi/design-system/Layout';
import { Plus } from '@strapi/icons';
import React, { memo, useEffect, useState } from 'react';
import emailRequests from "../../api/email";
import EmailModal from '../../components/EmailModel';
import EmailTable from '../../components/EmailTable';
import { Illo } from '../../components/Illo';
const HomePage = () => {
  const [emailData, setEmailData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    if (isLoading === false) setIsLoading(true);
  
    const email = await emailRequests.getAllEmails();
    setEmailData(email);
    setIsLoading(false);
  };
  
  useEffect(async () => {
    await fetchData();
  }, []);
  
  async function addEmail(data) {
    await emailRequests.addEmail(data);
    await fetchData();
  }
  
  async function toggleEmail(data) {
    await emailRequests.toggleEmail(data.id);
  }
  
  async function deleteEmail(data) {
    await emailRequests.deleteEmail(data.id);
    await fetchData();
  }
  
  async function editEmail(id, data) {
    await emailRequests.editEmail(id, data);
    await fetchData();
  }

  return (
    <>
      <h1>
        {emailData}
      </h1>
      <Box background="neutral100">
        <BaseHeaderLayout
          title="Auto Mail"
          subtitle="Automate sending your emails"
          as="h2"
        />
      </Box>

      <h1>{emailData.length}</h1>      
      <ContentLayout>
        {emailData.length === 0 ? (
          <EmptyStateLayout
            icon={<Illo />}
            content="You don't have any todos yet..."
            action={
              <Button
                onClick={() => setShowModal(true)}
                variant="secondary"
                startIcon={<Plus />}
              >
                Add your first todo
              </Button>
            }
          />
        ) : (
          <EmailTable
              emailData={emailData}
              setShowModal={setShowModal}
              toggleEmail={toggleEmail}
              deleteEmail={deleteEmail}
              editEmail={editEmail}
          />
          // add count and table componennet here
        )}
      </ContentLayout>
      {showModal && <EmailModal setShowModal={setShowModal} addTodo={addEmail} />}
    </>
  );
};

export default memo(HomePage);
