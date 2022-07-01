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

void fastify.register(() => {
  fastify.get('/ping', opts, (_request, _reply) => {
    return { pong: 'it worked!' }
  })
})

void fastify.listen({port: 3000});