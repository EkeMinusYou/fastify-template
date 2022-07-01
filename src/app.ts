import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify'

const fastify: FastifyInstance = Fastify({})

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          pong: {
            type: 'string'
          }
        }
      }
    }
  }
}

fastify.register(async () => {
  fastify.get('/ping', opts, async (request, reply) => {
    return { pong: 'it worked!' }
  })
})

fastify.listen({port: 3000})