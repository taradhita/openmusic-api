const { PlaylistPayloadSchema, PlaylistSongPayloadSchema } = require('./schema');
const InvariantError = require('../../error/InvariantError');

const PlaylistsValidator = {
  validatePlaylistPayload: (payload) => {
    const validationResult = PlaylistPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },

  validatePlaylistSongPayload: (payload) => {
    const playlistsongvalidationResult = PlaylistSongPayloadSchema.validate(payload);
    if (playlistsongvalidationResult.error) {
      throw new InvariantError(playlistsongvalidationResult.error.message);
    }
  },
};

module.exports = PlaylistsValidator;
