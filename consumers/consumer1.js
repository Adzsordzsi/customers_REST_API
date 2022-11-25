import axios from "axios";
import {test_contract_for_customer_1} from "../contract_testing.js";
console.log("Starting costumer 1");

let URL ="http://localhost:8080/costumers"

// region Testing Contract ----------------------------------------------------------------------------------------------
test_contract_for_customer_1();
// endregion---------------------------------------------------------------------------------------------------------------

// region Getting response data
const get_response_data = async function () {
    let response = await axios.get(URL);
    return response.data;
}
// endregion

// region Creating result JSON for customer
const create_result_json = function (response_data) {

    let costumers = {};
    const key = 'costumers';
    costumers[key] = [];

    for (const consumer_data in response_data.costumers) {

        const costumer = response_data.costumers[consumer_data];

        let result = {};

        result['name'] = costumer.name;
        result['email'] = costumer.email;
        result['status'] = costumer.email;

        costumers[key].push(result);
    }

    console.log(costumers);
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
//endregion

run_consumer().then(() => console.log('Consumer 1 finished'));



