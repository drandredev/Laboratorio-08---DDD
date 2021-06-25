export default ({ PersonRepository }) => {
  return async (id) => {
    return await PersonRepository.delete(id)
  }
}
