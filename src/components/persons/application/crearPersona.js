export default ({ PersonRepository }) => {
  return async ({ name, number }) => {
    const nuevaPersona = {
      Name: name,
      Number: number,
      date: new Date().toISOString()
    }
    return await PersonRepository.add(nuevaPersona)
  }
}
