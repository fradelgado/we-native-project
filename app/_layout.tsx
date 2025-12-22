import { globalStyles } from '@/styles/calculatorStyles';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { View } from 'react-native';

export default function RootLayout() {
	const [] = useFonts({
		SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
	});

	return (
		<View style={globalStyles.background}>
			<Slot />
		</View>
	);
}
