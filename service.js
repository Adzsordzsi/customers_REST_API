console.log("Starting service")
import http from "http";

const customers = {};
const key = 'costumers';
customers[key] = [];

// region Creating costumers
const consumer1 = {
    name: 'max mustermann',
    address: '1040 Wien Musterstrasse 13',
    birth_date: '1995.02.14',
    email: 'maxmus@gmail.com',
    status: 'positiv',
    more: 'something more1'
};
const consumer2 = {
    name: 'Margarethe Sauerwein',
    address: '9556 Hohenstein Feldkircher Strasse 56',
    birth_date: '1995.02.14',
    email: 'marsau@gmail.com',
    status: 'positiv',
    more: 'something more2'
};
const consumer3 = {
    name: 'Ralf Bungenberg',
    address: '1022 Wien Langenloiser Strasse 12',
    birth_date: '1995.02.14',
    email: 'ralbun@gmail.com',
    status: 'negativ',
    more: 'something more3'
};
const consumer4 = {
    name: 'Nelly Rippinger',
    address: '4183 Unterwaldschlag Schönaugasse 71',
    birth_date: '1995.02.14',
    email: 'nelrip@gmail.com',
    status: 'positiv',
    more: 'something more4'
};
var consumer5 = {
    name: 'Eberhard Büscher',
    address: '2483 Ebreichsdorf Im Astenfeld 34',
    birth_date: '1995.02.14',
    email: 'ebebues@gmail.com',
    status: 'negativ',
    more: 'something more5'
};
// endregion

// region Creating products
const apfel = {
    name: 'Apfel',
    balance: 5,
    product_code: '133-01',
    interest_rate: '3',
    among_others: 'something others'
};
const birne = {
    name: 'Birne',
    balance: 5,
    product_code: '189-01',
    interest_rate: '2',
    among_others: 'something others'
};
const wassermelon = {
    name: 'Wassermelon',
    balance: 5,
    product_code: '145-01',
    interest_rate: '9',
    among_others: 'something others'
};
const aprikose = {
    name: 'Aprikose',
    balance: 5,
    product_code: '177-01',
    interest_rate: '1',
    among_others: 'something others'
};
const himbeere = {
    name: 'Himbeere',
    balance: 5,
    product_code: '111-01',
    interest_rate: '7',
    among_others: 'something others'
};
const pflaume = {
    name: 'Pflaume',
    balance: 5,
    product_code: '100-01',
    interest_rate: '3',
    among_others: 'something others'
};
const pistazie = {
    name: 'Pistazie',
    balance: 5,
    product_code: '133-01',
    interest_rate: '7',
    among_others: 'something others'
};
const pfirsich = {
    name: 'Pfirsich',
    balance: 5,
    product_code: '133-01',
    interest_rate: '9',
    among_others: 'something others'
};
//endregion

// region Adding products to costumers
consumer1['financial_products'] =[]
consumer1['financial_products'].push(apfel);
consumer1['financial_products'].push(birne);
consumer1['financial_products'].push(wassermelon);

consumer2['financial_products'] =[]
consumer2['financial_products'].push(pfirsich);
consumer2['financial_products'].push(aprikose);
consumer2['financial_products'].push(pistazie);
consumer2['financial_products'].push(pflaume);
consumer2['financial_products'].push(wassermelon);

consumer3['financial_products'] =[]
consumer3['financial_products'].push(apfel);
consumer3['financial_products'].push(himbeere);

consumer4['financial_products'] =[]
consumer4['financial_products'].push(birne);
consumer4['financial_products'].push(himbeere);
consumer4['financial_products'].push(pistazie);
consumer4['financial_products'].push(wassermelon);

consumer5['financial_products'] =[]
consumer5['financial_products'].push(aprikose);
//endregion

//region Adding Costumers to costumers list
customers[key].push(consumer1);
customers[key].push(consumer2);
customers[key].push(consumer3);
customers[key].push(consumer4);
customers[key].push(consumer5);
//endregion

// region Starting the service
http.createServer(function (request, response) {

    if(request.method === 'GET' && request.url === "/costumers"){
        get_request_handler(response)
    }

}).listen(8080);

console.log('Server running on port 8080 and ')
// endregion

//region GET-request handler
const get_request_handler = function (response){
    response.writeHeader(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(customers,null, 1));
    response.end();
}
// endregion
