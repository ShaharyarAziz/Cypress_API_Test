describe('USER API Tests', () => {
    it('POST API', () => {
        //---------------User Creation----------------------//
        // cy.request({
        //     method: 'POST',
        //     url: 'https://bsm-backend-production-f5e9.up.railway.app/signup',
        //     body: {
        //         "email": "shaharyar.cx@gmail.com",
        //         "confirmEmail": "shaharyar.cx@gmail.com",
        //         "password": "shery123456",
        //         "confirmPassword": "shery123456",
        //         "user_type": "user",
        //         "device_token": "device_token"
        //     }

        // })
        //---------------Manager Creation----------------------//
        // cy.request({
        //     method: 'POST',
        //     url: 'https://bsm-backend-production-f5e9.up.railway.app/signup',
        //     body: {
        //         "email": "admintesters@gmail.com",
        //         "confirmEmail": "admintesters@gmail.com",
        //         "password": "shery123456",
        //         "confirmPassword": "shery123456",
        //         "user_type": "manager",
        //         "device_token": "device_token"
        //     }

        // })
        //---------------Waiter Creation----------------------//
        // cy.request({
        //     method: 'POST',
        //     url: 'https://bsm-backend-production-f5e9.up.railway.app/signup',
        //     body: {
        //         "email": "waitertesters@gmail.com",
        //         "confirmEmail": "waitertesters@gmail.com",
        //         "password": "shery123456",
        //         "confirmPassword": "shery123456",
        //         "user_type": "waiter",
        //         "device_token": "device_token"
        //     }

        // })
        //---------------Chef Creation----------------------//
        //     cy.request({
        //         method: 'POST',
        //         url: 'https://bsm-backend-production-f5e9.up.railway.app/signup',
        //         body: {
        //             "email": "cheftesters@gmail.com",
        //             "confirmEmail": "cheftesters@gmail.com",
        //             "password": "shery123456",
        //             "confirmPassword": "shery123456",
        //             "user_type": "chef",
        //             "device_token": "device_token"
        //         }

        //     })

    });
    //--------------- Login----------------------//
    it('Login POST REQUEST', () => {
        // cy.request({
        //     method: 'POST',
        //     url: 'https://bsm-backend-production-f5e9.up.railway.app/login',
        //     body: {
        //         "email": "cheftesters@gmail.com",
        //         "password": "shery123456",
        //         "user_type": "chef",
        //         "device_token": "device_token"
        //     }

        //})
        //---------------Waiter Login----------------------//
        // cy.request({
        //     method: 'POST',
        //     url: 'https://bsm-backend-production-f5e9.up.railway.app/login',
        //     body: {
        //         "email": "waitertesters@gmail.com",
        //         "password": "shery123456",
        //         "user_type": "waiter",
        //         "device_token": "device_token"
        //     }

        // })
        //---------------Manager Login----------------------//
        // cy.request({
        //     method: 'POST',
        //     url: 'https://bsm-backend-production-f5e9.up.railway.app/login',
        //     body: {
        //         "email": "admintesters@gmail.com",
        //         "password": "shery123456",
        //         "user_type": "manager",
        //         "device_token": "device_token"
        //     }

        // })

        //---------------User Login----------------------//
        // cy.request({
        //     method: 'POST',
        //     url: 'https://bsm-backend-production-f5e9.up.railway.app/login',
        //     body: {
        //         "email": "shaharyar.cx@gmail.com",
        //         "password": "12345678",
        //         "user_type": "user",
        //         "device_token": "device_token"
        //     }

        // }).then((response) => {

        //     // cy.log('Response', response);
        //     cy.log('Response:', JSON.stringify(response, null, 2));
        // });
        //---------------Forgot Password----------------------//
        //   cy.request({
        //     method: 'POST',
        //     url: 'https://bsm-backend-production-f5e9.up.railway.app/forget-password',
        //     body: {
        //         "email": "shaharyar.cx@gmail.com",
        //         "user_type": "user",
        //     }

        // })
        //---------------Logout----------------------//
        // cy.request({
        //     method: 'POST',
        //     url: 'https://bsm-backend-production-f5e9.up.railway.app/logout',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODEzNGZkNjI4NjY4MDAyZGUwOGRkMyIsImVtYWlsIjoic2hhaGFyeWFyLmN4QGdtYWlsLmNvbSIsInVzZXJfdHlwZSI6InVzZXIiLCJpYXQiOjE3MDI5NjgyODEwMDcsImV4cCI6MTcwMjk3MDg3MzAwN30.MWz9wiq_VbYneoo7VVKpx8ACutpnJW5pzXBqUyTgiQc`,

        //     },

        // })

        

    });

});
/--------------------------GET API---------------------------/
describe('GET API Test', () => {

    it('Refresh Token', () => {
        cy.request({
            method: 'POST',
            url: 'https://bsm-backend-production-f5e9.up.railway.app/accounts/refresh',
            body: {
                "refresh_token": "tBClwZGuKn05iLQt2apbiMaopHuwSvwFXJEhccKQokbxEQy32fjiNw14b47VJWDXFyYbnOKvCWJy2OqHNKmyGVd1OISQR24KHCmQ"
            }
        }).then((response => {
            cy.log('Response:', JSON.stringify(response.body, null, 2)); // Use console.log for test runner console
            cy.expect(response.status).to.equal(200);
        }))
    });

});

describe('PUT API Request', () => {
    it('Profile Update', () => {

    });
});
