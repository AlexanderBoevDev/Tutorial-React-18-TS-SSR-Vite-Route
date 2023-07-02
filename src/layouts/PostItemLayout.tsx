import React from 'react'
import { Card } from 'primereact/card'

export const PostItemLayout = (props) => {

	const header = (
		<img alt="Card" src="https://dummyimage.com/380x270/f8f8f8" />
	);

	return (
		<div className="col-md-6 col-lg-4 col-xxl-3 mb-4">
			<div className="card card--post flex justify-content-center">
				<Card title={props.title} header={header} className="md:w-25rem">
					<p className="m-0 mb-2">
						Author: { props.userId }
					</p>
					<p className="mt-0">
						{props.body}
					</p>
				</Card>
			</div>
		</div>
	)
}
