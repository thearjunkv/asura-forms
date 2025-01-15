import { ConfigProvider, ThemeConfig } from 'antd';

type TTheme = {
	children: React.ReactNode;
	themeOverride?: ThemeConfig;
};

const defaultMonochromaticTheme: ThemeConfig = {
	token: {
		colorPrimary: 'hsl(0, 0%, 15%)',
		colorInfo: 'hsl(0, 0%, 15%)',
		colorPrimaryBg: 'hsl(0, 0%, 90%)',
		colorBgContainer: '#FFFFFF',
		colorText: 'hsl(0, 0%, 10%)',
		colorBorder: 'hsl(0, 0%, 88%)',
		borderRadius: 12,
		motionDurationFast: '0.1s',
		motionDurationMid: '0.1s',
		motionDurationSlow: '0.1s'
	}
};

export const Theme = ({ children, themeOverride }: TTheme) => {
	const mergedTheme = {
		...themeOverride,
		token: {
			...defaultMonochromaticTheme,
			...themeOverride?.token
		}
	};
	return <ConfigProvider theme={mergedTheme}>{children}</ConfigProvider>;
};
