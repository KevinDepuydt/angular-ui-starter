import { MeanStarterPage } from './app.po';

describe('angular-ui-starter App', () => {
  let page: MeanStarterPage;

  beforeEach(() => {
    page = new MeanStarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
