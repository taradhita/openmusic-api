const failedResponse = (h, error) => h.response({
  status: 'fail',
  message: error.message,
}).code(error.statusCode);

const errorResponse = (h) => h.response({
  status: 'error',
  message: 'Terjadi kesalahan di sisi server',
}).code(500);

module.exports = { failedResponse, errorResponse };
