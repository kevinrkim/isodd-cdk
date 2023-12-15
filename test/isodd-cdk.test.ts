// @ts-ignore
import { handler } from '../lambda/isodd';


describe('isodd lambda function', () => {
    it('should return "Your input is odd!" when called with an odd number', async () => {
        const event = {
            queryStringParameters: {
                input: '3'
            }
        };

        const result = await handler(event);

        expect(result.statusCode).toBe(200);
        expect(result.body).toBe('{\"message\":\"Your input is odd!\"}');
    });

    it('should return "Your input is even!" when called with an even number', async () => {
        const event = {
            queryStringParameters: {
                input: '4'
            }
        };

        const result = await handler(event);

        expect(result.statusCode).toBe(200);
        expect(result.body).toBe('{\"message\":\"Your input is even!\"}');
    });

    it('should return "Your input is not a valid integer!" when called with a non-integer value', async () => {
        const event = {
            queryStringParameters: {
                input: 'abc'
            }
        };

        const result = await handler(event);

        expect(result.statusCode).toBe(200);
        expect(result.body).toBe('{\"message\":\"Your input is not a valid integer!\"}');
    });
});
