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
	const { slug, hasDraftAndPublish, isCreatingEntry, onChange } = useCMEditViewDataManager();
	const params = useParams();
	const id = _get(params, 'id', null);
	const currentEntityId = Number(id);
	const API_KEY = 'AIzaSyCWqTrhgrGfB-WyUG_wANcdOjnO4Z8-YyM';

	// if (!hasDraftAndPublish || isCreatingEntry) {
	// 	return null;
	// }
	
	const [value, setValue] = useState('');
	const [ submittedValue, setSubmittedValue ] = useState( '' );
	const inputEl = useRef(null);

	function youtube_parser(url){
		var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
		var match = url.match(regExp);
		return (match&&match[7].length==11)? match[7] : false;
	}

	const handleSearchRequest = async (url) => {
		const videoId = await youtube_parser(url);
		const videoResponse = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`);
		const videos = await videoResponse.json();
		const channelInfo = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=id,snippet,statistics,contentDetails,status&id=${videos.items[0].snippet.channelId}&key=${API_KEY}`)
		const channels = await channelInfo.json()
		const mockData = {
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
		};

		// TODO: clmeee refactor gap
		onChange({
			target: { name: "channelLink", value: `https://www.youtube.com/channel/${videos.items[0].snippet.channelId}` },
		});
		onChange({
			target: { name: "country", value: channels.items[0].snippet.country },
		});
		onChange({
			target: { name: "subcriberCount", value: channels.items[0].statistics.subscriberCount },
		});
		onChange({
			target: { name: "avatarUrl", value: channels.items[0].snippet.thumbnails.medium.url },
		});
		onChange({
			target: { name: "channelName", value: videos.items[0].snippet.channelTitle },
		});
		onChange({
			target: { name: "averageViews", value: channels.items[0].statistics.viewCount },
		});
		onChange({
			target: { name: "channelID", value: videos.items[0].snippet.channelId },
		});
	}

	useEffect(() => {
		const handleEvent = ( event ) => {
			const url = inputEl.current.value;
			if ( event.key === 'Enter' ) {
				console.log(url);
				handleSearchRequest(url);
			}

		};
		inputEl.current.addEventListener( 'keydown', handleEvent );

		return () => {
			inputEl.current.removeEventListener('keydown', handleEvent);
		}
	}, [])

	return (
		<>
			{slug === 'api::channel.channel' ? (
				<Box marginTop={4}>
					<Header />
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
				</Box>
			) : (
				<p ref={inputEl}></p>
			)}
		</>
	);
};

export { SearchBox };