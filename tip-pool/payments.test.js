describe("createCurPayment test", () => {
  
    it('should return object with payment info', () => {
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
      expect(createCurPayment()).toEqual( {billAmt: '100', tipAmt: '10', tipPercent: calculateTipPercent(100, 10)})
    });

    it('should return undefined because bill is empty', () => {
        billAmtInput.value = "";
        tipAmtInput.value = 10;
        expect(createCurPayment()).toEqual(undefined)
    });

    it('should return undefined because tip is epmty', () => {
        billAmtInput.value = 100;
        tipAmtInput.value = "";
      expect(createCurPayment()).toEqual(undefined)
    });
  
    it('should return undefined because tip is a string', () => {
        billAmtInput.value = 100;
        tipAmtInput.value = "hello";
      expect(createCurPayment()).toEqual(undefined)
    });

    it('should return undefined because bill is a string', () => {
        billAmtInput.value = "hello";
        tipAmtInput.value = 10;
      expect(createCurPayment()).toEqual(undefined)
    });
  
    afterEach(() => {
      // teardown logic
      billAmtInput.value = "";
      tipAmtInput.value = "";
    });
});
  

describe("submitPaymentInfo test", () => {
  
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
      });

    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
        submitPaymentInfo();
        
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual(20);   
        
        allPayments = {};
    });
    
    it('should not add a new payment on submitPaymentInfo() with empty input', function () {
        billAmtInput.value = '';
        submitPaymentInfo();
        
        expect(Object.keys(allPayments).length).toEqual(0);
    });

    afterEach(() => {
        // teardown logic
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });
});