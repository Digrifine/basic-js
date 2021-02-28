const CustomError = require('../extensions/custom-error');

const chainMaker = {
	chain: [],
	getLength() {
		return this.chain.length;
	},
	addLink(value) {
		if (!this.chain) this.chain = [];
		this.chain.push(`( ${value} )`);
		return this;
	},
	removeLink(position) {
		if (
			position <= 0 ||
			position > this.chain.length ||
			typeof position !== 'number'
		) {
			delete this.chain;
			throw new Error();
		}
		this.chain.splice(position - 1, 1);
		return this;
	},
	reverseChain() {
		if (!this.chain) this.chain = [];
		this.chain.reverse();
		this.chain.reverse;
		return this;
	},
	finishChain() {
		let str = this.chain.join('~~');
		delete this.chain;
		return str;
	},
};

module.exports = chainMaker;
