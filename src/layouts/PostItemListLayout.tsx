import React from 'react'
import { Card } from 'primereact/card'

export const PostItemListLayout = (props) => {

	const header = (
		<img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" alt="Card" src="https://dummyimage.com/380x270/f8f8f8" />
	);

	return (
		<div className="col-12 mb-4">
			<div className="card card--post card--post__list">
				<Card title={props.title} header={header} className="d-flex">
					<div className="row m-0 mb-3">
						<div className="col-md-auto ps-0">
							<strong>Author</strong>: { props.userId }
						</div>
						<div className="col-md-auto pe-0">
							<strong>Post</strong>: { props.id }
						</div>
					</div>
					<p className="m-0">
						{props.body}
					</p>
				</Card>
			</div>
		</div>
	)
}
