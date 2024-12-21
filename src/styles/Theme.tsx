import { ConfigProvider } from 'antd';

const monochromaticTheme = {
	token: {
		colorPrimary: 'hsl(0, 0%, 50%)',
		colorInfo: 'hsl(0, 0%, 50%)',
		colorPrimaryBg: 'hsl(0, 0%, 90%)',
		colorBgContainer: '#FFFFFF',
		colorText: 'hsl(0, 0%, 10%)',
		colorBorder: 'hsl(0, 0%, 88%)',
		borderRadius: 4,
		fontSize: 12
	}
};

export const Theme = ({ children }: { children: React.ReactNode }) => {
	return <ConfigProvider theme={monochromaticTheme}>{children}</ConfigProvider>;
};
