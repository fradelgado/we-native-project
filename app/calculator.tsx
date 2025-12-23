import CalculatorButton from '@/components/CalculatorButton';
import ThemeText from '@/components/ThemeText';
import { Colors } from '@/constants/themes';
import useCalculator from '@/hooks/useCalculator';
import { globalStyles } from '@/styles/calculatorStyles';
import React from 'react';
import { View } from 'react-native';

export default function Calculator() {
	const { formula, number, prevNumber, buildNumber } = useCalculator();

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
				<CalculatorButton label="7" onPress={() => buildNumber('7')} />
				<CalculatorButton label="8" onPress={() => buildNumber('8')} />
				<CalculatorButton label="9" onPress={() => buildNumber('9')} />
				<CalculatorButton label="x" color={Colors.orange} onPress={() => {}} />
			</View>
			<View style={globalStyles.row}>
				<CalculatorButton label="4" onPress={() => buildNumber('4')} />
				<CalculatorButton label="5" onPress={() => buildNumber('5')} />
				<CalculatorButton label="6" onPress={() => buildNumber('6')} />
				<CalculatorButton label="-" color={Colors.orange} onPress={() => {}} />
			</View>
			<View style={globalStyles.row}>
				<CalculatorButton label="1" onPress={() => buildNumber('1')} />
				<CalculatorButton label="2" onPress={() => buildNumber('2')} />
				<CalculatorButton label="3" onPress={() => buildNumber('3')} />
				<CalculatorButton label="+" color={Colors.orange} onPress={() => {}} />
			</View>
			<View style={globalStyles.row}>
				<CalculatorButton
					label="0"
					doubleSize
					onPress={() => buildNumber('0')}
				/>
				<CalculatorButton label="." onPress={() => buildNumber('0')} />
				<CalculatorButton label="=" color={Colors.orange} onPress={() => {}} />
			</View>
		</View>
	);
}
