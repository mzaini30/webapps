import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import inspector from 'vite-plugin-vue-inspector'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
  vue(),
   Components({
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
      Pages({
      extensions: ['vue', 'md'],
    }),
      inspector()
  ]
})
