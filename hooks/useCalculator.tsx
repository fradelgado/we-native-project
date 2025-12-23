import { useRef, useState } from 'react';

enum Operator {
	add = '+',
	substract = '-',
	multiply = 'x',
	divide = '÷',
}

export default function useCalculator() {
	const [formula, setFormula] = useState<string>('0');
	const [number, setNumber] = useState<string>('0');
	const [prevNumber, setPrevNumber] = useState<string>('0');
	const lastOperation = useRef<Operator>(null);

	const buildNumber = (numberString: string) => {
		console.log({ numberString });

		if (number.includes('.') && numberString === '.') return;
		if (number.startsWith('0') || number.startsWith('-0')) {
			if (numberString === '.') {
				setNumber(number + numberString);
			}
			if (numberString !== '0' && !number.includes('.')) {
				setNumber(numberString);
			}
		}
	};

	return {
		formula,
		number,
		prevNumber,

		buildNumber,
	};
}
