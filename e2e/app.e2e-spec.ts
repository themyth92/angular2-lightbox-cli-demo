import { Angular2LightboxCliPage } from './app.po';

describe('angular2-lightbox-cli App', () => {
  let page: Angular2LightboxCliPage;

  beforeEach(() => {
    page = new Angular2LightboxCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
