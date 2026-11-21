import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <><img className="brand-light" width="142" src="/assets/logo/logo-light.svg" alt="BoundaryKit" /><img className="brand-dark" width="142" src="/assets/logo/logo-dark.svg" alt="BoundaryKit" /></>,
  project: { link: 'https://github.com/boundarykit/docs-nextra' },
  docsRepositoryBase: 'https://github.com/boundarykit/docs-nextra/tree/main',
  footer: { content: 'BoundaryKit documentation' }
}

export default config
