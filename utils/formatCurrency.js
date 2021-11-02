const formatter = new Intl.NumberFormat('en', {
	style: 'currency',
	currency: 'USD',
})

export default function formatCurrency(amount) {
	return formatter.format(amount)
}
