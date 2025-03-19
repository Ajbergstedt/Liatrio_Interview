import axios from 'axios';
import { expect } from 'chai';

describe('Tests for Minification', () => {
  it('should return a minified JSON object with length less than 100 characters', async () => {
    const res = await axios.get('http://localhost:80/');
    const jsonLength = JSON.stringify(res.data).length;
    expect(jsonLength).to.be.below(100, `JSON length (${jsonLength}) exceeds 100 characters`);
  });
});