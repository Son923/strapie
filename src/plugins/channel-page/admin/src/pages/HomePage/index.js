import { Box } from '@strapi/design-system/Box';
import React, { memo,useState } from 'react';
import ChannelTable from '../../components/ChannelTable';

import { Button } from '@strapi/design-system/Button';
import { HeaderLayout } from '@strapi/design-system/Layout';
import { Link } from '@strapi/design-system/Link';
import { ModalLayout } from '@strapi/design-system/ModalLayout';
import { ArrowLeft, Plus } from '@strapi/icons';
import { Pencil } from '@strapi/icons/';

const HomePage = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <>
        <Box background="neutral100" style={{height: 2000}}>
            <HeaderLayout 
                navigationAction={<Link startIcon={<ArrowLeft />} to="/">Go back</Link>} 
                primaryAction={<Button startIcon={<Plus />} onClick={() => setIsVisible(true)}>Add new channel</Button>} 
                secondaryAction={<Button variant="tertiary" startIcon={<Pencil />}>Edit</Button>} 
                title="Channels" 
                subtitle="36 entries found" 
                as="h2" 
            />
            <ChannelTable />

            {isVisible && <ModalLayout onClose={() => setIsVisible(false)} labelledBy="subtitle">
                <h2 id="subtitle">Here we are</h2>
                <button onClick={() => setIsVisible(false)}>Close me</button>
              </ModalLayout>}
        </Box>;
      </>
    );
  };
  
  export default memo(HomePage);