import { mainStyles } from '@/styles/mainStyles';
import { Link } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';

const image = require('../assets/images/logo_we.jpg');

export default function Index() {
	return (
		<View style={{ ...mainStyles.background, ...mainStyles.main }}>
			<Image source={image} style={{ width: 100, height: 100 }} />
			<Text
				style={{
					fontWeight: '600',
					fontSize: 20,
					textAlign: 'center',
					paddingHorizontal: 40,
					marginVertical: 20,
				}}
			>
				Bienvenido a nuestra app educativa
			</Text>
			<Text>Aprende React Native y Expo Router paso a paso</Text>
			<Link style={mainStyles.mainButton} href="/calculator">
				<Pressable
					style={({ pressed }) => ({
						opacity: pressed ? 0.2 : 1,
					})}
				>
					<Text style={mainStyles.mainText}>Calculator</Text>
				</Pressable>
			</Link>
		</View>
	);
}
