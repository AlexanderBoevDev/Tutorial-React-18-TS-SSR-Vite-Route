import React from 'react'
import { Paginator } from 'primereact/paginator'

export const PaginationComponent = ({ onChangePage,itemsCount }) => {

	const [first, setFirst] = React.useState(0)
	const [rows, setRows] = React.useState(8)

	const onPageChange = (event) => {
		setFirst(event.first)
		setRows(event.rows)
		onChangePage(event.page + 1)
	};

	return (
		<div className="col-12 my-3">
			<Paginator
				first={first}
				rows={rows}
				totalRecords={itemsCount}
				onPageChange={onPageChange}
			/>
		</div>
	)
}
