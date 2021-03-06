const {
  _register,
  _authenticate,
  _verifyRefreshToken,
  _getNewToken,
} = require('./handlers/auth');

const register = async (req, res, next) => {
  try {
    const registeredUser = await _register({ ...req.body });
    return res.status(200).json(registeredUser);
  } catch (error) {
    next(error);
  }
};

const authenticate = async (req, res, next) => {
  try {
    const authenticatedUser = await _authenticate({ ...req.body });
    return res.status(200).json(authenticatedUser);
  } catch (error) {
    next(error);
  }
};

const verifyRefreshToken = async (req, res, next) => {
  try {
    const verifiedUser = await _verifyRefreshToken({ ...req.body });
    return res.status(200).json(verifiedUser);
  } catch (error) {
    next(error);
  }
};

const getNewToken = async (req, res, next) => {
  try {
    const newTokens = await _getNewToken({ ...req.body });
    return res.status(200).json(newTokens);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  authenticate,
  verifyRefreshToken,
  getNewToken,
};
