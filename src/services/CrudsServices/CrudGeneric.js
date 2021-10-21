class docservice {
  // constructor that recive modelCollection for generic crud
  constructor(modelCollection) {
    this.ModelCollection = modelCollection
  }

  // function that return all docs
  async findAll() {
    const docs = await this.ModelCollection.find()
    return docs
  }

  // function that return all docs
  async findById({ id }) {
    const doc = await this.ModelCollection.findById(id)
    return doc
  }

  // function that return id of created docs
  async create({ docData }) {
    const hasCi = await this.ModelCollection.findOne({ ci: docData.ci })
    if (hasCi) return null
    const doc = new this.ModelCollection(docData)
    const { id: docId } = await doc.save()
    return docId
  }

  // function that return id of updated docs
  async update({ id, dataForUpdate }) {
    const { id: docFindedId } = await this.ModelCollection.findByIdAndUpdate(id, dataForUpdate)
    return docFindedId
  }

  async delete({ id }) {
    const { id: deletedId } = await this.ModelCollection.findByIdAndDelete(id)
    return deletedId
  }
}

module.exports = docservice
