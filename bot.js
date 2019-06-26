// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityHandler } = require('botbuilder');
const axios = require('axios')

class EchoBot extends ActivityHandler {
    constructor() {
        super();
        // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
        this.onMessage(async (context, next) => {
            var response = await axios.post('https://presidio-api.westeurope.cloudapp.azure.com/api/v1/projects/test/anonymize', {
              text: `${ context.activity.text }`,
              "analyzeTemplate": {
                "fields": [
                  {
                    "name": "EMAIL_ADDRESS"
                  },
                  {
                    "name": "CREDIT_CARD"
                  },
                  
                  {
                    "name": "PHONE_NUMBER"
                  },
                  
                  {
                    "name": "PERSON"
                  },
                  {
                    "name": "PASSPORT"
                  },
                  {
                    "name": "US_PASSPORT"
                  },
                  {
                    "name": "IBAN_CODE"
                  },
                  {
                    "name": "COMPANY_NAME"
                  }
                ]
              },
              "anonymizeTemplate": {
                "fieldTypeTransformations": [
                  {
                    "fields": [
                      {
                        "name": "EMAIL_ADDRESS"
                      }
                    ],
                    "transformation": {
                      "replaceValue": {
                        "newValue": "<EMAIL_ADDRESS>"
                      }
                    }
                  },
                  {
                    "fields": [
                      {
                        "name": "CREDIT_CARD"
                      }
                    ],
                    "transformation": {
                      "replaceValue": {
                        "newValue": "<CREDIT_CARD>"
                      }
                    }
                  },
                  {
                    "fields": [
                      {
                        "name": "IP_ADDRESS"
                      }
                    ],
                    "transformation": {
                      "replaceValue": {
                        "newValue": "<IP_ADDRESS>"
                      }
                    }
                  },
                  {
                    "fields": [
                      {
                        "name": "PHONE_NUMBER"
                      }
                    ],
                    "transformation": {
                      "replaceValue": {
                        "newValue": "<PHONE_NUMBER>"
                      }
                    }
                  },
                  {
                    "fields": [
                      {
                        "name": "US_BANK_NUMBER"
                      }
                    ],
                    "transformation": {
                      "replaceValue": {
                        "newValue": "<US_BANK_NUMBER>"
                      }
                    }
                  },
                  {
                    "fields": [
                      {
                        "name": "US_SSN"
                      }
                    ],
                    "transformation": {
                      "replaceValue": {
                        "newValue": "<US_SSN>"
                      }
                    }
                  },
                  {
                    "fields": [
                      {
                        "name": "DOMAIN_NAME"
                      }
                    ],
                    "transformation": {
                      "replaceValue": {
                        "newValue": "<DOMAIN_NAME>"
                      }
                    }
                  },
                  {
                    "fields": [
                      {
                        "name": "DATE_TIME"
                      }
                    ],
                    "transformation": {
                      "replaceValue": {
                        "newValue": "<DATE_TIME>"
                      }
                    }
                  },
                  {
                    "fields": [
                      {
                        "name": "PERSON"
                      }
                    ],
                    "transformation": {
                      "replaceValue": {
                        "newValue": "<PERSON>"
                      }
                    }
                  },
                  {
                    "fields": [
                      {
                        "name": "US_DRIVER_LICENSE"
                      }
                    ],
                    "transformation": {
                      "replaceValue": {
                        "newValue": "<US_DRIVER_LICENSE>"
                      }
                    }
                  },
                  {
                    "fields": [
                      {
                        "name": "UK_NHS"
                      }
                    ],
                    "transformation": {
                      "replaceValue": {
                        "newValue": "<UK_NHS>"
                      }
                    }
                  },
                  {
                    "fields": [
                      {
                        "name": "CRYPTO"
                      }
                    ],
                    "transformation": {
                      "replaceValue": {
                        "newValue": "<CRYPTO>"
                      }
                    }
                  },
                  {
                    "fields": [
                      {
                        "name": "NRP"
                      }
                    ],
                    "transformation": {
                      "replaceValue": {
                        "newValue": "<NRP>"
                      }
                    }
                  },
                  {
                    "fields": [
                      {
                        "name": "LOCATION"
                      }
                    ],
                    "transformation": {
                      "replaceValue": {
                        "newValue": "<LOCATION>"
                      }
                    }
                  },
                  {
                    "fields": [
                      {
                        "name": "US_ITIN"
                      }
                    ],
                    "transformation": {
                      "replaceValue": {
                        "newValue": "<US_ITIN>"
                      }
                    }
                  },
                  {
                    "fields": [
                      {
                        "name": "US_PASSPORT"
                      }
                    ],
                    "transformation": {
                      "replaceValue": {
                        "newValue": "<US_PASSPORT>"
                      }
                    }
                  },
                  {
                    "fields": [
                      {
                        "name": "PASSPORT"
                      }
                    ],
                    "transformation": {
                      "replaceValue": {
                        "newValue": "<PASSPORT>"
                      }
                    }
                  },
                  {
                    "fields": [
                      {
                        "name": "COMPANY_NAME"
                      }
                    ],
                    "transformation": {
                      "replaceValue": {
                        "newValue": "<COMPANY_NAME>"
                      }
                    }
                  },
                  {
                    "fields": [
                      {
                        "name": "IBAN_CODE"
                      }
                    ],
                    "transformation": {
                      "replaceValue": {
                        "newValue": "<IBAN_CODE>"
                      }
                    }
                  }
                ]
              }
            })
            .then((res) => {
              return res.data;
            })
            .catch((error) => {
              return `${ context.activity.text }` // "Error: " + error.response.data
            }) 
            
            
            await context.sendActivity(response);

            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });

        this.onMembersAdded(async (context, next) => {
            const membersAdded = context.activity.membersAdded;
            for (let cnt = 0; cnt < membersAdded.length; ++cnt) {
                if (membersAdded[cnt].id !== context.activity.recipient.id) {
                    await context.sendActivity('Hello, welcome to Presidio-bot!');
                }
            }
            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });
    }
}

module.exports.EchoBot = EchoBot;
