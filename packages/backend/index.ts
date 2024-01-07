import Fastify from 'fastify';
import fastifyPrisma from '@joggr/fastify-prisma';

const fastify = Fastify({
  logger: true,
});
fastify.register(fastifyPrisma);

fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});
fastify.get('/users', async (request, reply) => {
  const users = await fastify.prisma.user.findMany();
  return users;
});

const start = async () => {
  try {
    const s = await fastify.listen({ port: 3000 });
    console.log('Server listening on ', s);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
