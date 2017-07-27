import { UserchatboxPage } from './app.po';

describe('userchatbox App', () => {
  let page: UserchatboxPage;

  beforeEach(() => {
    page = new UserchatboxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
