describe('POST API Test', () => {
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
        // //---------------Manager Login----------------------//
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
    // it('Get Restaurants', () => {
    //     cy.request('GET', 'https://bsm-backend-production-f5e9.up.railway.app/restuarant/all?offset=0&limit=2&search=&lat=45.4642 &radius=10000&long=9.1900').then((response) => {

    // cy.log('Response:', JSON.stringify(response, null, 2))

    //         expect(response.status).to.equal(200);

    //     });
    // })
    // it('Get All Cuisine Types', () => {
    //     cy.request({
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NWY0MzZmNTAzOTFmMDA1YTUzNjBjMSIsImVtYWlsIjoiZ3JlZ2dzbWFuYWdlckB5b3BtYWlsLmNvbSIsInVzZXJfdHlwZSI6Im1hbmFnZXIiLCJpYXQiOjE3MDMzMTE3NzgwMTMsImV4cCI6MTcwMzMxNDM3MDAxM30.TrXOrov3ddmsUBxhzVWm3dnB7CqAVYYbLF4zws5goFs`,
    //         },
    //         url: "https://bsm-backend-production-f5e9.up.railway.app/all_cuisine_types"
    //     }).then((response) => {
    //         // cy.log('Response:', JSON.stringify(response.body, null, 20) + '\nbody');
    //         expect(response.status).to.equal(200);
    //         cy.wrap(response.body.data).each((element) => {
    //             // Assert that each element has a 'name' property
    //             expect(element).to.have.property('_id').that.is.a('string');
    //             expect(element).to.have.property('name').that.is.a('string');

    //           });
    //     })
    // });
   
});


describe('Restaurant API TEST', () => {
    // it('UPDATE RESTAURANT RECORD', () => {
    //     cy.request({

    //         method: 'PUT',
    //         url: 'https://bsm-backend-production-f5e9.up.railway.app/restuarant',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NWYzZDc1NTAzOTFmMDA1YTUzNWY1NSIsImVtYWlsIjoiYnNtY3g4NkBnbWFpbC5jb20iLCJ1c2VyX3R5cGUiOiJhZG1pbiIsImlhdCI6MTcwMzA1MzYyODA1MSwiZXhwIjoxNzAzMDU2MjIwMDUxfQ.rmv6QakZL6AvdTriPdxrhrzTFct6BLLc2puyaWPyb94`,

    //         },

    //         body: {

    //             "restaurant_id": "655f41ea50391f005a536035",
    //             "name": "Greggs Dine In",
    //             "phone": "03123456789",
    //             "operational_hours": [
    //                 {
    //                     "id": "65770307c1d11b851a64d71f",
    //                     "day": "Monday",
    //                     "from": "10:00",
    //                     "to": "18:00"
    //                 },
    //                 {
    //                     "id": "65770307c1d11b851a64d720",
    //                     "day": "Tuesday",
    //                     "from": "09:00",
    //                     "to": "19:00"
    //                 },
    //                 {
    //                     "id": "65770307c1d11b851a64d721",
    //                     "day": "Wednesday",
    //                     "from": "11:00",
    //                     "to": "20:05"
    //                 },
    //                 {
    //                     "id": "65770307c1d11b851a64d722",
    //                     "day": "Thursday",
    //                     "from": "09:00",
    //                     "to": "01:00"
    //                 },
    //                 {
    //                     "id": "65770307c1d11b851a64d723",
    //                     "day": "Friday",
    //                     "from": "09:00",
    //                     "to": "18:00"
    //                 },
    //                 {
    //                     "id": "65770307c1d11b851a64d724",
    //                     "day": "Saturday",
    //                     "from": "09:00",
    //                     "to": "19:33"
    //                 },
    //                 {
    //                     "id": "65770307c1d11b851a64d725",
    //                     "day": "Sunday",
    //                     "from": "20:21",
    //                     "to": "18:21"
    //                 }
    //             ],
    //             //"remove_operational_hours": ["64e4b05742c213488c55d8f1"],
    //             //"add_cuisine_types": ["64e460adedced5460859f393"],
    //             "remove_cuisine_types": ["64e460adedced5460859f393"],
    //             //"remove_serving_types": ["64e5b316cf86b623dc178117"],
    //             "add_serving_types": ["64e5b316cf86b623dc178117"],
    //             "add_restaurant_vibe": ["64e5b1fecf86b623dc178110"],
    //             //"remove_restaurant_vibe": ["64e5b1fecf86b623dc178110"],
    //             "selected_image": "bd306e10-be6f-4319-ac00-f236dbc3fe79-test_picture_2.png",
    //             "post_code": "55000",
    //             "lat": "2.5",
    //             "long": "20.5",
    //             "city": "London"

    //         }

    //     }).then((response) => {

    //         cy.log('Response:', JSON.stringify(response, null, 2))
    //         expect(response.body.message).to.equal('restaurant updated successfully');
    //         expect(response.body.success).to.equal(1)
    //         expect(response.body.data.id).to.equal("655f41ea50391f005a536035")
    //         expect(response.body.data.operational_hours.day).to.equal("Monday")
    //         expect(response.status).to.equal(200);


    //     });
    // });
    // it('Add Restarant', () => {
    //     cy.request({
    //         method: 'POST',
    //         url: 'https://bsm-backend-production-f5e9.up.railway.app/restuarant',
    //         body: {

    //             "name": "Savour Foods",
    //             "email":"savourfoods@gmail.com",
    //             "country":"UK",
    //             "connect_acc_type":"company",
    //             "companyy_reg_number":"0516451678",
    //             "phone": "+447922020100",
    //             "about": "this is savour foods inside restuarant",
    //             "cuisine_types": ["64d5c5877e5c6c5425b97dd4",
    //                 "64d2220c319be2003f05fb91"],
    //             "city": "Rawalpindi",
    //             "address_words": "Bahria Town",
    //             "lat": " 73.0635",
    //             "long": "33.7132",
    //             "post_code": " SE57BT"
    //         }

    //     })
    // });

});