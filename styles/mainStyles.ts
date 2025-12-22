import { Colors } from '@/constants/themes';
import { StyleSheet } from 'react-native';

export const mainStyles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: '#fff',
	},
	main: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	mainButton: {
		borderWidth: 1,
		borderColor: '#1336a1ff',
		backgroundColor: '#1336a1ff',
		borderRadius: 10,
		paddingVertical: 15,
		paddingHorizontal: 25,
		marginTop: 20,
		marginBottom: 10,
	},
	mainText: {
		color: Colors.textPrimary,
	},
});
