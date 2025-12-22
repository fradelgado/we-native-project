import { Colors } from '@/constants/themes';
import { globalStyles } from '@/styles/calculatorStyles';
import { Pressable, Text } from 'react-native';

type props = {
	label: string;
	color?: string;
	isBlack?: boolean;
	doubleSize?: boolean;
	onPress: () => void;
};

const CalculatorButton = ({
	label,
	color = Colors.darkGray,
	isBlack,
	doubleSize = false,
	onPress,
}: props) => {
	return (
		<Pressable
			style={({ pressed }) => ({
				...globalStyles.button,
				backgroundColor: color,
				width: doubleSize ? 180 : 80,
				opacity: pressed ? 0.8 : 1,
			})}
			onPress={onPress}
		>
			<Text
				style={{
					...globalStyles.buttonText,
					color: isBlack ? 'black' : 'white',
				}}
			>
				{label}
			</Text>
		</Pressable>
	);
};

export default CalculatorButton;
