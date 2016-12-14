import { NbaPickemPage } from './app.po';

describe('nba-pickem App', function() {
  let page: NbaPickemPage;

  beforeEach(() => {
    page = new NbaPickemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
