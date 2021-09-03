module.exports = async function (context, req) {

    responseMessage = {
        message: "Welcome to Sidoarjo Untukkita's API",
        status: "Everything Looks Normal.",
        version: "1.0.0",
        uptime: "I think about 200ms?",
        timestamp: Date.now(),
    }
    context.res = {
        body: responseMessage
    };
}