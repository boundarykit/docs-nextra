import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <><img className="brand-light" width="142" src="/assets/logo/logo-light.svg" alt="BoundaryKit" /><img className="brand-dark" width="142" src="/assets/logo/logo-dark.svg" alt="BoundaryKit" /></>,
  project: { link: 'https://github.com/boundarykit/docs-nextra' },
  docsRepositoryBase: 'https://github.com/boundarykit/docs-nextra/tree/main',
  footer: { content: <footer className="bk-foot"><strong>BoundaryKit</strong><a href="/documentation/architecture/">Runtime architecture</a><a href="/documentation/changelog/">Release notes</a></footer> }
}

export default config
