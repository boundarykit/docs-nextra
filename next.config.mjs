import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: false
})

export default withNextra({
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: { cpus: 4 }
})
