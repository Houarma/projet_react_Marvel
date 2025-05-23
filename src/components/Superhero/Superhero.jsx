import { useEffect, useState } from 'react';
import classes from './superhero.module.css';
import { createPortal } from 'react-dom';
export default function Superhero({
	Name = '',
	Description = "pas de descriptions pour l'instant",
	films = ['aucun film pour ce superhero'],
	photo = 'https://tse2.mm.bing.net/th?id=OIP.H1B3S6Zlfnj7gLImjrv_pwHaHa&pid=Api&P=0&h=220',
	details = 'Aucun nouveau details',
	onClickHandler,
	estLePreferer,
}) {
	const [showDetails, setShowDetails] = useState(false);
	const [showModals, setShowModal] = useState(false);
	useEffect(() => {
		if (showModals) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [showModals]);

	return (
		<div
			className={`${classes.superhero} ${
				estLePreferer && classes.superheroPreferer
			}`}
			onClick={() => {
				onClickHandler(Name);
			}}
			style={{ position: 'relative' }}
		>
			{showModals &&
				createPortal(
					<div
						style={{
							background: 'rgba(0, 0, 0, 0.9)',
							position: 'absolute',
							bottom: 0,
							right: 0,
							top: 0,
							left: 0,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
						onClick={(e) => {
							e.stopPropagation();
							setShowModal(false);
						}}
					>
						<div style={{ padding: 30, background: 'white' }}>
							<b>Informations</b>
							<ul>
								<li>Taille : 1,85</li>
								<li>Couleur des cheveux : Noirs</li>
								<li>Couleur des yeux : Bleus</li>
							</ul>
						</div>
					</div>,
					document.body
				)}
			<img src={photo} alt={`${Name} photo`} />
			<h2
				style={{
					cursor: 'pointer',
				}}
				onClick={(e) => {
					e.stopPropagation();
					setShowModal(true);
				}}
				className="text-xl font-bold"
			>
				{Name}
			</h2>
			<p>{Description}</p>
			<div
				className={` font-bold mb-[10px] cursor-pointer inline-block ${
					showDetails == false
						? `hover:text-red-marvel`
						: `hover:text-blue-400`
				} `}
				onClick={(event) => {
					setShowDetails((stateprecedent) => !stateprecedent);
					event.stopPropagation();
				}}
			>
				{showDetails ? `Masquer les details` : `En savoirs plus`}
			</div>

			{showDetails && (
				<div
					style={{
						whiteSpace: 'pre-line',
					}}
				>
					{details}
				</div>
			)}

			<div style={{ marginTop: 10 }}>
				<b>Films:</b>
				<ul>
					{films.map((film) => (
						<li key={film}>{film}</li>
					))}
				</ul>
			</div>
		</div>
	);
}
