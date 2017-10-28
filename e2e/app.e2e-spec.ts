import { GenewiaPage } from './app.po';

describe('genewia App', () => {
  let page: GenewiaPage;

  beforeEach(() => {
    page = new GenewiaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
