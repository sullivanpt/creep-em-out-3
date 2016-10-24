import { CreepEmOut3Page } from './app.po';

describe('creep-em-out-3 App', function() {
  let page: CreepEmOut3Page;

  beforeEach(() => {
    page = new CreepEmOut3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
