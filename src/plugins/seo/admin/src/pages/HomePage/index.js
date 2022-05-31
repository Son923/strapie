/*
 *
 * HomePage
 *
 */

import { Box } from '@strapi/design-system/Box';
import { BaseHeaderLayout } from '@strapi/design-system/Layout';
import { LoadingIndicatorPage } from '@strapi/helper-plugin';
import React, { memo, useEffect, useRef, useState } from 'react';
import emailRequests from '../../api/email';
import ContentTypesTable from '../../components/ContentTypesTable';
import EmailTable from '../../components/EmailTable';
import { fetchContentTypes } from '../../utils/api';

const HomePage = () => {
  const contentTypes = useRef({});
  const [emailData, setEmailData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const fetchData = async () => {
    if (isLoading === false) setIsLoading(true);
    const email = await emailRequests.getAllEmails();
    setEmailData(email);
    setIsLoading(false);
  }

  useEffect(async () => {
    contentTypes.current = await fetchContentTypes(); // Here
    await fetchData(); 
    setIsLoading(false);
  }, []);

  async function addEmail(data) {
    alert("Add Add Email in API");
  }
  
  async function toggleEmail(data) {
    alert("Add Toggle Email in API");
  }

  async function editEmail(data) {
    alert("Add Edit Email in API");
  }

  async function deleteEmail(data) {
    alert("Add Delete Email in API");
  }

  if (isLoading) return <LoadingIndicatorPage />;

  return (
    <>
      <Box background="neutral100">
        <BaseHeaderLayout
          title="Email"
          subtitle="Managing and automate your emails"
          as="h2"
        />
      </Box>

      {/* <ContentTypesTable contentTypes={contentTypes.current} /> */}
      <EmailTable
        emailData={emailData}
        setShowModal={setShowModal}
        toggleEmail={toggleEmail}
        deleteEmail={deleteEmail}
        editEmail={editEmail}
      />
        
    </>
  );
};

export default memo(HomePage);