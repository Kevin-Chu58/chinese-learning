// svelte.config.js
import adapter from '@jill64/sveltekit-adapter-aws'

const config = {
  // ...
  kit: {
    adapter: adapter({
      name: 'chinese-learning',
      deploy: true,
      architecture: 'lambda-s3'
      // ...
      // Other Adapter Options
      // ...
    })
  }
}

export default config