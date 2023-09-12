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

// @mui material components
import Card from '@mui/material/Card';
import CircularProgress from '@mui/material/CircularProgress';
import VuiBadgeDot from 'components/VuiBadgeDot';
// Vision UI Dashboard PRO React components
import VuiBox from 'components/VuiBox';
import VuiTypography from 'components/VuiTypography';
// porp-types is a library for typechecking of props
import PropTypes from 'prop-types';

// breakpoints
import breakpoints from 'assets/theme/base/breakpoints';

function ProgressDoughnutChart({ color, icon, title, count }) {
	const { values } = breakpoints;

	const renderBadgeDots = (label, color) => {
		return (
			<VuiBadgeDot
				variant='gradient'
				color={color}
				size='xs'
				badgeContent={label}
				font={{ color: 'text', weight: 'medium' }}
				px={0}
			/>
		);
	};

	return (
		<Card
			sx={({ breakpoints }) => ({
				[breakpoints.up('lg')]: {
					minHeight: '245px'
				},
				[breakpoints.up('xl')]: {
					minHeight: '270px'
				},
				[breakpoints.up('xxl')]: {
					minHeight: '300px'
				}
			})}>
			<VuiBox display='flex' justifyContent='space-between' alignItems='flex-start'>
				<VuiBox width='45%'>
					<VuiBox display='flex' alignItems='center'>
						<VuiBox
							width='45px'
							height='45px'
							display='grid'
							justifyContent='center'
							alignItems='center'
							borderRadius='md'
							shadow='md'
							color='white'
							bgColor={color}>
							{icon}
						</VuiBox>
						<VuiBox ml={2} lineHeight={1} display='flex' flexDirection='column'>
							<VuiTypography
								variant='button'
								fontWeight='medium'
								textTransform='capitalize'
								color='white'>
								{title}
							</VuiTypography>
							{count ? (
								<VuiTypography variant='lg' color='white' fontWeight='bold'>
									{count}
								</VuiTypography>
							) : null}
						</VuiBox>
					</VuiBox>
					<VuiBox display='flex' flexDirection='column' mt='33px'>
						{renderBadgeDots('Done', 'success')}
						{renderBadgeDots('In progress', 'white')}
					</VuiBox>
				</VuiBox>
				<VuiBox mt='20px' mr='40px'>
					<VuiBox sx={{ position: 'relative', display: 'inline-flex' }}>
						<CircularProgress
							variant='determinate'
							size={window.innerWidth >= values.lg && window.innerWidth < values.xl ? 140 : 170}
							value={60}
							color='success'
						/>
						<VuiBox
							sx={{
								top: 0,
								left: 0,
								bottom: 0,
								right: 0,
								position: 'absolute',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center'
							}}
						/>
					</VuiBox>
				</VuiBox>
			</VuiBox>
		</Card>
	);
}

// Setting default values for the props of ProgressDoughnutChart
ProgressDoughnutChart.defaultProps = {
	color: 'info',
	count: 0,
	height: '100%'
};

// Typechecking props for the ProgressDoughnutChart
ProgressDoughnutChart.propTypes = {
	color: PropTypes.oneOf([ 'primary', 'secondary', 'info', 'success', 'warning', 'error', 'dark' ]),
	icon: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
	count: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
	height: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
};

export default ProgressDoughnutChart;
