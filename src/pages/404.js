export default function notFound() {
	return (
		<div className="flex flex-col w-full items-center justify-center min-h-screen bg-white dark:bg-[#171719]">
			<div className="sm:w-full sm:max-w-sm p-8 w-full">
				<h1 className="text-center mb-1 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">404</h1>
				<h2 className="text-center sm:text-xl text-base text-gray-900 mb-8 dark:text-white">Page not found</h2>
			</div>
		</div>
	);
}
