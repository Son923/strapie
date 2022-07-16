import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import _get from 'lodash/get';
import { useCMEditViewDataManager } from '@strapi/helper-plugin';
import { Box } from '@strapi/design-system/Box';
import { Typography } from '@strapi/design-system/Typography';
import { Header } from './Header';
import { Searchbar, SearchForm } from '@strapi/design-system/Searchbar';

const actionModes = ['publish', 'unpublish'];

const SearchBox = () => {
	const { slug, hasDraftAndPublish, isCreatingEntry } = useCMEditViewDataManager();
	const params = useParams();
	const id = _get(params, 'id', null);
	const currentEntityId = Number(id);

	// if (!hasDraftAndPublish || isCreatingEntry) {
	// 	return null;
	// }
	
	const [value, setValue] = useState('');
	const [ submittedValue, setSubmittedValue ] = useState( '' );
	const [data, setData] = useState({});
	const inputEl = useRef(null);

	const handleSearchRequest = async () => {
		const videoId = await youtube_parser(submittedValue);
		const videoResponse = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`);
		const videos = await videoResponse.json();
		const channelInfo = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=id,snippet,statistics,contentDetails,status&id=${videos.items[0].snippet.channelId}&key=${API_KEY}`)
		const channels = await channelInfo.json()
		setData({
			channelID : videos.items[0].snippet.channelId,
			channelDescription : videos.items[0].snippet.description,
			channelTitle: videos.items[0].snippet.channelTitle,
			channelLink : `https://www.youtube.com/channel/${videos.items[0].snippet.channelId}`,
			subscriberCount : channels.items[0].statistics.subscriberCount,
			totalViews : channels.items[0].statistics.viewCount,
			thumbnailUrl: channels.items[0].snippet.thumbnails.medium.url,
			averageViews : '',
			publishedAt: channels.items[0].snippet.publishedAt,
			country: channels.items[0].snippet.country,

		});
		console.log(data)
	};

	useEffect(() => {
		const value = inputEl.current.value;
		const handleEvent = ( event ) => {
			// call API voi url
			if ( event.key === 'Enter' ) {
				// event.preventDefault();
                setSubmittedValue( value );
				// handleSearchRequest;
				console.log(submittedValue)
			}
		};
		inputEl.current.addEventListener( 'keydown', handleEvent );
	})

	return (	

		<Box marginTop={4}>
			<Header />
			<SearchForm>
				<Searchbar
					name="searchbar" 
					onClear={() => setValue('')} 
					value={value}
					onChange={e => setValue(e.target.value)} 
					clearLabel="Clearing the plugin search" 
					placeholder="YouTube Video URL"
					size="S"
					ref={inputEl}
				>
					Find a Channel ID and related channel information, like Channel owner, Channel start date, Subscriber Count, total views and total videos of any YouTube user.
				</Searchbar>
			</SearchForm>
			
    	</Box>
	);
};

export { SearchBox };