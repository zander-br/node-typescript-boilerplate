import great from '../../src/index';

describe('Gretting', () => {
  it('Should return the correct greeting', () => {
    const name = 'Zander';
    const response = great(name);

    expect(response).toEqual(`Hello ${name}`);
  });
});
