//Lambda function for creating employee and sending to DynamoDb
// Loads in the AWS SDK
const AWS = require('aws-sdk'); 

// Creates the document client specifing the region 
// The table is in 'eu-north-1'
const ddb = new AWS.DynamoDB.DocumentClient({region: 'eu-north-1'}); 

exports.handler = async (event, context, callback) => {
    // Handle promise fulfilled/rejected states
    await readEmployee().then(data => {
        data.Items.forEach(function(item) {
            console.log(item.email)
        });
        callback(null, {
            // If success return 200, and items
            statusCode: 200,
            body: data.Items,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        })
    }).catch((err) => {
        // If an error occurs write to the console
        console.error(err);
    })
};

// Function readEmployee
// Reads 100 employees from the DynamoDb table Employee
// Returns promise
function readEmployee() {
    const params = {
        TableName: 'Employees',
        Limit: 100
    }
    return ddb.scan(params).promise();
}