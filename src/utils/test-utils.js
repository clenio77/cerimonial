export function createMockRouter(router) {
  return {
    basePath: '',
    pathname: '/',
    route: '/',
    asPath: '/',
    query: {},
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(undefined),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isReady: true,
    isLocaleDomain: false,
    isPreview: false,
    locale: 'pt-BR',
    locales: ['pt-BR', 'en-US'],
    defaultLocale: 'pt-BR',
    ...router,
  };
} 