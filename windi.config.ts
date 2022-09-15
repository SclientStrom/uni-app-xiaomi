import { defineConfig } from 'windicss/helpers'
import Forms from 'windicss/plugin/forms'
import LineClamp from 'windicss/plugin/line-clamp'
export default defineConfig({
  plugins: [Forms,LineClamp],
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
})