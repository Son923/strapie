import { Box } from '@strapi/design-system/Box';
import React, { memo,useState,useEffect } from 'react';
import ChannelTable from '../../components/ChannelTable';

import { Button } from '@strapi/design-system/Button';
import { HeaderLayout } from '@strapi/design-system/Layout';
import { Link } from '@strapi/design-system/Link';
import { ArrowLeft, Plus } from '@strapi/icons';
import { Pencil } from '@strapi/icons/';
import axiosInstance from '../../utils/axiosInstance';

import { Tabs, Tab, TabGroup, TabPanels, TabPanel } from '@strapi/design-system/Tabs';
import { ModalLayout, ModalBody, ModalHeader, ModalFooter } from '@strapi/design-system/ModalLayout';
import { Typography } from '@strapi/design-system/Typography';
import SearchBar from '../../components/SearchBar';

const HomePage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const [channels, setChannels] = useState([]);
    const [checkedItems, setCheckedItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
      fetchChannels();
    }, [searchQuery])

    const fetchChannels = async () => {
      try {
        const { data } = await axiosInstance.get(
          `/content-manager/collection-types/api::channel.channel?page=1&pageSize=20&sort=channelID:ASC&_q=${searchQuery}`
          );
          setChannels(data.results);
        } catch (e) {
          console.log(e);
        }
        
      }

    const channelsToExport = channels.filter((channel) => {
      return checkedItems.includes(channel.id)
    })



    const convertArrayOfObjectsToCSV = args => {  
      const data = args.data;
      if (!data || !data.length) return;
    
      const columnDelimiter = args.columnDelimiter || ',';
      const lineDelimiter = args.lineDelimiter || '\n';
    
      const keys = Object.keys(data[0]);
    
      let result = '';
      result += keys.join(columnDelimiter);
      result += lineDelimiter;
    
      data.forEach(item => {
        let ctr = 0;
        keys.forEach(key => {
          if (ctr > 0) result += columnDelimiter;
          result += item[key];
          ctr++;
        });
        result += lineDelimiter;
      });
    
      return result;
    }

    const downloadCSV = args => {
      let csv = convertArrayOfObjectsToCSV({
        data: channelsToExport
      });
      if (!csv) return;
    
      const filename = args.filename || 'export.csv';
    
      if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
      }
    
      const data = encodeURI(csv);
    
      const link = document.createElement('a');
      link.setAttribute('href', data);
      link.setAttribute('download', filename);
      link.click();
    }
    
    console.log(checkedItems)

    return (
      <>
        

        <Box background="neutral100" style={{height: 2000}}>
            <HeaderLayout 
                navigationAction={<Link startIcon={<ArrowLeft />} to="/">Go back</Link>} 
                primaryAction={<Button startIcon={<Plus />} onClick={() => {setIsVisible(true)}}>Export</Button>} 
                secondaryAction={<Button variant="tertiary" startIcon={<Pencil />}>Edit</Button>} 
                title="Channels" 
                subtitle={`Select ${channels.length}`}
                as="h2" 
            />
            <Box padding={2} background="neutral100">
              <SearchBar setSearchQuery={setSearchQuery}/>
              <TabGroup label="Some stuff for the label" id="tabs" variant="simple">
                <Tabs>
                  <Tab>First</Tab>
                  <Tab hasError>Result</Tab>
                </Tabs>
                <TabPanels>
                  <TabPanel>
                    <ChannelTable channels={channels} checkedItems={checkedItems} setCheckedItems={setCheckedItems}/>
                  </TabPanel>
                  <TabPanel>
                    <ChannelTable channels={channelsToExport} checkedItems={checkedItems} setCheckedItems={setCheckedItems}/>
                  </TabPanel>
                </TabPanels>
              </TabGroup>
            </Box>

            

            {isVisible && 
              <ModalLayout onClose={() => setIsVisible(false)} labelledBy="subtitle">
                <ModalHeader>
                  <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
                    Export {checkedItems.length} selected channels
                  </Typography>
                </ModalHeader>
                <button onClick={() => {
                  setIsVisible(false)
                  console.log('fdsa')
                  downloadCSV({ filename: "data.csv" })
                  }}>Close me</button>
              </ModalLayout>}
        </Box>;
      </>
    );
  };  
  
  export default memo(HomePage);