import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import _get from 'lodash/get';
import { useCMEditViewDataManager } from '@strapi/helper-plugin';
import { Box } from '@strapi/design-system/Box';
import { Typography } from '@strapi/design-system/Typography';
import { Header } from './Header';
import { Searchbar, SearchForm } from '@strapi/design-system/Searchbar';
import { BaseLink } from '@strapi/design-system/BaseLink';

const actionModes = ['publish', 'unpublish'];

const SearchBox = () => {
	const { slug, hasDraftAndPublish, isCreatingEntry, onChange } = useCMEditViewDataManager();
	const params = useParams();
	const id = _get(params, 'id', null);
	const currentEntityId = Number(id);
	// const API_KEY = 'AIzaSyCWqTrhgrGfB-WyUG_wANcdOjnO4Z8-YyM';
	// const API_KEY = "AIzaSyAT0Un5cp1MTFoHX8IZiWVIQSso8tN3onU"
	const API_KEY = "AIzaSyCgB9JG2iUr3thfX5OrZmB3BCNrHE-DTqk"

	// if (!hasDraftAndPublish || isCreatingEntry) {
	// 	return null;
	// }
	
	const [value, setValue] = useState('');
	const [data, setData] = useState({});
	const inputEl = useRef(null);

	const regionNames = new Intl.DisplayNames(
		['en'], {type: 'region'}
	);

	function youtube_parser(url){
		var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
		var match = url.match(regExp);
		return (match&&match[7].length==11)? match[7] : false;
	}

	const getAverageView = async (latestVideoIDs) => {
		const latestVideosResponse = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${latestVideoIDs.join()}&key=${API_KEY}`);
		const latestVideos = await latestVideosResponse.json();
		const viewCountArray = latestVideos.items.map(item => parseInt(item.statistics.viewCount));
		const averageview = Math.round( viewCountArray.reduce((partialSum, a) => partialSum + a, 0)/viewCountArray.length );
		return averageview;
	} 		

	const handleSearchRequest = async (url) => {
		const videoId = await youtube_parser(url);
		const videoResponse = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`);
		const videos = await videoResponse.json();

		const channelInfo = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=id,snippet,statistics,contentDetails,status&id=${videos.items[0].snippet.channelId}&key=${API_KEY}`)
		const channels = await channelInfo.json();

		const uploadPlaylistID = channels.items[0].contentDetails.relatedPlaylists.uploads;
		const uploadPlaylistItemsResponse = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=5&playlistId=${uploadPlaylistID}&key=${API_KEY}`);
		const uploadPlaylistItems = await uploadPlaylistItemsResponse.json();
		const latestVideoIDs = uploadPlaylistItems.items.map(item => item.contentDetails.videoId);
		const averageViews = await getAverageView(latestVideoIDs);
		const lastUpload = uploadPlaylistItems.items[0].contentDetails.videoPublishedAt;
		const countryCode = channels.items[0].snippet.country;
		
		let countryName = "";
		if (countryCode) {
			countryName = regionNames.of(countryCode)	
		}

		setData({
			channelID : videos.items[0].snippet.channelId,
			channelDescription : channels.items[0].snippet.description,
			channelTitle: videos.items[0].snippet.channelTitle,
			channelLink : `https://www.youtube.com/channel/${videos.items[0].snippet.channelId}`,
			subscriberCount : channels.items[0].statistics.subscriberCount,
			totalViews : channels.items[0].statistics.viewCount,
			thumbnailUrl: channels.items[0].snippet.thumbnails.medium.url,
			averageViews : averageViews,
			publishedAt: channels.items[0].snippet.publishedAt,
			country: countryName,
			lastUpload: lastUpload,
			test: lastUpload,
		});

		// TODO: clmeee refactor gap
		onChange({
			target: { name: "channelLink", value: `https://www.youtube.com/channel/${videos.items[0].snippet.channelId}` },
		});
		onChange({
			target: { name: "country", value: countryName },
		});
		onChange({
			target: { name: "subscriberCount", value: channels.items[0].statistics.subscriberCount },
		});
		onChange({
			target: { name: "avatarUrl", value: channels.items[0].snippet.thumbnails.medium.url },
		});
		onChange({
			target: { name: "channelName", value: videos.items[0].snippet.channelTitle },
		});
		onChange({
			target: { name: "averageViews", value: averageViews },
		});
		onChange({
			target: { name: "channelID", value: videos.items[0].snippet.channelId },
		});
		onChange({
			target: { name: "lastUpload", value: lastUpload },
		});
	}

	const handelOnClear = () => {
		setValue('');
		onChange({
			target: { name: "channelLink", value: null },
		});
		onChange({
			target: { name: "country", value: null },
		});
		onChange({
			target: { name: "subscriberCount", value: null },
		});
		onChange({
			target: { name: "avatarUrl", value: null },
		});
		onChange({
			target: { name: "channelName", value: null },
		});
		onChange({
			target: { name: "averageViews", value: null },
		});
		onChange({
			target: { name: "channelID", value: null },
		});
		onChange({
			target: { name: "lastUpload", value: null },
		});
	}

	useEffect(() => {
		const handleEvent = ( event ) => {
			const url = inputEl.current.value;
			if ( event.key === 'Enter' ) {
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
						onClear={handelOnClear} 
						value={value}
						onChange={e => setValue(e.target.value)} 
						clearLabel="Clearing the plugin search" 
						placeholder="YouTube Video URL"
						size="S"
						ref={inputEl}
						children=""
					/>
					<Box marginTop={4}>
						<BaseLink href={ data.channelLink } isExternal>
							<Typography variant='delta' textColor="primary200">{ data.channelTitle }</Typography>
						</BaseLink>
					</Box>
				</Box>
			) : (
				<p ref={inputEl}></p>
			)}
		</>
	);
};

export { SearchBox };