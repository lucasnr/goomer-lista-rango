export function formatMoneyBRL(number) {
	return new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	}).format(number);
}

const days = new Map();
days.set(1, 'Domingo');
days.set(2, 'Segunda');
days.set(3, 'Terça');
days.set(4, 'Quarta');
days.set(5, 'Quinta');
days.set(6, 'Sexta');
days.set(7, 'Sábado');
export function parseDayOfWeek(day) {
	return days.get(day);
}

export function getDatesOfHour({ from, to }) {
	const fromDate = new Date();
	fromDate.setHours(from.substring(0, 2), from.substring(3, 5), 0);

	let toDate = new Date();
	toDate.setHours(to.substring(0, 2), to.substring(3, 5), 0);

	if (fromDate > toDate)
		toDate = new Date(toDate.getTime() + 24 * 60 * 60 * 1000);

	return {
		from: fromDate,
		to: toDate
	};
}
