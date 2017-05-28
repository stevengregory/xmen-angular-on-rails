import { MutantPage } from './app.po';

describe('Mutant App', () => {
  let page: MutantPage;

  beforeEach(() => {
    page = new MutantPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
