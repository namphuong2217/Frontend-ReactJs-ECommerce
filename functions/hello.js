const items = [
  { id: 1, name: "alice" },
  { id: 2, name: "alice" },
];

// domain/.netlify/functions/hello
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: "Hello world",
    // body: JSON.stringify(items)
  };
};
