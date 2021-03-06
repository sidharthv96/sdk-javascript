const schemaV1 = {
  $ref: "#/definitions/event",
  definitions: {
    specversion: {
      type: "string",
      minLength: 1,
      const: "1.0",
    },
    datacontenttype: {
      type: "string",
    },
    data: {
      type: ["object", "string"],
    },
    data_base64: {
      type: "string",
    },
    event: {
      properties: {
        specversion: {
          $ref: "#/definitions/specversion",
        },
        datacontenttype: {
          $ref: "#/definitions/datacontenttype",
        },
        data: {
          $ref: "#/definitions/data",
        },
        data_base64: {
          $ref: "#/definitions/data_base64",
        },
        id: {
          $ref: "#/definitions/id",
        },
        time: {
          $ref: "#/definitions/time",
        },
        dataschema: {
          $ref: "#/definitions/dataschema",
        },
        subject: {
          $ref: "#/definitions/subject",
        },
        type: {
          $ref: "#/definitions/type",
        },
        source: {
          $ref: "#/definitions/source",
        },
      },
      required: ["specversion", "id", "type", "source"],
      type: "object",
    },
    id: {
      type: "string",
      minLength: 1,
    },
    time: {
      format: "date-time",
      type: "string",
    },
    dataschema: {
      type: "string",
      format: "uri",
    },
    subject: {
      type: "string",
      minLength: 1,
    },
    type: {
      type: "string",
      minLength: 1,
    },
    source: {
      format: "uri-reference",
      type: "string",
    },
  },
  type: "object",
};

export { schemaV1 };
