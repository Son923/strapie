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
	const inputEl = useRef(null);
	useEffect(() => {
		const handle = () => {
			const url = inputEl.current.value;
			// call API voi url
		};
		inputEl.current.addEventListener('onEnter', handle);
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