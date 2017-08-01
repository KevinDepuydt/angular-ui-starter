import { AngularUIStarterPage } from './app.po';

describe('angular-ui-starter App', () => {
  let page: AngularUIStarterPage;

  beforeEach(() => {
    page = new AngularUIStarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
