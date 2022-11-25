import axios from "axios";
import {test_contract_for_customer_2} from "../contract_testing.js";
console.log("Starting costumer 2");

let URL ="http://localhost:8080/costumers"

// region Testing Contract ----------------------------------------------------------------------------------------------
test_contract_for_customer_2();
// endregion---------------------------------------------------------------------------------------------------------------

// region Getting response data
const get_response_data = async function () {
    let response = await axios.get(URL);
    return response.data;
}
// endregion

// region Creating result JSON for customer
const create_result_json = function (response_data) {

    for(const consumer_data in response_data.costumers){

        const costumer = response_data.costumers[consumer_data];

        let sum = 0;

        for(const product in costumer.financial_products){

            sum = (sum + costumer.financial_products[product].balance);

        }

        let result = {};

        result['name'] = costumer['name'];
        result['aggregated_balance'] = sum;

        console.log(result);

    }
}
// endregion

// region Running method for costumer
const run_consumer = async function () {

    try {

        const response_data = await get_response_data();
        create_result_json(response_data);

    } catch (err) {

        console.log("Error: " + err)

    }
}
// endregion

run_consumer().then(() => console.log('Consumer 2 finished'));