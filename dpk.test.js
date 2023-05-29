const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Returns the given partitionKey as a string", ()=>{
    const trivialKey = deterministicPartitionKey({partitionKey: 1});
    expect(trivialKey).toBe("1");
  })
  it('Return the given partitionKey', ()=>{
    const trivialKey = deterministicPartitionKey({partitionKey: '10'});
    expect(trivialKey).toBe("10");
  })
  it('Return the given partitionKey', ()=>{
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey.length).toBeLessThanOrEqual(256);
  })
});
