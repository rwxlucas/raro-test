export const whereBegin = (current: number, length: number, quantity: number) => {
	if (current == length - 1 && current != 1) return 2;
	if (current < 5) return 1;
	if (current == quantity) return current - 4;
	if (current == quantity - 1) return current - 3;
	return current - 2;
}

export const adjustArray = (current: number, quantity: number, olderArray: number[]) => {
	const newArray = olderArray.map(item => item == current ? `**${item}**` : `${item}`);
	if (quantity > 5) {
		if (current != 1 && current > 3) newArray.unshift('...');
		if (current >= 1 && quantity > 5 && current != quantity && current < quantity - 2) newArray.push('...');
	}
	return newArray;
}