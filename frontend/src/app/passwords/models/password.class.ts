export class Password {
  id: number | string;
  website: string;
  username: string;
  password: string;

  constructor(password?) {
    const { id } = password || ({} as any);
    const passwordId = id ? id : new Date().getTime();
    Object.assign(this, { id: passwordId }, password);
  }
}
