import Fastify, { FastifyInstance} from 'fastify'

const fastify: FastifyInstance = Fastify()

async function routes (fastify: FastifyInstance): Promise<void> {
  fastify.get('/', () => {
    return { hello: 'world!' }
  })
}

void fastify.register(routes)

void fastify.listen({port: 3000}, (err, address) => {
  if (err) throw err
  console.log(`Server is now listening on ${address}`)
})

