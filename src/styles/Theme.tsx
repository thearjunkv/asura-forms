import { ConfigProvider } from 'antd';

const monochromaticTheme = {
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

export const Theme = ({ children }: { children: React.ReactNode }) => {
	return <ConfigProvider theme={monochromaticTheme}>{children}</ConfigProvider>;
};
