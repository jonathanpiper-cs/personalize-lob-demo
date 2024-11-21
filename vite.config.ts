import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		{
			name: 'manual-cache',
			configureServer(server) {
				server.middlewares.use((req, res, next) => {
					res.setHeader('cache-control', 'no-store');
					next();
				});
			}
		}
	],
	build: {
		rollupOptions: {
			output: {
				interop: 'auto'
			}
		}
	},
	server: {
		host: 'localhost'
	},
	define: {
		'process.env': {}
	}
});
