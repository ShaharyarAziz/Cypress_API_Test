import { api_url } from "./common_file.cy";

describe('Restaurant Api Tests', () => {

    // it('POST API', () => {
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
    // });

    // it('Update Restaurant Media', () => {
    //     cy.request({
    //         method: 'POST',
    //         url: 'https://bsm-backend-production-f5e9.up.railway.app/restuarant/update-media?id=655f41ea50391f005a536035',
    //         headers: {
    //                         'Content-Type': 'application/json',
    //                         'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NWYzZDc1NTAzOTFmMDA1YTUzNWY1NSIsImVtYWlsIjoiYnNtY3g4NkBnbWFpbC5jb20iLCJ1c2VyX3R5cGUiOiJhZG1pbiIsImlhdCI6MTcwMzA1MzYyODA1MSwiZXhwIjoxNzAzMDU2MjIwMDUxfQ.rmv6QakZL6AvdTriPdxrhrzTFct6BLLc2puyaWPyb94`,

    //                     },
    //     })
    // });



});
describe('GET API', () => {
    // const api_url = 'https://bsm-backend-production-f5e9.up.railway.app/'
    it.only('Get Restaurants', () => {

        cy.request('GET', `${api_url}restuarant/?id=655f46fc50391f005a536765`).then((response) => {
            const restaurant_name = "The Modern Restaurant"
            const message = "restaurant fetched successfully"
            const number = "+9203145678901"
            const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            const actual_result_name = response.body.data.name
            const actual_result_message = response.body.message
            const actual_number = response.body.data.phone
            const actual_days = response.body.data.operational_hours
            // cy.log('Response:', JSON.stringify(response, null, 2))
            expect(actual_result_name).to.equal(restaurant_name)
            expect(actual_result_message).to.equal(message)
            expect(actual_number).to.equal(number)
            days.forEach(((day, index) => {

                expect(actual_days[index].day).to.equal(day)

            }))

        });
    })
});
describe('PUT API Request', () => {
    //  it('UPDATE RESTAURANT RECORD', () => {
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
    //         // expect(response.body.data.operational_hours.day).to.equal("Monday")
    //         expect(response.status).to.equal(200);


    //     });
    // });
});