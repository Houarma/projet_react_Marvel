import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Superhero from './components/Superhero/Superhero';
import styled from 'styled-components';
import Superheros from './components/Superheros/Superheros';

export default function App() {
	//useState
	const [superheroPreferer, setSuperheroPreferer] = useState();

	const [newHero, setNewHero] = useState({
		nom: 'Anonyme',
		descripstions: '',
		details: '',
		newphoto: '',
	});
	//useeffect
	useEffect(() => {
		photo.current.focus();
	}, [newHero.nom, newHero.descripstions, newHero.newphoto]);
	useEffect(() => {
		nom.current.value = '';
		detail.current.value = '';
		description.current.value = '';
		photo.current.value = '';
	}, [newHero.nom]);
	//useref
	const nom = useRef();
	const description = useRef();
	const detail = useRef();
	const photo = useRef();
	//function
	const onClickHandler = (nom) => {
		setSuperheroPreferer(nom);
	};
	const saveTheHero = (e) => {
		e.preventDefault();
		setNewHero((ancienHero) => ({
			...ancienHero,
			nom: nom.current.value,
		}));
		setNewHero((ancienHero) => ({
			...ancienHero,
			descripstions: description.current.value,
		}));
		setNewHero((ancienHero) => ({
			...ancienHero,
			details: detail.current.value,
		}));
		setNewHero((ancienHero) => ({
			...ancienHero,
			newphoto: photo.current.value,
		}));
	};
	const Form = styled.div`
		padding: 15px;
		border: 1px solid black;
		background-color: ${newHero.nom != 'Anonyme'
			? 'green'
			: 'transparent'};
		&:hover {
			border: 1px solid #ed1d24;
		}
	`;
	return (
		<main>
			<img
				src="https://logos-world.net/wp-content/uploads/2020/11/Marvel-Logo-2000-2012.png"
				alt="logo marvel red"
				style={{
					width: 100,
				}}
				className="mx-auto mt-10 w-28"
			/>
			<Superheros>
				<Superhero
					Name="Iron Man"
					Description="Iron Man est un super-héros apparaissant dans les bandes
				dessinées américaines publiées par Marvel Comics . Co-créé par
				le scénariste et éditeur Stan Lee , développé par le
				scénariste Larry Lieber et conçu par les artistes Don Heck et
				Jack Kirby , le personnage est apparu pour la première fois
				dans Tales of Suspense #39 en 1962 ( couverture datée de mars
				1963) et a reçu son propre titre avec Iron Man #1 en 1968. "
					details="Peu
				après sa création, Iron Man est devenu un membre fondateur de
				l'équipe de super-héros, les Avengers , aux côtés de Thor ,
				Ant-Man , la Guêpe et Hulk . Les histoires d'Iron Man,
				individuellement et avec les Avengers, ont été publiées
				régulièrement depuis la création du personnage. "
					films={['Iron Man 1', 'Iron Man 2', 'Iron Man 3']}
					photo="https://wallpaperaccess.com/full/1110014.jpg"
					estLePreferer={superheroPreferer == 'Iron Man'}
					onClickHandler={(nom) => {
						setSuperheroPreferer(nom);
					}}
				/>
				<Superhero
					Name="Loki"
					Description="Loki Laufeyson ,  également connu par adoption sous
						le nom de Loki Odinson et par son titre de Dieu de la
						Malice ,  est un personnage incarné par Tom
						Hiddleston dans la franchise médiatique du Marvel
						Cinematic Universe (MCU) . "
					details="Basé sur le personnage de
						Marvel Comics du même nom , lui-même basé sur la divinité
						mythologique nordique du même nom , Loki a été introduit
						dans le film Thor (2011) et est depuis devenu un
						incontournable du MCU. En 2024 , le personnage est apparu
						dans sept films, la série live-action Loki (2021-2023), la
						métrage d'animation The Good, the Bart, and the Loki
						(2021)."
					photo="https://m.media-amazon.com/images/M/MV5BM2FiMjQ0ZjAtYzc1OC00NzgzLWIyNmQtYmIwYjdhZWM5MmRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
					estLePreferer={superheroPreferer == 'Loki'}
					onClickHandler={onClickHandler}
				/>
				<Superhero
					Name="Captain America"
					Description="Captain America is a superhero created by Joe Simon and
						Jack Kirby who appears in American comic books published
						by Marvel Comics. The character first appeared in Captain
						America Comics #1, published on December 20, 1940, by
						Timely Comics, a corporate predecessor to Marvel. Captain
						America's civilian identity is Steven Steve Rogers, a
						frail man enhanced to the peak of human physical
						perfection by an experimental super-soldier serum after
						joining the United States Army to aid the country's
						efforts in World War II. "
					details="Equipped with an American
						flag–inspired costume and a virtually indestructible
						shield, Captain America and his sidekick Bucky Barnes
						clashed frequently with the villainous Red Skull and other
						members of the Axis powers. In the war's final days, an
						accident left Captain America frozen in a state of
						suspended animation until he was revived in modern times.
						He resumes his exploits as a costumed hero and becomes the
						leader of the superhero team, the Avengers, but frequently
						struggles as a man out of time to adjust to the new era."
					photo="http://www.twincities.com/wp-content/uploads/2016/04/from-captain-america-civil-war-to-finding-dory-10-movies-to-look-forward-to-in-2016-734527.jpg"
					estLePreferer={superheroPreferer == 'Captain America'}
					onClickHandler={onClickHandler}
				/>
				<Superhero
					Name={newHero.nom}
					photo={
						newHero.newphoto != '' ? newHero.newphoto : undefined
					}
					Description={
						newHero.descripstions != ''
							? newHero.descripstions
							: undefined
					}
					details={
						newHero.details != '' ? newHero.details : undefined
					}
				/>
				<form className="p-[15px] bg-red-marvel text-white">
					<h3 className="text-center uppercase font-semibold my-5">
						Créez votre propre super-héros
					</h3>

					<label className="label" htmlFor="photo">
						Image
					</label>

					<input
						className="input"
						type="text"
						id="photo"
						name="photo"
						ref={photo}
					/>

					<label className="label" htmlFor="nom">
						Nom
					</label>

					<input
						className=" input"
						type="text"
						id="nom"
						name="nom"
						ref={nom}
					/>

					<label className="label" htmlFor="descriptions">
						Descriptions
					</label>

					<textarea
						className="input"
						name="descriptions"
						id="descriptions"
						ref={description}
					></textarea>

					<label htmlFor="details">Details</label>

					<textarea
						className="input"
						name="details"
						id="details"
						ref={detail}
					></textarea>

					<div
						style={{
							display: 'flex',
							justifyContent: 'end',
							marginTop: 5,
						}}
						onClick={(e) => saveTheHero(e)}
					>
						<button className="border-red-900 text-white px-3 py-1 rounded mt-5 hover:bg-red-400 duration-150">
							Modifier
						</button>
					</div>
				</form>
				{/* */}
			</Superheros>
		</main>
	);
}
