
describe('calucateMonthlyPayment Tests', () => {
  it('should calculate the monthly payment correctly', () =>  {
    expect(calculateMonthlyPayment({amount: 100000, years: 30, rate: 0.05})).toBe(537);
    expect(calculateMonthlyPayment({amount: 356231, years: 25, rate: 0.0678})).toBe(2468);
    expect(calculateMonthlyPayment({amount: 223400, years: 10, rate: 0.032})).toBe(2178);
  
    expect(calculateMonthlyPayment({amount: 100000, years: 0, rate: 0.05})).toBe(0);
    expect(calculateMonthlyPayment({amount: 100000, years: 30, rate: 0})).toBe(278);
    expect(calculateMonthlyPayment({amount: 0, years: 30, rate: 0.05})).toBe(0);
    expect(calculateMonthlyPayment({amount: "100000", years: 30, rate: 0.05})).toBe(0);
    expect(calculateMonthlyPayment({amount: NaN , years: 30 , rate: 0.05})).toBe(0);
  });
});


describe('setRateDecimal Test', () => {
  it("should return the interest rate as a decimal number", () => {
    expect(setRateDecimal(5)).toBe(0.05);
    expect(setRateDecimal(5.76)).toBe(0.0576);
    expect(setRateDecimal(3.12)).toBe(0.0312);
    expect(setRateDecimal(0)).toBe(0.00);

    expect(setRateDecimal(5.7612356)).toBeCloseTo(0.0576, 3);
    expect(setRateDecimal(5.768457)).toBeCloseTo(0.0576, 3);
  });
})


