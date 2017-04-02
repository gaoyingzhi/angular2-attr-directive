import { Ng2AttrDirectivePage } from './app.po';

describe('ng2-attr-directive App', () => {
  let page: Ng2AttrDirectivePage;

  beforeEach(() => {
    page = new Ng2AttrDirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
