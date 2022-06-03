/*
 *
 * HomePage
 *
 */

import React, { memo, useState, useEffect } from 'react';
import pluginId from '../../pluginId';
import { LoadingIndicatorPage } from '@strapi/helper-plugin';
import mailRequests from '../../api/mail';
import MailTable from '../../components/MailTable';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState([false]);
  const [mailData, setMailData] = useState([]);

  const fetchData = async () => {
    if (isLoading === false) setIsLoading(true);
    const mail = await mailRequests.getAllMails();
    setMailData(mail);
    setIsLoading(false);
  }

  useEffect(async () => {
    await fetchData();
    setIsLoading(false);
  }, []);

  if (isLoading) return <LoadingIndicatorPage/>;
  
  console.log(mailData);
  return (
    <>
      <h1>{pluginId}&apos;s HomePage</h1>
      <p>Happy coding</p>
      <MailTable
        mailData={mailData}
      />
    </>
  );
};

export default memo(HomePage);
