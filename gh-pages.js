import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/lumeriith/im-lume.git', // Update to point to your repository
		user: {
			name: 'Eunseop Shim', // update to use your name
			email: 'lumeriith@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
