import { ToCharPipe } from './to-char.pipe';

describe('ToCharPipe', () => {
  it('create an instance', () => {
    const pipe = new ToCharPipe();
    expect(pipe).toBeTruthy();
  });
});
