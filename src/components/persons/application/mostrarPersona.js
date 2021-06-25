export default ({ PersonRepository }) => {
  return async (id) => {
    return await PersonRepository.getById(id)
  }
}
