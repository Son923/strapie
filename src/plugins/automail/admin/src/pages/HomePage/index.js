/*
 *
 * HomePage
 *
 */

import React, { memo, useState } from 'react';
import pluginId from '../../pluginId';
import { LoadingIndicatorPage } from '@strapi/helper-plugin';
import mailRequests from '../../api/mail';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState([]);
  const [mailData, setMailData] = useState([]);

  const fetchData = async () => {
    if (isLoading === false) setIsLoading(true);
    const mail = await mailRequests.getAllMails();
    setMailData(mail);
    setIsLoading(false);
  }

  if (isLoading) return <LoadingIndicatorPage/>;

  return (
    <div>
      <h1>{pluginId}&apos;s HomePage</h1>
      <p>Happy coding</p>
      <p>{mailData}</p>
    </div>
  );
};

export default memo(HomePage);
