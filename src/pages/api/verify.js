export default function handler(req, res) {
	if (req.method === 'POST') {
		const { title, password } = req.body;

		switch (title.text) {
			case 'Enter password:':
				if (password === 'password') {
					res.status(200).json({ title: { text: 'Password is incorrect.', color: 'text-red-500 dark:text-red-500' } });
				} else {
					res.status(200).json({ title: { text: 'Enter password:', color: 'text-red-500 dark:text-red-500' } });
				}
				break;
			case 'Password is incorrect.':
				if (password === 'incorrect') {
					res.status(200).json({ title: { text: 'Try again.', color: 'text-red-500 dark:text-red-500' } });
				} else {
					res.status(200).json({ title: { text: 'Password is incorrect.', color: 'text-red-500 dark:text-red-500' } });
				}
				break;
			case 'Try again.':
				if (password === 'again') {
					res.status(200).json({ title: { text: 'Try again later.', color: 'text-red-500 dark:text-red-500' } });
				} else {
					res.status(200).json({ title: { text: 'Try again.', color: 'text-red-500 dark:text-red-500' } });
				}
				break;
			case 'Try again later.':
				if (password === 'again later') {
					res.status(200).json({ title: { text: 'Correct', color: 'text-gray-900 dark:text-white' } });
				} else {
					res.status(200).json({ title: { text: 'Try again later.', color: 'text-red-500 dark:text-red-500' } });
				}
				break;
			default:
				res.status(200).json({ title: { text: 'Enter password', color: 'text-gray-900 dark:text-white' } });
		}
	} else {
		res.status(405).json({ message: 'Method Not Allowed' });
	}
}
