/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};
