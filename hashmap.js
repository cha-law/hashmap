class HashMap {
    constructor() {
        this.loadFactor = null;
        this.capacity = null;
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * this.hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    set(key, value) {

    }
}