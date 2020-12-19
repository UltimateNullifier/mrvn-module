const https = require("https");

exports.mrvn = {
  post: async function (data, endpoint) {
    data = JSON.stringify(data);

    const options = {
      hostname: "api.mrvn.me",
      port: 443,
      path: `/p/${endpoint}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": data.length,
      },
    };

    const req = https.request(options, (res) => {
      console.log(`statusCode: ${res.statusCode}`);

      res.on("data", (d) => {
        process.stdout.write(d);
      });
    });

    req.on("error", (error) => {
      console.error(error);
    });

    req.write(data);
    return req.end();
  },
};
