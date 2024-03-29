const { app } = require('@azure/functions');
const users = require('../mock/users');


app.http('getUsers', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

       

        return { body: JSON.stringify(users) };
    }
});
