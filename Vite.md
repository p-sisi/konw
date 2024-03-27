## Vite

vite.config.ts配置文件

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';

export default defineConfig(() => {
  return {
    resolve: {
      //将src路径相对于@
      alias: {
        '@': '/src'
      }
    },
    plugins: [
      vue(),
    ],
  }
})
```

