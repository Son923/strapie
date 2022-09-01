import { Box } from '@strapi/design-system/Box';
import { Searchbar } from '@strapi/design-system/Searchbar';
import React, { useState, useEffect, useRef } from 'react';

const SearchBar = ({
	handleSearch,
	setSearchQuery
}) => {
		const [value, setValue] = useState('');
		const inputEl = useRef(null);

		useEffect(() => {
			const handleEvent = ( event ) => {
				const url = inputEl.current.value;
				if ( event.key === 'Enter' ) {
					setSearchQuery(url)
				}

			};
			inputEl.current.addEventListener( 'keydown', handleEvent );

			return () => {
				inputEl.current.removeEventListener('keydown', handleEvent);
			}
		}, [])

		
    return (
		<>
			{
				<Box marginTop={4}>
					<Searchbar
						name="searchbar"
						onClear={() => setValue('')} 
						value={value}
						onChange={e => setValue(e.target.value)} 
						clearLabel="Clearing the plugin search" 
						placeholder="YouTube Video URL"
						size="S"
						ref={inputEl}
						children=""
					/>
				</Box>
			}
		</>
	);
}

export default SearchBar;