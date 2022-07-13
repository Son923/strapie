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
	const [data, setData] = useState({});

	function youtube_parser(url){
		var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
		var match = url.match(regExp);
		return (match&&match[7].length==11)? match[7] : false;
	}

	const handleSearchRequest = async () => {
		const videoId = await youtube_parser(value);
		const videoResponse = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`);
		const videos = await videoResponse.json();
		const channelInfo = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=id,snippet,statistics,contentDetails,status&id=${res.items[0].snippet.channelId}&key=${API_KEY}`)
		const channels = await channelInfo.json()
		setData({
			channelID : videos.items[0].snippet.channelId,
			channelDescription : videos.items[0].snippet.description,
			channelTitle: videos.items[0].snippet.channelTitle,
			channelLink : `https://www.youtube.com/channel/${res.items[0].snippet.channelId}`,
			subscriberCount : channels.items[0].statistics.subscriberCount,
			totalViews : channels.items[0].statistics.viewCount,
			thumbnailUrl: channels.items[0].snippet.thumbnails.medium.url,
			averageViews : '',
			publishedAt: channels.items[0].snippet.publishedAt,
			country: channels.items[0].snippet.country,


		});
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
									<Typography variant="sigma">CHANNEL TITLE</Typography>
								</Td>
								<Td>
									<Typography textColor="neutral800">{ data.channelTitle }</Typography>
								</Td>
							</Tr>

							<Tr>
								<Td>
									<Typography variant="sigma">LINK</Typography>
								</Td>
								<Td>
									<BaseLink href={ data.channelLink } isExternal>
										<Typography textColor="neutral800">{ data.channelLink }</Typography>
									</BaseLink>
								</Td>	
							</Tr>

							<Tr>
								<Td>
									<Typography variant="sigma">DESCRIPTION</Typography>
								</Td>
								<Td>
									<Typography textColor="neutral800">{ data.channelDescription}</Typography>
								</Td>
							</Tr>

							<Tr>
								<Td>
									<Typography variant="sigma">PUBLISHED AT</Typography>
								</Td>
								<Td>
									<Typography textColor="neutral800">{ data.publishedAt }</Typography>
								</Td>
							</Tr>

							<Tr>
								<Td>
									<Typography variant="sigma">SUBSCRIBERS</Typography>
								</Td>
								<Td>
									<Typography textColor="neutral800">{ data.subscriberCount }</Typography>
								</Td>
							</Tr>

							<Tr>
								<Td>
									<Typography variant="sigma">TOTAL VIEWS</Typography>
								</Td>
								<Td>
									<Typography textColor="neutral800">{ data.totalViews }</Typography>
								</Td>
							</Tr>

							<Tr>
								<Td>
									<Typography variant="sigma">COUNTRY</Typography>
								</Td>
								<Td>
									<Typography textColor="neutral800">{ data.country }</Typography>
								</Td>
							</Tr>

							<Tr>
								<Td>
									<Typography variant="sigma">THUMBNAIL URL</Typography>
								</Td>
								<Td>
									<BaseLink href={ data.thumbnailUrl } isExternal>
										<Typography textColor="neutral800">{ data.thumbnailUrl }</Typography>
									</BaseLink>
								</Td>
							</Tr>

						</Tbody>
					</Table>
				</Box>
        
    </Box>;
}

export default LeftCol;