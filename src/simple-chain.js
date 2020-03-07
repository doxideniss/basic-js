const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(String(value))
    return this
  },
  removeLink(position) {
    if (!this.chain[position - 1]) {
      this.chain = []
      throw Error
    }
    this.chain = this.chain.filter((x, idx) => idx !== position - 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let arr = [...this.chain]
    this.chain = []
    return arr.map(x => {
      return `( ${x} )`
    }).join('~~')
  }
};


module.exports = chainMaker;
