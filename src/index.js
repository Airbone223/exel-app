import './module'
import './scss/index.scss'

console.log('2')


async function f() {
  return await Promise.resolve('async working')
}

f().then(console.log)
