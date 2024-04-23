import Card from "../card/card";

const Column = () => {
	const arr = [{
		text: 'Без статуса',
		cards: [
			{
				category: 'Web Design',
				description: 'Название задачи',
				date: '30.10.23',
				color: '_orange'
			},
			{
				category: 'Research',
				description: 'Название задачи',
				date: '30.10.23',
				color: '_green'
			},
			{
				category: 'Web Design',
				description: 'Название задачи',
				date: '30.10.23',
				color: '_orange'
			},
			{
				category: 'Copywriting',
				description: 'Название задачи',
				date: '30.10.23',
				color: '_purple'
			},
			{
				category: 'Web Design',
				description: 'Название задачи',
				date: '30.10.23',
				color: '_orange'
			}
		]
	}, {
		text: 'Нужно сделать',
		cards: [
			{
				category: 'Research',
				description: 'Название задачи',
				date: '30.10.23',
				color: '_green'
			}
		]
	}, {
		text: 'В работе',
		cards: [
			{
				category: 'Research',
				description: 'Название задачи',
				date: '30.10.23',
				color: '_green'
			},
			{
				category: 'Copywriting',
				description: 'Название задачи',
				date: '30.10.23',
				color: '_purple'
			},
			{
				category: 'Web Design',
				description: 'Название задачи',
				date: '30.10.23',
				color: '_orange'
			}
		]
	}, {
		text: 'Тестирование',
		cards: [
			{
				category: 'Research',
				description: 'Название задачи',
				date: '30.10.23',
				color: '_green'
			}
		]
	}, {
		text: 'Готово',
		cards: [
			{
				category: 'Research',
				description: 'Название задачи',
				date: '30.10.23',
				color: '_green'
			}
		]
	}]

	return (
		<>
			{arr.map((el) => {
			return <div className="main__column column">
				<div className="column__title">
					<p>{el.text}</p>
				</div>
				<div className="cards">
					{el.cards.map( cardEl => {
						return <Card category={cardEl.category} description={cardEl.description} date={cardEl.date} bgcolor={cardEl.color}></Card>
					})}
				</div>
			</div>
		})}
		</>
	);
}

export default Column;