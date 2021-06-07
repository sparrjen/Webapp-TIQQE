//Lambda function for creating employee and sending to DynamoDb

// Loads in the AWS SDK
const AWS = require('aws-sdk');

// Creates the document client specifing the region 
// The tutorial's table is 'in eu-north-1'
const ddb = new AWS.DynamoDB.DocumentClient({region: 'eu-north-1'});

exports.handler = async (event, context, callback) => {

    if(event.firstname && event.lastname && event.email && event.employeeId) {
        // Handle promise fulfilled/rejected states
        await createEmployee(event).then(() => {
            callback(null, {
                statusCode: 201,
                body: '',
                headers: {
                    'Access-Control-Allow-Origin' : '*'
                }    
            });
        }).catch((err) => {
            console.error(err)
        })
    } else {
        callback(null, {
            statusCode: 400,
            body: 'Bad Request',
            headers: {
                'Access-Control-Allow-Origin' : '*'
            }
        });
    }
};

// Function createEmployee
// Writes employee to DynamoDb table Employees 
function createEmployee(event) {
    
    const params = {
        TableName: 'Employees',
        Item: {
            'firstname' : event.firstname,
            'lastname' : event.lastname,
            'email' : event.email,
            'employeeId' : event.employeeId
        }
    }

    return ddb.put(params).promise();
}
