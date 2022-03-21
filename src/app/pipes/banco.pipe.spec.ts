import { BancoPipe } from './banco.pipe';

describe('BancoPipe', () => {
  it('create an instance', () => {
    const pipe = new BancoPipe();
    expect(pipe).toBeTruthy();
  });
});
