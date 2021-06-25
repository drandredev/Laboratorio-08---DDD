export default ({ PersonRepository }) => {
  return async () => {
    return await PersonRepository.getAll()
  }
}
