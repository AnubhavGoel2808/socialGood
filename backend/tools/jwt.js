const jwt = require('jsonwebtoken');
const token = require('../constants/token');
const Boom = require('@hapi/boom');
// kya error hai?? type karo...cant talk right now ???????????
// error solve kar diya....yeh bata ki abhi login alag alag user ke liye kaise karna hai?
// jo abhi diya hai usme hoga alag alag user
// authorize.js ka naya file bhej rha hu voh use karo.....
// TOTAL 3 DIFF KIND OF USER ROLE HAI
const jwtSecret = "DJHFJDHGJHD";
// const refreshTokenSecret = JSON.parse(process.env.REFRESH_TOKEN_SECRET);
const generateJwtToken = (user) => {
  return jwt.sign(
    {
      [token.TOKEN_KEY]: {
        'x-user-id': user.id.toString(),
      },
    },
    "DJHFJDHGJHD",
    {
      algorithm: "HS256",
      expiresIn: `60000000000000m`,
    }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      [token.TOKEN_KEY]: {
        'x-user-id': user.id.toString(),
      },
    },
    "abcdefg",
    {
      algorithm: "HS256",
      expiresIn: '60000000000m',
    }
  );
};

const verifyRefreshToken = async (refreshToken) => {
  try {
    return jwt.verify(refreshToken,"abcdefg");
  } catch (err) {
    throw Boom.unauthorized('Invalid Refresh Token');
  }
};

module.exports = {
  generateJwtToken,
  generateRefreshToken,
  verifyRefreshToken,
};
