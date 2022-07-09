import React, { useState } from 'react';
import { Box } from '@strapi/design-system/Box';
import { Table, Thead, Tbody, Tr, Td, Th } from '@strapi/design-system/Table';
import { Plus } from '@strapi/design-system/Icon';
import { Typography } from '@strapi/design-system/Typography';
import { BaseLink } from '@strapi/design-system/BaseLink';
import { Searchbar, SearchForm } from '@strapi/design-system/Searchbar';
import { Button } from '@strapi/design-system/Button';

const LeftCol = () => {
    const ROW_COUNT = 8;
    const COL_COUNT = 2;
	const [value, setValue] = useState('');
	const [data, setData] = useState('');

	const field = {
		channelID : 'UCZW5lIUz93q_aZIkJPAC0IQ',
		channelOwner : '88rising',
		channelStartDate : '2016-03-18',
		channelDescription : '88 is double happiness',
		subscriberCount : '5830000',
		videoCount : '938',
		totalViews : '2831785624',
		channelLink : 'https://www.youtube.com/channel/UCZW5lIUz93q_aZIkJPAC0IQ'
	};

	const handleSearchRequest = async () => {
		console.log(value);
		const response = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=g4BvByYK6U4&key=AIzaSyCWqTrhgrGfB-WyUG_wANcdOjnO4Z8-YyM')	;
		console.log(response.json());
	};

    return <Box padding={4}>
        <SearchForm>
					<Searchbar 
						name="searchbar" 
						onClear={() => setValue('')} 
						value={value} 
						onChange={e => setValue(e.target.value)} 
						clearLabel="Clearing the plugin search" 
						placeholder="e.g: YouTube Channel URL, Video URL or username"
					>
						Find a Channel ID and related channel information, like Channel owner, Channel start date, Subscriber Count, total views and total videos of any YouTube user.
					</Searchbar>
				</SearchForm>
				
				<Button onClick={handleSearchRequest}>Submit</Button>
        
				<Box padding={8}>
					<Table colCount={COL_COUNT} rowCount={ROW_COUNT} >
						<Tbody>
							<Tr>
								<Td>
									<Typography variant="sigma">CHANNEL ID</Typography>
								</Td>
								<Td>
									<Typography textColor="neutral800">{ field.channelID}</Typography>
								</Td>
							</Tr>

							<Tr>
								<Td>
									<Typography variant="sigma">OWNER</Typography>
								</Td>
								<Td>
									<Typography textColor="neutral800">{ field.channelOwner	}</Typography>
								</Td>
							</Tr>

							<Tr>
								<Td>
									<Typography variant="sigma">LINK</Typography>
								</Td>
								<Td>
									<BaseLink href={ field.channelLink } isExternal>
										<Typography textColor="neutral800">{ field.channelLink	}</Typography>
									</BaseLink>
								</Td>	
							</Tr>

							<Tr>
								<Td>
									<Typography variant="sigma">DESCRIPTION</Typography>
								</Td>
								<Td>
									<Typography textColor="neutral800">{field.channelDescription	}</Typography>
								</Td>
							</Tr>

							<Tr>
								<Td>
									<Typography variant="sigma">CHANNEL START DATE</Typography>
								</Td>
								<Td>
									<Typography textColor="neutral800">{ field.channelStartDate }</Typography>
								</Td>
							</Tr>

							<Tr>
								<Td>
									<Typography variant="sigma">SUBSCRIBERS</Typography>
								</Td>
								<Td>
									<Typography textColor="neutral800">{ field.subscriberCount }</Typography>
								</Td>
							</Tr>

							<Tr>
								<Td>
									<Typography variant="sigma">TOTAL VIEWS</Typography>
								</Td>
								<Td>
									<Typography textColor="neutral800">{ field.totalViews }</Typography>
								</Td>
							</Tr>
							<Tr>
								<Td>
									<Typography variant="sigma">TEST</Typography>
								</Td>
								<Td>
									<Typography textColor="neutral800">{ value }</Typography>
								</Td>
							</Tr>

						</Tbody>
					</Table>
				</Box>
        
    </Box>;
}

export default LeftCol;