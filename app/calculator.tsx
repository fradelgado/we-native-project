import CalculatorButton from '@/components/CalculatorButton';
import ThemeText from '@/components/ThemeText';
import { Colors } from '@/constants/themes';
import { globalStyles } from '@/styles/calculatorStyles';
import React from 'react';
import { View } from 'react-native';

const index = () => {
	return (
		<View style={globalStyles.calculatorContainer}>
			<ThemeText lines={1}>50x50</ThemeText>
			<ThemeText variant={'h2'} lines={1}>
				25000
			</ThemeText>
			<View style={globalStyles.row}>
				<CalculatorButton
					label="C"
					color={Colors.lightGray}
					isBlack
					onPress={() => {}}
				/>
				<CalculatorButton
					label="+/-"
					color={Colors.lightGray}
					isBlack
					onPress={() => {}}
				/>
				<CalculatorButton
					label="del"
					color={Colors.lightGray}
					isBlack
					onPress={() => {}}
				/>
				<CalculatorButton label="÷" color={Colors.orange} onPress={() => {}} />
			</View>
			<View style={globalStyles.row}>
				<CalculatorButton label="7" onPress={() => {}} />
				<CalculatorButton label="8" onPress={() => {}} />
				<CalculatorButton label="9" onPress={() => {}} />
				<CalculatorButton label="x" color={Colors.orange} onPress={() => {}} />
			</View>
			<View style={globalStyles.row}>
				<CalculatorButton label="4" onPress={() => {}} />
				<CalculatorButton label="5" onPress={() => {}} />
				<CalculatorButton label="6" onPress={() => {}} />
				<CalculatorButton label="-" color={Colors.orange} onPress={() => {}} />
			</View>
			<View style={globalStyles.row}>
				<CalculatorButton label="1" onPress={() => {}} />
				<CalculatorButton label="2" onPress={() => {}} />
				<CalculatorButton label="3" onPress={() => {}} />
				<CalculatorButton label="+" color={Colors.orange} onPress={() => {}} />
			</View>
			<View style={globalStyles.row}>
				<CalculatorButton label="0" doubleSize onPress={() => {}} />
				<CalculatorButton label="." onPress={() => {}} />
				<CalculatorButton label="=" color={Colors.orange} onPress={() => {}} />
			</View>
		</View>
	);
};

export default index;
