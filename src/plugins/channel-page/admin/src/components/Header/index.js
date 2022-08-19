import React, { useState } from 'react';

import { Box } from '@strapi/design-system/Box';
import { Pencil } from '@strapi/icons/';
import { BaseHeaderLayout, HeaderLayout } from '@strapi/design-system/Layout';
import {Link} from '@strapi/design-system/Link';
import {ArrowLeft, Plus} from '@strapi/icons';
import { Button } from '@strapi/design-system/Button';
import { ModalLayout } from '@strapi/design-system/ModalLayout';

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    return <Box background="neutral100" style={{height: 2000}}>
            <HeaderLayout 
                navigationAction={<Link startIcon={<ArrowLeft />} to="/">Go back</Link>} 
                primaryAction={<Button startIcon={<Plus />} onClick={() => setIsVisible(true)}>Add new channel</Button>} 
                secondaryAction={<Button variant="tertiary" startIcon={<Pencil />}>Edit</Button>} 
                title="Channels" 
                subtitle="36 entries found" 
                as="h2" 
            />
            {isVisible && <ModalLayout onClose={() => setIsVisible(false)} labelledBy="subtitle">
                <h2 id="subtitle">Here we are</h2>
                <button onClick={() => setIsVisible(false)}>Close me</button>
              </ModalLayout>}
          </Box>;
    }

export default Header;