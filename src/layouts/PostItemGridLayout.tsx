import React from "react";
import { Card } from "primereact/card";
import { Link } from "react-router-dom";

export const PostItemGridLayout:React.FC = ( props ) => {
	const header = (
		<img alt="Card" src="https://dummyimage.com/380x270/f8f8f8" />
	);
	const footer = (
		// @ts-ignore
		<Link to={ `/posts/${ props.id }` } className="p-button p-component">
			Full page
		</Link>
	);
	return (
		<div className="col-md-6 col-lg-4 col-xxl-3 mb-4">
			<div className="card card--post flex justify-content-center">
				{/*@ts-ignore*/}
				<Card title={ props.title } header={ header } footer={ footer}  className="md:w-25rem">
					<div className="row justify-content-between m-0 mb-3">
						<div className="col-md-auto ps-0">
							{/*@ts-ignore*/}
							<strong>Author</strong>: { props.userId }
						</div>
						<div className="col-md-auto pe-0">
							{/*@ts-ignore*/}
							<strong>Post</strong>: { props.id }
						</div>
					</div>
					<p className="mt-0">
						{/*@ts-ignore*/}
						{ props.body }
					</p>
				</Card>
			</div>
		</div>
	)
}
