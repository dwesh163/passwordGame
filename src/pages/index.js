import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Index() {
	const [inputValue, setInputValue] = useState('');
	const [title, setTitle] = useState({ text: 'Enter password:', color: 'text-gray-900 dark:text-white' });

	const handleKeyPress = async (event) => {
		if (event.key === 'Enter') {
			const response = await fetch('/api/verify', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title: title, password: inputValue }) });
			const data = await response.json();
			setInputValue('');
			setTitle(data.title);
		}
	};

	return (
		<>
			<Head>
				<title>PasswordGame</title>
				<meta name="description" content="Can you find the password ??" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex flex-col w-full items-center justify-center min-h-screen bg-white dark:bg-[#171719]">
				<div className="sm:w-full flex flex-col items-center p-8 w-full">
					<h2 className={'text-center sm:text-3xl text-xl mb-6 ' + title.color}>{title.text}</h2>
					{title.text != 'Correct' ? (
						<>
							<div className="sm:w-full sm:max-w-sm w-full relative h-11 w-full min-w-[200px]">
								<input onKeyDown={handleKeyPress} value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="******" className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm text-center font-normal text-dark dark:text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200  disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-100" />
							</div>
						</>
					) : (
						<>
							<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHQzdHU3d2lmY2x1MTZwdzNveTJiY3ZpemJ0MDFnc3Uxdm1nMzRkcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/111ebonMs90YLu/200.gif" className="w-[95vh] mx-auto" />
						</>
					)}
				</div>
			</div>
		</>
	);
}
