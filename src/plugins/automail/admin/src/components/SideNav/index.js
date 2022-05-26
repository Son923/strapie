'use strict';
import { Box } from '@strapi/design-system/Box';
import {
	SubNav,
	SubNavHeader, SubNavLink,
	SubNavLinkSection, SubNavSection,
	SubNavSections
} from '@strapi/design-system/SubNav';
import { TextButton } from '@strapi/design-system/TextButton';
import { Apps, ExclamationMarkCircle, Plus } from '@strapi/icons';
import React from 'react';

const SideNav = () => {
	const links = [{
		id: 1,
		label: 'Schedule',
		icon: <ExclamationMarkCircle />,
		to: '/address'
	  }, {
		id: 2,
		label: 'Sent',
		to: '/category'
	  }, {
		id: 3,
		label: 'Draft',
		icon: <Apps />,
		to: '/city',
		active: true
	  }, {
		id: 4,
		label: 'trash',
		to: '/country'
	  },{
		id: 5,
		label: 'Follow-up',
		to: '/country'
	  }];

	return <SubNav ariaLabel="Builder sub nav">
	<SubNavHeader searchable value={''} onClear={() => {}} onChange={e => {}} label="Board" searchLabel="Search..." />
	<SubNavSections>
	  <SubNavSection label="All" collapsable badgeLabel={links.length.toString()}>
		{links.map(link => <SubNavLink to={link.to} active={link.active} key={link.id}>
			{link.label}
		  </SubNavLink>)}
	  </SubNavSection>
	  <Box paddingLeft={7}>
			<TextButton startIcon={<Plus />}>Click on me</TextButton>
		</Box>
	  <SubNavSection label="Template" collapsable badgeLabel={links.length.toString()}>
		<SubNavLinkSection label="Default">
		  {links.map(link => <SubNavLink to={link.to} key={link.id}>
			  {link.label}
			</SubNavLink>)}
		</SubNavLinkSection>
	  </SubNavSection>
	  <Box paddingLeft={7}>
			<TextButton startIcon={<Plus />}>Create new template</TextButton>
		</Box>
	</SubNavSections>
  </SubNav>;
};

export default SideNav;
