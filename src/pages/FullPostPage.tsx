import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import { Button } from "primereact/button";

export const FullPostPage:React.FC = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [post, setPost] = React.useState<{
		id: number;
		userId: number;
		title: string;
		body: string;
	}>();
	React.useEffect(() => {
		async function fetchPost() {
			try {
				const { data } = await axios.get( "http://localhost:4301/posts/" + id );
				setPost( data );
			} catch ( error ) {
				console.log( error );
				navigate("/posts");
			}
		}
		fetchPost();
	},[]);
	if (!post) {
		return (
			<div className="container-fluid container-xxl">
				Loading...
			</div>
		)
	}
	return (
		<div className="container-fluid container-xxl">
			<h1 className="mb-4">
				{ post.title }
			</h1>
			<div className="row mb-3">
				<div className="col-md-auto">
					<strong>Author</strong>: { post.userId }
				</div>
				<div className="col-md-auto">
					<strong>Post</strong>: { post.id }
				</div>
				<div className="col-12">
					<p>{ post.body }</p>
				</div>
				<div className="col-12 my-3">
					<Link to="/posts" className="p-button p-component me-3">
						Back
					</Link>
					<Link to={`/posts/${post.id}/edit`} className="p-button p-component">
						Edit
					</Link>
				</div>
			</div>
		</div>
	)
}
