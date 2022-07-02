import Fastify, { FastifyInstance} from 'fastify'

const fastify: FastifyInstance = Fastify()

fastify.get('/', () => {
  return { hello: 'world!' }
})

const start = async () => {
  try {
    const address = await fastify.listen({ port: 3000 })
    console.log(`Server is now listening on ${address}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

void start()