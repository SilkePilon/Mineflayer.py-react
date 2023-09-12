/** 

=========================================================
* Open Delivery Bot React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

import { useEffect, useState } from 'react';

// react-router-dom components
import { useLocation, NavLink } from 'react-router-dom';

// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types';

// @mui material components
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Icon from '@mui/material/Icon';

// Vision UI Dashboard PRO React components
import VuiBox from 'components/VuiBox';
import VuiTypography from 'components/VuiTypography';

// Vision UI Dashboard PRO React example components
import SidenavCollapse from 'examples/Sidenav/SidenavCollapse';
import SidenavList from 'examples/Sidenav/SidenavList';
import SidenavItem from 'examples/Sidenav/SidenavItem';
import SidenavCard from 'examples/Sidenav/SidenavCard';

// Vision UI Dashboard PRO custom icons
import SimmmpleLogo from 'examples/Icons/SimmmpleLogo';

// Custom styles for the Sidenav
import SidenavRoot from 'examples/Sidenav/SidenavRoot';
import sidenavLogoLabel from 'examples/Sidenav/styles/sidenav';

// Scrollbar component
import { Scrollbars } from 'react-custom-scrollbars-2';

// Scrollbar configs
import { renderThumb, renderTrack, renderTrackRTL, renderView, renderViewRTL } from 'examples/Scrollbar';

// Vision UI Dashboard PRO React context
import { useVisionUIController, setMiniSidenav, setTransparentSidenav } from 'context';

function Sidenav({ color, brand, brandName, routes, ...rest }) {
	const [ openCollapse, setOpenCollapse ] = useState(false);
	const [ openNestedCollapse, setOpenNestedCollapse ] = useState(false);
	const [ controller, dispatch ] = useVisionUIController();
	const { miniSidenav, transparentSidenav } = controller;
	const location = useLocation();
	const { pathname } = location;
	const collapseName = pathname.split('/').slice(1)[0];
	const itemName = pathname.split('/').slice(1)[1];

	const closeSidenav = () => setMiniSidenav(dispatch, true);

	useEffect(
		() => {
			// A function that sets the mini state of the sidenav.
			function handleMiniSidenav() {
				setMiniSidenav(dispatch, window.innerWidth < 1200);
			}

			/** 
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
			window.addEventListener('resize', handleMiniSidenav);

			// Call the handleMiniSidenav function to set the state with the initial value.
			handleMiniSidenav();

			// Remove event listener on cleanup
			return () => window.removeEventListener('resize', handleMiniSidenav);
		},
		[ dispatch, location ]
	);

	useEffect(() => {
		if (window.innerWidth < 1440) {
			setTransparentSidenav(dispatch, false);
		}
	}, []);

	// Render all the nested collapse items from the routes.js
	const renderNestedCollapse = (collapse) => {
		const template = collapse.map(
			({ name, route, key, href }) =>
				href ? (
					<Link key={key} href={href} target='_blank' rel='noreferrer' sx={{ textDecoration: 'none' }}>
						<SidenavItem color={color} name={name} nested />
					</Link>
				) : (
					<NavLink to={route} key={key} sx={{ textDecoration: 'none' }}>
						<SidenavItem color={color} name={name} active={route === pathname} nested />
					</NavLink>
				)
		);

		return template;
	};

	// Render the all the collpases from the routes.js
	const renderCollapse = (collapses) =>
		collapses.map(({ name, collapse, route, href, key }) => {
			let returnValue;

			if (collapse) {
				returnValue = (
					<SidenavItem
						color={color}
						key={key}
						name={name}
						active={key === itemName}
						open={openNestedCollapse === name}
						onClick={() =>
							openNestedCollapse === name ? setOpenNestedCollapse(false) : setOpenNestedCollapse(name)}>
						{renderNestedCollapse(collapse)}
					</SidenavItem>
				);
			} else {
				returnValue = href ? (
					<Link href={href} key={key} target='_blank' rel='noreferrer' sx={{ textDecoration: 'none' }}>
						<SidenavItem color={color} name={name} active={key === itemName} />
					</Link>
				) : (
					<NavLink to={route} key={key} sx={{ textDecoration: 'none' }}>
						<SidenavItem color={color} name={name} active={key === itemName} />
					</NavLink>
				);
			}
			return <SidenavList key={key}>{returnValue}</SidenavList>;
		});

	// Render all the routes from the routes.js (All the visible items on the Sidenav)
	const renderRoutes = routes.map(({ type, name, icon, title, collapse, noCollapse, key, href }) => {
		let returnValue;

		if (type === 'collapse') {
			returnValue = href ? (
				<Link href={href} key={key} target='_blank' rel='noreferrer' sx={{ textDecoration: 'none' }}>
					<SidenavCollapse
						color={color}
						name={name}
						icon={icon}
						active={key === collapseName}
						noCollapse={noCollapse}
					/>
				</Link>
			) : (
				<SidenavCollapse
					color={color}
					key={key}
					name={name}
					icon={icon}
					active={key === collapseName}
					open={openCollapse === name}
					onClick={() => (openCollapse === name ? setOpenCollapse(false) : setOpenCollapse(name))}>
					{collapse ? renderCollapse(collapse) : null}
				</SidenavCollapse>
			);
		} else if (type === 'title') {
			returnValue = (
				<VuiTypography
					key={key}
					display='block'
					variant='caption'
					fontWeight='bold'
					color='white'
					textTransform='uppercase'
					pl={3}
					my={3}
					ml={1}>
					{title}
				</VuiTypography>
			);
		} else if (type === 'divider') {
			returnValue = <Divider key={key} />;
		}

		return returnValue;
	});

	return (
		<SidenavRoot {...rest} variant='permanent' ownerState={{ miniSidenav, transparentSidenav }}>
			<Scrollbars
				autoHide
				autoHideTimeout={1000}
				renderThumbVertical={renderThumb}
				renderTrackVertical={window.location.href.includes('rtl') ? renderTrackRTL : renderTrack}
				renderView={window.location.href.includes('rtl') ? renderViewRTL : renderView}>
				<VuiBox
					display='flex'
					sx={{ flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
					<VuiBox pt={3} pb={1} px={4} textAlign='center'>
						<VuiBox
							display={{ xs: 'block', xl: 'none' }}
							position='absolute'
							top={0}
							right={0}
							p={1.625}
							onClick={closeSidenav}
							sx={{ cursor: 'pointer' }}>
							<VuiTypography variant='h6' color='white'>
								<Icon sx={{ fontWeight: 'bold' }}>close</Icon>
							</VuiTypography>
						</VuiBox>
						<VuiBox component={NavLink} to='/' display='flex' alignItems='center'>
							<VuiBox
								sx={
									((theme) => sidenavLogoLabel(theme, { miniSidenav }),
									{
										display: 'flex',
										alignItems: 'center',
										margin: '0 auto'
									})
								}>
								<VuiBox
									display='flex'
									sx={
										((theme) => sidenavLogoLabel(theme, { miniSidenav, transparentSidenav }),
										{
											mr: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : 1
										})
									}>
									<SimmmpleLogo size='24px' />
								</VuiBox>
								<VuiTypography
									variant='button'
									textGradient={true}
									color='logo'
									fontSize={14}
									letterSpacing={2}
									fontWeight='medium'
									sx={
										((theme) => sidenavLogoLabel(theme, { miniSidenav, transparentSidenav }),
										{
											opacity: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : 1,
											maxWidth: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : '100%',
											margin: '0 auto'
										})
									}>
									{brandName}
								</VuiTypography>
							</VuiBox>
						</VuiBox>
						<Divider light />
					</VuiBox>
					<List sx={{ mb: 'auto' }}>{renderRoutes}</List>
					<VuiBox pt={2} mx={2} mb={2}>
						<SidenavCard />
					</VuiBox>
				</VuiBox>
			</Scrollbars>
		</SidenavRoot>
	);
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
	color: 'info',
	brand: ''
};

// Typechecking props for the Sidenav
Sidenav.propTypes = {
	color: PropTypes.oneOf([ 'primary', 'secondary', 'info', 'success', 'warning', 'error', 'dark' ]),
	brand: PropTypes.string,
	brandName: PropTypes.string.isRequired,
	routes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Sidenav;
