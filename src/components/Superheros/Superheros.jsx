import './Superheros.css';
export default function Superheros(props) {
	return (
		<>
			<h2 className="text-3xl mt-3 uppercase font-semibold text-white">
				le top 3 des superheros
			</h2>
			<div className="superheros">{props.children}</div>
		</>
	);
}
