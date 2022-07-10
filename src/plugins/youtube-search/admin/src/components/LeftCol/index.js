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
	const API_KEY = 'AIzaSyCWqTrhgrGfB-WyUG_wANcdOjnO4Z8-YyM';
	const [value, setValue] = useState('');

	const field = {
		channelID : 'UCZW5lIUz93q_aZIkJPAC0IQ',
		channelDescription : '88 is double happiness',
		subscriberCount : '5830000',
		videoCount : '938',
		totalViews : '2831785624',
		channelLink : 'https://www.youtube.com/channel/UCZW5lIUz93q_aZIkJPAC0IQ'
	};
	
	const [data, setData] = useState(field);

	function youtube_parser(url){
		var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
		var match = url.match(regExp);
		return (match&&match[7].length==11)? match[7] : false;
	}

	const handleSearchRequest = async () => {
		const videoId = await youtube_parser(value);
		const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`);
		const res = await response.json();
		console.log(res.items[0].snippet);
		const abc = {
			channelID : res.items[0].snippet.channelId,
			channelDescription : res.items[0].snippet.description,
			subscriberCount : '5830000',
			videoCount : '938',
			totalViews : '2831785624',
			channelLink : `https://www.youtube.com/channel/${res.items[0].snippet.channelId}`
		}
		setData(abc);
		console.log(abc);
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
									<Typography textColor="neutral800">{ data.channelID }</Typography>
								</Td>
							</Tr>

							<Tr>
								<Td>
									<Typography variant="sigma">LINK</Typography>
								</Td>
								<Td>
									<BaseLink href={ data.channelLink } isExternal>
										<Typography textColor="neutral800">{ data.channelLink	}</Typography>
									</BaseLink>
								</Td>	
							</Tr>

							<Tr>
								<Td>
									<Typography variant="sigma">DESCRIPTION</Typography>
								</Td>
								<Td>
									<Typography textColor="neutral800">{data.channelDescription	}</Typography>
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

						</Tbody>
					</Table>
				</Box>
        
    </Box>;
}

export default LeftCol;