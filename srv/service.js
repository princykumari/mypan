const axios = require('axios');
module.exports = async function () {
  // debugger;
  let = { PAN_Details_APR } = this.entities;
  console.log("triggered");
  // sending notification to mobile

   
  this.after('CREATE', 'PAN_Details_APR', async req => {
    
    console.log("req", req)
    // console.log("data", req.data)
    var pid = req.PAN_Number;


    try {
      
      let data = JSON.stringify({
        "alert": "Alert message",
        "badge": 1,
        "data": "{\"product\":\"computer\",\"count\":\"100\"}",
        "priority": "high",
        "sound": "DefaultNotificationSound",
        "apns": {
          "alertTitle": "The APNS title for the app",
          "alerSubtitle": "The subtitle",
          "alertBody": "The notification message"
        },
        "gcm": {
          "title": `new record of ${pid}` ,
          "icon": "The icon",
          "body": "The notification message",
          "sound": "OverrideSound"
        }
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://mobile-service-push.cfapps.us10.hana.ondemand.com/18f7366f-a4fa-4ea8-8246-8fcd12a6f7da/mobileservices/push/v1/backend/applications/com.sap.mdk/notifications',
        headers: {
          'x-api-key': 'c58bb4697fa8bd9829b78dfca104ae0efcbc4798202e86a5cd0ea7339b43b0d5',
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

    } catch (error) {
      console.log(error.message);
    }
  
  })
}





// const axios = require('axios');
// module.exports = async function () {
//   debugger;
//   let = { parent, Childrens } = this.entities;
//   console.log("triggered");
//   // sending notification to mobile

   
//   this.after('CREATE', 'parent', async req => {
//     console.log("req", req)
//     // console.log("data", req.data)
//     var pid = req.pid;
//     var pname = req.pname;

//     try {
      
//       let data = JSON.stringify({
//         "alert": "Alert message",
//         "badge": 1,
//         "data": "{\"product\":\"computer\",\"count\":\"100\"}",
//         "priority": "high",
//         "sound": "DefaultNotificationSound",
//         "apns": {
//           "alertTitle": "The APNS title for the app",
//           "alerSubtitle": "The subtitle",
//           "alertBody": "The notification message"
//         },
//         "gcm": {
//           "title": "new record of" + pid + " id and " + pname + " name created"  ,
//           "icon": "The icon",
//           "body": "The notification message",
//           "sound": "OverrideSound"
//         }
//       });

//       let config = {
//         method: 'post',
//         maxBodyLength: Infinity,
//         url: 'https://mobile-service-push.cfapps.us10.hana.ondemand.com/1b212b67-f3e1-4f9c-bc3a-6dcff214a409/mobileservices/push/v1/backend/applications/com.sap.mdk.demo2/notifications',
//         headers: {
//           'x-api-key': '2e6a9d17748b2739ce6ab58805c41d9e132b010fdd875cd2da1922a475e7c811',
//           'Content-Type': 'application/json'
//         },
//         data: data
//       };

//       axios.request(config)
//         .then((response) => {
//           console.log(JSON.stringify(response.data));
//         })
//         .catch((error) => {
//           console.log(error);
//         });

//     } catch (error) {
//       console.log(error.message);
//     }
  
//   })
// }


// Notification code in cap (service.js) 