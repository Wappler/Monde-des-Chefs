dmx.config({
  "users": {
    "data_detailUser": {
      "meta": [
        {
          "type": "number",
          "name": "userID"
        },
        {
          "type": "text",
          "name": "firstname"
        },
        {
          "type": "text",
          "name": "lastname"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "text",
          "name": "password"
        },
        {
          "type": "number",
          "name": "group"
        },
        {
          "type": "number",
          "name": "status"
        },
        {
          "type": "datetime",
          "name": "created"
        }
      ],
      "outputType": "array"
    }
  },
  "main": {
    "query": [
      {
        "type": "text",
        "name": "id"
      },
      {
        "type": "text",
        "name": "email"
      }
    ]
  }
});
