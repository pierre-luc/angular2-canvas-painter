import { Angular2CanvasPainterPage } from './app.po';

describe('angular2-canvas-painter App', function() {
  let page: Angular2CanvasPainterPage;

  beforeEach(() => {
    page = new Angular2CanvasPainterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
