const { Chrome } = require('navalia');
const { Navalia } = require('navalia');
const navalia = new Navalia();
const pageUrl = 'http://localhost:3000/api/';

describe('My Page Login', () => {
  let chrome = {};

  //Setting up a clean instance for each test
  beforeEach(() => {
    chrome = new Chrome();
  });

  //Tear down after each test
  afterEach(() => {
    return chrome.done();
  });

  afterAll(() => {
    return navalia.kill();
  });

  it.concurrent('should have an email input', () => {
    return navalia.run((chrome) => chrome.goto(`${pageUrl}auth/login`);
      .then(() => chrome.exists('[data-test="email"]'))
      .then((exists) => expect(exists).toEqual(true)))

  });

  it.concurrent('should have a password', () => {
    return navalia.run((chrome) => chrome.goto(`${pageUrl}sauth/login`);
      .then(() => chrome.exists('[data-test="password"]'))
      .then((exists) => expect(exists).toEqual(true)))
  });

  it.concurrent('should have have a submit button', () => {
    return navalia.run((chrome) => chrome.goto(`${pageUrl}auth/login`)
      .then(() => chrome.exists('[data-test="submit"]'))
      .then((exists) => expect(exists).toEqual(true)))
  });

});
