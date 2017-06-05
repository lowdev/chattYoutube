import { ChattYtubePage } from './app.po';

describe('chatt-ytube App', () => {
  let page: ChattYtubePage;

  beforeEach(() => {
    page = new ChattYtubePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
