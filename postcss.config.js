import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss'

// const IN_PRODUCTION = process.env.NODE_ENV === 'production'
const IN_PRODUCTION = process.env.NODE_ENV === 'disable'

export default {
  plugins: [
    IN_PRODUCTION &&
      // Reference https://github.com/Developmint/nuxt-purgecss/blob/main/src/config.ts
      purgeCSSPlugin({
        content: ['./**/*.html', './src/**/*.vue'],
        defaultExtractor(content) {
          const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '') // Remove inline vue styles

          return contentWithoutStyleBlocks.match(/[\w-.:/]+(?<!:)/g) || [] // Default extractor
        },
        safelist: [
          'body',
          'html',
          /-(leave|enter|appear)(|-(to|from|active))$/, // Normal transitions
          /^router-link(|-exact)-active$/, // Router link classes
          /^(?!(|.*?:)cursor-move).+-move$/, // Move transitions
          /.*data-v-.*/, // Keep scoped styles
          /^active/,
          // Vue3 selectors
          /:slotted/,
          /:deep/,
          /:global/,
          /nuxt-devtools-.*/,
          // Tailwind classes
          /.*-\[.*\]/, // Matches all classes with `-[...]` (Tailwind JIT classes)
          /^(!)?[a-z]+:!?.*/, // Matches responsive and important modifiers, like `md:!text-emerald-500`
          // OpenLayers CSS classes
          /^ol-/, // All OpenLayers classes starting with 'ol-'
          /^custom-zoom/, // Custom zoom control class
          // LayerSwitcher CSS classes
          /^layer-switcher/, // LayerSwitcher main classes
          /\.layer-switcher/, // LayerSwitcher selector classes
          'shown', // LayerSwitcher state classes
          // Cesium CSS classes
          /^cesium-/, // All Cesium classes starting with 'cesium-'
        ],
      }),
  ],
}
