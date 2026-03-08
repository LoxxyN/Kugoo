import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
			'@components': resolve(__dirname, './components'),
			'@utils': resolve(__dirname, './utils'),
			'@layouts': resolve(__dirname, './layouts'),
			'@interfaces': resolve(__dirname, './interfaces'),
			'@icons': resolve(__dirname, './public/icons'),
			'@hooks': resolve(__dirname, './hooks'),
			'@pages': resolve(__dirname, './pages'),
			'@store': resolve(__dirname, './store'),
			'@services': resolve(__dirname, './services'),
		},
	},
})
