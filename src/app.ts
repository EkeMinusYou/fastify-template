import Fastify, { FastifyInstance} from 'fastify'

const fastify: FastifyInstance = Fastify()

// cause error when there is no `async`. why??
// eslint-disable-next-line @typescript-eslint/require-await
async function routes (fastify: FastifyInstance) {
  fastify.get('/', () => {
    return { hello: 'world!' }
  })
}

void fastify.register(routes)

void fastify.listen({port: 3000})

