require('dotenv').config();
/**
 * Used to store any configurations you may need to interact with external services within your test framework
 */
export class TestConfig {
  /**
   * Returns the HTTP Endpoint address for the system under test
   * @returns the base URL, over-ridden by .env if it exists.
   */
  static getBaseUri(): string {
    // Please replace this with the api you're interacting with
    return process.env.BASE_URI || 'https://reqres.in/api/';
  }
}
