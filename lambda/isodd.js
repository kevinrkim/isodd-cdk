exports.handler = async function(event) {
    try {
        const input = event.queryStringParameters?.input || '';
        let res;

        if (/[^0-9]/.test(input)) {
            res = `not a valid integer!`;
        } else {
            res = parseInt(input) % 2 == 1 ? 'odd!' : 'even!';
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: `Your input is ${res}` }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal server error!' }),
        };
    }
};