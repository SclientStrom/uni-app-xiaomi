import { defineConfig, loadEnv } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log('viteEnv', env)
  return {
    plugins: [
      uni(),
      WindiCSS(),
    ],
    resolve: {
      alias: { '@': '/src/' },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
  }
})
