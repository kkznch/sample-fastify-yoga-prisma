import { app } from './app';

const start = async () => {
  try {
    const s = await app.listen({ port: 8080 });
    console.log('Server listening on ', s);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
