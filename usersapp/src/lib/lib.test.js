import {filter} from './lib';
it("testing library filter()", () => {
    let mockPredicate = jest.fn(value => value % 2 == 0);
    let data = [4,3,1];
    let result = filter(data, mockPredicate);
    expect(result.length).toBe(2);
});