import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';


const TOTAL_PAGES = 5;

const HomePage = () => {
	const [loading, setLoading] = useState(true);
	const [allUsers, setAllUsers] = useState([]);
	const [pageNum, setPageNum] = useState(1);
	const [lastElement, setLastElement] = useState(null);

	const observer = useRef(
		new IntersectionObserver((entries) => {
			const first = entries[0];
			if (first.isIntersecting) {
				setPageNum((no) => no + 1);
			}
		})
	);

	const callUser = async () => {
		setLoading(true);
		let response = await axios.get(
			`https://randomuser.me/api/?page=${pageNum}&results=25&seed=abc`
		);
		let all = new Set([...allUsers, ...response.data.results]);
		setAllUsers([...all]);
		setLoading(false);
	};

	useEffect(() => {
		if (pageNum <= TOTAL_PAGES) {
			callUser();
		}
	}, [pageNum]);

	useEffect(() => {
		const currentElement = lastElement;
		const currentObserver = observer.current;

		if (currentElement) {
			currentObserver.observe(currentElement);
		}

		return () => {
			if (currentElement) {
				currentObserver.unobserve(currentElement);
			}
		};
	}, [lastElement]);

	const UserCard = ({ data }) => {
		return (
		
			<div className='p-4 border border-gray-500 rounded bg-white'>
				<ul  className="outside">
					<div>
						<div className='pictureposition'>
						<img
							src={data.picture.medium}
							className='w-20 h-20 rounded-full border-4 border-green-600'
							alt='user'
						/>
						</div>
				<li>
					<div className='ml-3'>
						<p className='text-base font-bold'>
							{data.name.first} {data.name.last}
						</p>
				
						<p className='text-sm text-gray-500 break-all'>
							{data.phone}
						</p>
					</div>
				</li>
				
				</div>
				</ul>
			</div>
		);
	};

	return (
		<div className='fullbg'>
		<div className='mx-44 p-6'>
            <div className="d-table">
            <h1 className='d-table-cell'>
			
			CONTACT LIST</h1>
            <div class="d-table-cell tar">
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
            </div>
            </div>
		
			<div className='grid grid-cols-3 gap-4'>
				{allUsers.length > 0 &&
					allUsers.map((user, i) => {
						return i === allUsers.length - 1 &&
							!loading &&
							pageNum <= TOTAL_PAGES ? (
							<div
								key={`${user.name.first}-${i}`}
								ref={setLastElement}
							>
								<UserCard data={user} />
							</div>
						) : (
							<UserCard
								data={user}
								key={`${user.name.first}-${i}`}
							/>
						);
					})}
			</div>
			{loading && <h2 className='text-center'>Loading...</h2>}

			{pageNum - 1 === TOTAL_PAGES && (
				<h3 className='text-center my-10'>Thank You ♥</h3>
			)}
          
		</div>
		</div>
	);
};

export default HomePage;

