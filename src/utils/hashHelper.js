import bcrypt from "bcryptjs";

const saltRounds = 10;

export const hash = (password) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt);
};

export const compare = (password, hash) => bcrypt.compareSync(password, hash); // true
