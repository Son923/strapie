import React from 'react';
import { useParams } from 'react-router-dom';
import _get from 'lodash/get';
import { useCMEditViewDataManager } from '@strapi/helper-plugin';
import { Box } from '@strapi/design-system/Box';
import { Typography } from '@strapi/design-system/Typography';
const actionModes = ['publish', 'unpublish'];

const ActionLayout = () => {
	const { slug, hasDraftAndPublish, isCreatingEntry } = useCMEditViewDataManager();
	const params = useParams();
	const id = _get(params, 'id', null);
	const currentEntityId = Number(id);

	// if (!hasDraftAndPublish || isCreatingEntry) {
	// 	return null;
	// }

	return (
		<Box padding={4} background="primary700" shadow="filterShadow" borderColor="danger600">
      		<Typography textColor="neutral0">Hello world</Typography>
    	</Box>
	);
};

export { ActionLayout };