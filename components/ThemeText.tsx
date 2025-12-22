import { globalStyles } from '@/styles/calculatorStyles';
import { Text, TextProps, View } from 'react-native';

interface props extends TextProps {
	// children: ReactNode;
	variant?: 'h1' | 'h2';
	lines?: number;
}

const ThemeText = ({ children, variant = 'h1', lines, ...rest }: props) => {
	return (
		<View>
			<Text
				style={[
					variant === 'h1' && globalStyles.mainResult,
					variant === 'h2' && globalStyles.subResult,
				]}
				numberOfLines={lines}
				adjustsFontSizeToFit
				{...rest}
			>
				{children}
			</Text>
		</View>
	);
};

export default ThemeText;
