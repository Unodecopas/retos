const {calculateIntervalDays} = require('./index')
describe('fechas', () => {
    test("31/08/1995", () => {
        expect(calculateIntervalDays("31/08/1995")).toBe(10053)
    })
    test("01/01/2000", () => {
        expect(calculateIntervalDays("01/01/2000")).toBe(8469)
    })
    test("10/06/2024", () => {
        expect(calculateIntervalDays("10/06/2024")).toBe(-458)
    })
    test("2018-04-16", () => {
        expect(calculateIntervalDays("2018-04-16")).toBe(1789)
    })
    
})