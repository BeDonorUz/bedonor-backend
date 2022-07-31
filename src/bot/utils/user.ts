import { ExtContext } from './types';

export const needToRegister = (ctx: ExtContext): boolean => {
  if (!Object.prototype.hasOwnProperty.call(ctx.session, 'languageCode')) {
    ctx.scene.enter('register');
    return true;
  }

  return false;
};
