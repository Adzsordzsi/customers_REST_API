import newman from 'newman'
import customer_1_contract from './contracts/customer_1_contract.postman_collection.json' assert { type: "json" };
import customer_2_contract from './contracts/customer_2_contract.postman_collection.json' assert { type: "json" };

// region Test for customer 1 contract
export const test_contract_for_customer_1 = function (){
    console.log("Testing contract for costumer 1");
    newman.run({
        collection: customer_1_contract,
        reporters: 'cli',
    })
}
// endregion

// region Test for customer 2 contract
export const test_contract_for_customer_2 = function (){
    console.log("Testing contract for costumer 2");
    newman.run({
        collection: customer_2_contract,
        reporters: 'cli',
    })
}
// endregion
