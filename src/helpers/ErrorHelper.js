const { failedResponse, errorResponse } = require('../utils/responses');

const ClientError = require('../error/ClientError');

const errorHelper = (request, h) => {
  const { response } = request;

  if (response instanceof ClientError) {
    return failedResponse(h, response);
  } if (response instanceof Error) {
    const { statusCode, payload } = response.output;
    if (statusCode === 401) {
      return h.response(payload).code(401);
    } if (statusCode === 403) {
      return h.response(payload).code(403);
    } if (statusCode === 413) {
      return h.response(payload).code(413);
    }
    return errorResponse(h);
  }

  return response.continue || response;
};

module.exports = { errorHelper };
